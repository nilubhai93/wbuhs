import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacultyLayout from '../../components/FacultyLayout/FacultyLayout';
import { FaUniversity, FaMapMarkerAlt, FaUsers, FaBuilding, FaChalkboardTeacher } from 'react-icons/fa';
import { colleges as collegesData, students, teachers, hods } from '../../data/data.js';

const CollegeList = () => {
  const navigate = useNavigate();

  const colleges = collegesData.map(college => {
    const collegeStudents = students.filter(s => s.collegeId === college.id);
    const collegeTeachers = teachers.filter(t => t.collegeId === college.id);

    // Calculate total departments based on HOD assignments
    const collegeHods = hods.filter(hod => hod.collegeId === college.id);
    const uniqueDepartments = new Set(collegeHods.map(hod => hod.departmentId));
    const totalDepartments = uniqueDepartments.size;

    return {
      id: college.id,
      name: college.name,
      location: college.city,
      students: collegeStudents.length,
      departments: totalDepartments,
      teachers: collegeTeachers.length
    };
  });
 
  return (
    <FacultyLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUniversity className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">College List</h2>
              <p className="text-gray-600 mt-1">Manage and view all colleges under faculty supervision.</p>
            </div>
          </div>
        </div>

        {/* College Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <div key={college.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <FaUniversity className="text-blue-500 mr-3 text-2xl" />
                <h3 className="text-xl font-bold text-gray-800">{college.name}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{college.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaBuilding className="mr-2" />
                  <span>{college.departments} Departments</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaChalkboardTeacher className="mr-2" />
                  <span>{college.teachers} Teachers</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaUsers className="mr-2" />
                  <span>{college.students} Students</span>
                </div>
              </div>
              <button
                onClick={() => navigate(`/faculty/college-details/${college.id}`)}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </FacultyLayout>
  );
};

export default CollegeList;
