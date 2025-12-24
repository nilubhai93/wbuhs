import React from 'react';
import TeacherLayout from '../../../components/teacherLayout/TeacherLayout';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const ViewProfile = () => {
  // Sample teacher profile data
  const teacher = {
    id: 1,
    name: 'Dr. Amit Kumar',
    employeeId: 'TCH2023001',
    department: 'Anatomy',
    designation: 'Assistant Professor',
    email: 'amit.kumar@wbuhs.edu',
    phone: '+91 98765 12345',
    address: 'Kolkata, West Bengal',
    dateOfBirth: '1985-03-20',
    joiningDate: '2015-08-01',
    qualification: 'MD Anatomy',
    experience: '8 years',
    specialization: 'Gross Anatomy, Histology'
  };

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center">
          <FaUser className="mr-3 text-indigo-600 text-3xl" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">My Profile</h2>
            <p className="text-gray-600 mt-1">View your profile information</p>
          </div>
        </div>

        {/* Profile Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-lg font-semibold text-gray-900">{teacher.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                <p className="mt-1 text-lg text-gray-900">{teacher.employeeId}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <p className="mt-1 text-lg text-gray-900">{teacher.department}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Designation</label>
                <p className="mt-1 text-lg text-gray-900">{teacher.designation}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Qualification</label>
                <p className="mt-1 text-lg text-gray-900">{teacher.qualification}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center mt-1">
                  <FaEnvelope className="mr-2 text-gray-400" />
                  <p className="text-lg text-gray-900">{teacher.email}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <div className="flex items-center mt-1">
                  <FaPhone className="mr-2 text-gray-400" />
                  <p className="text-lg text-gray-900">{teacher.phone}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <div className="flex items-center mt-1">
                  <FaMapMarkerAlt className="mr-2 text-gray-400" />
                  <p className="text-lg text-gray-900">{teacher.address}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <p className="mt-1 text-lg text-gray-900">{teacher.dateOfBirth}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Joining Date</label>
                <p className="mt-1 text-lg text-gray-900">{teacher.joiningDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <FaBriefcase className="mx-auto text-3xl text-indigo-500 mb-2" />
              <p className="text-sm text-gray-600">Experience</p>
              <p className="text-2xl font-bold text-gray-800">{teacher.experience}</p>
            </div>
            <div className="text-center">
              <FaGraduationCap className="mx-auto text-3xl text-green-500 mb-2" />
              <p className="text-sm text-gray-600">Specialization</p>
              <p className="text-lg font-semibold text-gray-800">{teacher.specialization}</p>
            </div>
            <div className="text-center">
              <FaUser className="mx-auto text-3xl text-blue-500 mb-2" />
              <p className="text-sm text-gray-600">Department</p>
              <p className="text-lg font-semibold text-gray-800">{teacher.department}</p>
            </div>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default ViewProfile;
