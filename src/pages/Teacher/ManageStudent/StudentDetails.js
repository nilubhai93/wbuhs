import React from 'react';
import TeacherLayout from '../../../components/teacherLayout/TeacherLayout';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaCalendarCheck } from 'react-icons/fa';

const StudentDetails = () => {
  // Sample student data
  const student = {
    id: 1,
    name: 'Rahul Sharma',
    rollNo: 'MBBS2021001',
    year: '3rd Year',
    subject: 'Anatomy',
    email: 'rahul.sharma@student.wbuhs.edu',
    phone: '+91 98765 12345',
    attendance: 92,
    cgpa: 8.7,
    status: 'Active',
    address: 'Kolkata, West Bengal',
    guardian: 'Mr. Amit Sharma',
    dateOfBirth: '1998-05-15',
    admissionDate: '2021-08-01'
  };

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center">
          <FaUser className="mr-3 text-indigo-600 text-3xl" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Student Details</h2>
            <p className="text-gray-600 mt-1">View detailed information about the student</p>
          </div>
        </div>

        {/* Student Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-lg font-semibold text-gray-900">{student.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Roll Number</label>
                <p className="mt-1 text-lg text-gray-900">{student.rollNo}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <p className="mt-1 text-lg text-gray-900">{student.year}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <p className="mt-1 text-lg text-gray-900">{student.subject}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${student.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {student.status}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center mt-1">
                  <FaEnvelope className="mr-2 text-gray-400" />
                  <p className="text-lg text-gray-900">{student.email}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <div className="flex items-center mt-1">
                  <FaPhone className="mr-2 text-gray-400" />
                  <p className="text-lg text-gray-900">{student.phone}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <div className="flex items-center mt-1">
                  <FaMapMarkerAlt className="mr-2 text-gray-400" />
                  <p className="text-lg text-gray-900">{student.address}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Guardian</label>
                <p className="mt-1 text-lg text-gray-900">{student.guardian}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <p className="mt-1 text-lg text-gray-900">{student.dateOfBirth}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Academic Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <FaGraduationCap className="mx-auto text-3xl text-indigo-500 mb-2" />
              <p className="text-sm text-gray-600">CGPA</p>
              <p className="text-2xl font-bold text-gray-800">{student.cgpa}</p>
            </div>
            <div className="text-center">
              <FaCalendarCheck className="mx-auto text-3xl text-green-500 mb-2" />
              <p className="text-sm text-gray-600">Attendance</p>
              <p className="text-2xl font-bold text-gray-800">{student.attendance}%</p>
            </div>
            <div className="text-center">
              <FaUser className="mx-auto text-3xl text-blue-500 mb-2" />
              <p className="text-sm text-gray-600">Admission Date</p>
              <p className="text-lg font-semibold text-gray-800">{student.admissionDate}</p>
            </div>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default StudentDetails;
