import React, { useState } from 'react';
import FacultyLayout from '../../components/FacultyLayout/FacultyLayout';
import { FaStethoscope, FaUsers, FaUserTie, FaEye, FaEdit, FaBuilding, FaTimes, FaSave, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { departments as allDepartments, hods, colleges, teachers, students } from '../../data/data.js';

const DepartmentList = () => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    color: ''
  });

  const departments = allDepartments.map(dept => {
    // Get unique college IDs that have this department (via HODs)
    const collegesWithDeptIds = new Set(
      hods
        .filter(hod => hod.departmentId === dept.id)
        .map(hod => hod.collegeId)
    );
    
    const collegesWithDept = collegesWithDeptIds.size;

    // Only count teachers from colleges that have this department assigned
    const totalTeachers = teachers.filter(teacher => 
      teacher.departmentId === dept.id && collegesWithDeptIds.has(teacher.collegeId)
    ).length;
    
    // Only count students from colleges that have this department assigned
    const totalStudents = students.filter(student => 
      student.departmentId === dept.id && collegesWithDeptIds.has(student.collegeId)
    ).length;

    return {
      id: dept.id,
      name: dept.name,
      color: dept.color,
      icon: dept.icon,
      collegesAssigned: collegesWithDept,
      totalTeachers,
      totalStudents
    };
  });

  const handleEditClick = (dept) => {
    setEditingDepartment(dept);
    setFormData({
      name: dept.name,
      color: dept.color
    });
    setIsEditModalOpen(true);
  };

  const handleAddClick = () => {
    setFormData({
      name: '',
      color: 'bg-blue-100 text-blue-600' // Default color
    });
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
    setEditingDepartment(null);
    setFormData({
      name: '',
      color: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAddModalOpen) {
      // Add new department logic
      alert(`Department "${formData.name}" added successfully!`);
    } else {
      // Update existing department logic
      alert(`Department "${formData.name}" updated successfully!`);
    }
    handleCloseModal();
  };

  const colorOptions = [
    { value: 'bg-red-100 text-red-600', label: 'Red' },
    { value: 'bg-pink-100 text-pink-600', label: 'Pink' },
    { value: 'bg-purple-100 text-purple-600', label: 'Purple' },
    { value: 'bg-blue-100 text-blue-600', label: 'Blue' },
    { value: 'bg-green-100 text-green-600', label: 'Green' },
    { value: 'bg-yellow-100 text-yellow-600', label: 'Yellow' },
    { value: 'bg-gray-100 text-gray-600', label: 'Gray' },
    { value: 'bg-teal-100 text-teal-600', label: 'Teal' },
    { value: 'bg-indigo-100 text-indigo-600', label: 'Indigo' },
    { value: 'bg-orange-100 text-orange-600', label: 'Orange' },
    { value: 'bg-rose-100 text-rose-600', label: 'Rose' },
    { value: 'bg-cyan-100 text-cyan-600', label: 'Cyan' }
  ];

  return (
    <FacultyLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaStethoscope className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Department List</h2>
              <p className="text-gray-600 mt-1">Manage and view all departments in the faculty.</p>
            </div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`${dept.color} p-3 rounded-lg mr-4`}>
                  <FaStethoscope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{dept.name}</h3>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaUserTie className="text-green-500 mr-2" />
                    <span className="text-gray-600">Teachers</span>
                  </div>
                  <span className="font-semibold">{dept.totalTeachers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaUsers className="text-blue-500 mr-2" />
                    <span className="text-gray-600">Students</span>
                  </div>
                  <span className="font-semibold">{dept.totalStudents}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaBuilding className="text-purple-500 mr-2" />
                    <span className="text-gray-600">Colleges</span>
                  </div>
                  <span className="font-semibold">{dept.collegesAssigned}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => navigate(`/faculty/view-department/${dept.id}`)}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-sm"
                >
                  <FaEye className="mr-2" />
                  View
                </button>
                <button
                  onClick={() => handleEditClick(dept)}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-sm"
                >
                  <FaEdit className="mr-2" />
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Department Button */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <button 
              onClick={handleAddClick}
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center mx-auto"
            >
              <FaPlus className="mr-2" />
              Add New Department
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
              <div className="flex items-center">
                <FaEdit className="mr-3 text-orange-600 text-2xl" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Edit Department</h3>
                  <p className="text-sm text-gray-600 mt-1">Update department information</p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Department Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  placeholder="Enter department name"
                />
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department Color <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {colorOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, color: option.value })}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.color === option.value
                          ? 'border-orange-500 ring-2 ring-orange-200'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className={`${option.value} p-2 rounded flex items-center justify-center`}>
                        <FaStethoscope className="text-xl" />
                      </div>
                      <p className="text-xs text-center mt-1 text-gray-600">{option.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Preview:</p>
                <div className="flex items-center">
                  <div className={`${formData.color} p-3 rounded-lg mr-3`}>
                    <FaStethoscope className="text-white text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">{formData.name || 'Department Name'}</h4>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors flex items-center font-medium"
                >
                  <FaSave className="mr-2" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Department Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
              <div className="flex items-center">
                <FaStethoscope className="mr-3 text-green-600 text-2xl" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Add New Department</h3>
                  <p className="text-sm text-gray-600 mt-1">Create a new department</p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Department Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="Enter department name"
                />
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department Color <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {colorOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, color: option.value })}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.color === option.value
                          ? 'border-green-500 ring-2 ring-green-200'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className={`${option.value} p-2 rounded flex items-center justify-center`}>
                        <FaStethoscope className="text-xl" />
                      </div>
                      <p className="text-xs text-center mt-1 text-gray-600">{option.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Preview:</p>
                <div className="flex items-center">
                  <div className={`${formData.color} p-3 rounded-lg mr-3`}>
                    <FaStethoscope className="text-white text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">{formData.name || 'Department Name'}</h4>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center font-medium"
                >
                  <FaSave className="mr-2" />
                  Add Department
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </FacultyLayout>
  );
};

export default DepartmentList;