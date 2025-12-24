import React from 'react';
import PrincipalLayout from '../../../components/PrincipalLayout/PrincipalLayout';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaIdCard, FaBriefcase, FaChalkboardTeacher } from 'react-icons/fa';

const TeacherDetails = () => {
  // Sample teacher data
  const teacher = {
    name: 'Dr. Rajesh Kumar',
    employeeId: 'TCH2024001',
    department: 'Anatomy',
    designation: 'Professor',
    email: 'rajesh.kumar@wbuhs.edu',
    phone: '+91 9876543210',
    address: '123 MG Road, Kolkata, West Bengal - 700001',
    dateOfBirth: 'March 15, 1975',
    gender: 'Male',
    qualification: 'MD Anatomy, PhD',
    experience: '15 years',
    joiningDate: 'August 15, 2009',
    status: 'Active',
    specialization: 'Gross Anatomy, Histology',
    publications: '25',
    researchProjects: '8'
  };

  return (
    <PrincipalLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUser className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Teacher Details</h2>
              <p className="text-gray-600 mt-1">Detailed information for {teacher.name}</p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
            <FaChalkboardTeacher className="mr-2" />
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaUser className="text-4xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.employeeId}</p>
              <p className="text-sm text-gray-500">{teacher.designation}</p>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-2 ${
                teacher.status === 'Active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {teacher.status}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3 text-indigo-500" />
                <span className="text-sm">{teacher.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-3 text-green-500" />
                <span className="text-sm">{teacher.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-3 text-red-500" />
                <span className="text-sm">{teacher.address}</span>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FaBriefcase className="mr-2 text-blue-500" />
              Professional Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Department</label>
                <p className="text-gray-800">{teacher.department}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Designation</label>
                <p className="text-gray-800">{teacher.designation}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Employee ID</label>
                <p className="text-gray-800">{teacher.employeeId}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Joining Date</label>
                <p className="text-gray-800">{teacher.joiningDate}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Experience</label>
                <p className="text-gray-800">{teacher.experience}</p>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FaGraduationCap className="mr-2 text-purple-500" />
              Academic Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Qualification</label>
                <p className="text-gray-800">{teacher.qualification}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Specialization</label>
                <p className="text-gray-800">{teacher.specialization}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Publications</label>
                <p className="text-gray-800">{teacher.publications}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Research Projects</label>
                <p className="text-gray-800">{teacher.researchProjects}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                <p className="text-gray-800">{teacher.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Gender</label>
                <p className="text-gray-800">{teacher.gender}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <FaCalendarAlt className="mr-2 text-orange-500" />
            Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <p className="text-sm text-gray-600 mt-1">Student Satisfaction</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">4.8</div>
              <p className="text-sm text-gray-600 mt-1">Average Rating</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <p className="text-sm text-gray-600 mt-1">Courses Taught</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">98%</div>
              <p className="text-sm text-gray-600 mt-1">Attendance Rate</p>
            </div>
          </div>
        </div>
      </div>
    </PrincipalLayout>
  );
};

export default TeacherDetails;
