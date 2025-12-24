import React, { useState } from 'react';
import FacultyLayout from '../../components/FacultyLayout/FacultyLayout';
import { FaPlus, FaStethoscope } from 'react-icons/fa';

const AddDepartment = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    headOfDepartment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Department added successfully!');
    setFormData({ name: '', description: '', headOfDepartment: '' });
  };

  return (
    <FacultyLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaPlus className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Add New Department</h2>
              <p className="text-gray-600 mt-1">Create a new department in the faculty.</p>
            </div>
          </div>
        </div>

        {/* Add Department Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter department name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter department description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Head of Department</label>
              <input
                type="text"
                name="headOfDepartment"
                value={formData.headOfDepartment}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter HOD name"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center"
            >
              <FaPlus className="mr-2" />
              Add Department
            </button>
          </form>
        </div>
      </div>
    </FacultyLayout>
  );
};

export default AddDepartment;
