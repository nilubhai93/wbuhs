import React from 'react';
import PrincipalLayout from '../../../layouts/PrincipalLayout';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaIdCard, FaHeartbeat, FaUserMd } from 'react-icons/fa';

const StudentDetails = () => {
  // Sample student data
  const student = {
    name: 'Rahul Sharma',
    rollNo: 'MBBS2024001',
    department: 'Anatomy',
    year: '1st Year',
    semester: '1st Semester',
    email: 'rahul.sharma@wbuhs.edu',
    phone: '+91 9876543210',
    address: '123 MG Road, Kolkata, West Bengal - 700001',
    dateOfBirth: 'May 15, 2000',
    gender: 'Male',
    bloodGroup: 'O+',
    emergencyContact: '+91 9876543211',
    status: 'Active',
    admissionDate: 'August 15, 2023',
    guardianName: 'Mr. Rajesh Sharma',
    guardianPhone: '+91 9876543211'
  };

  return (
    <PrincipalLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUser className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Student Details</h2>
              <p className="text-gray-600 mt-1">Detailed information for {student.name}</p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
            <FaUserMd className="mr-2" />
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
              <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
              <p className="text-gray-600">{student.rollNo}</p>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-2 ${
                student.status === 'Active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {student.status}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3 text-indigo-500" />
                <span className="text-sm">{student.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-3 text-green-500" />
                <span className="text-sm">{student.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-3 text-red-500" />
                <span className="text-sm">{student.address}</span>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FaGraduationCap className="mr-2 text-blue-500" />
              Academic Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Department</label>
                <p className="text-gray-800">{student.department}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Current Year</label>
                <p className="text-gray-800">{student.year}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Current Semester</label>
                <p className="text-gray-800">{student.semester}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Roll Number</label>
                <p className="text-gray-800">{student.rollNo}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Admission Date</label>
                <p className="text-gray-800">{student.admissionDate}</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FaIdCard className="mr-2 text-purple-500" />
              Personal Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                <p className="text-gray-800">{student.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Gender</label>
                <p className="text-gray-800">{student.gender}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Blood Group</label>
                <p className="text-gray-800 flex items-center">
                  <FaHeartbeat className="mr-2 text-red-500" />
                  {student.bloodGroup}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Emergency Contact</label>
                <p className="text-gray-800">{student.emergencyContact}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Guardian Name</label>
                <p className="text-gray-800">{student.guardianName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Guardian Phone</label>
                <p className="text-gray-800">{student.guardianPhone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <FaCalendarAlt className="mr-2 text-orange-500" />
            Additional Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <p className="text-sm text-gray-600 mt-1">Attendance Rate</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">8.5</div>
              <p className="text-sm text-gray-600 mt-1">Current CGPA</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">2</div>
              <p className="text-sm text-gray-600 mt-1">Backlogs</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">12</div>
              <p className="text-sm text-gray-600 mt-1">Credits Earned</p>
            </div>
          </div>
        </div>
      </div>
    </PrincipalLayout>
  );
};

export default StudentDetails;
