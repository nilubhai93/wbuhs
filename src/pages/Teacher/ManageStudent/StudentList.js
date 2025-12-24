import React, { useState } from 'react';
import TeacherLayout from '../../../components/teacherLayout/TeacherLayout';
import {
  FaGraduationCap,
  FaSearch,
  FaFilter,
  FaEye,
  FaCalendarCheck,
  FaTrophy,
  FaClock,
  FaUserMd,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const StudentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('All');
  const [filterSubject, setFilterSubject] = useState('All');

  // Sample student data
  const students = [
    {
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
      guardian: 'Mr. Amit Sharma'
    },
    {
      id: 2,
      name: 'Priya Singh',
      rollNo: 'MBBS2021002',
      year: '3rd Year',
      subject: 'Physiology',
      email: 'priya.singh@student.wbuhs.edu',
      phone: '+91 98765 12346',
      attendance: 95,
      cgpa: 9.1,
      status: 'Active',
      address: 'Howrah, West Bengal',
      guardian: 'Mrs. Sunita Singh'
    },
    {
      id: 3,
      name: 'Arun Kumar',
      rollNo: 'MBBS2021003',
      year: '2nd Year',
      subject: 'Biochemistry',
      email: 'arun.kumar@student.wbuhs.edu',
      phone: '+91 98765 12347',
      attendance: 88,
      cgpa: 8.3,
      status: 'Active',
      address: 'Bardhaman, West Bengal',
      guardian: 'Mr. Rajesh Kumar'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      rollNo: 'MBBS2021004',
      year: '4th Year',
      subject: 'Pathology',
      email: 'sneha.patel@student.wbuhs.edu',
      phone: '+91 98765 12348',
      attendance: 96,
      cgpa: 9.4,
      status: 'Active',
      address: 'Siliguri, West Bengal',
      guardian: 'Dr. Vikram Patel'
    },
    {
      id: 5,
      name: 'Karan Gupta',
      rollNo: 'MBBS2021005',
      year: '1st Year',
      subject: 'Anatomy',
      email: 'karan.gupta@student.wbuhs.edu',
      phone: '+91 98765 12349',
      attendance: 90,
      cgpa: 8.5,
      status: 'Active',
      address: 'Durgapur, West Bengal',
      guardian: 'Mrs. Meera Gupta'
    },
    {
      id: 6,
      name: 'Anjali Das',
      rollNo: 'MBBS2021006',
      year: '2nd Year',
      subject: 'Pharmacology',
      email: 'anjali.das@student.wbuhs.edu',
      phone: '+91 98765 12350',
      attendance: 93,
      cgpa: 8.9,
      status: 'Active',
      address: 'Kharagpur, West Bengal',
      guardian: 'Mr. Sandeep Das'
    }
  ];

  const years = ['All', '1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year'];
  const subjects = ['All', 'Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Pharmacology'];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === 'All' || student.year === filterYear;
    const matchesSubject = filterSubject === 'All' || student.subject === filterSubject;
    return matchesSearch && matchesYear && matchesSubject;
  });

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600';
  };

  const getCGPAColor = (cgpa) => {
    if (cgpa >= 9.0) return 'text-green-600';
    if (cgpa >= 8.0) return 'text-yellow-600';
    if (cgpa >= 7.0) return 'text-orange-600';
    return 'text-red-600';
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return 'text-green-600';
    if (attendance >= 80) return 'text-yellow-600';
    if (attendance >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaGraduationCap className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Manage Students</h2>
              <p className="text-gray-600 mt-1">View student information</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Students</p>
                <p className="text-3xl font-bold text-gray-800">{students.length}</p>
              </div>
              <FaGraduationCap className="text-indigo-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Students</p>
                <p className="text-3xl font-bold text-gray-800">
                  {students.filter(s => s.status === 'Active').length}
                </p>
              </div>
              <FaCalendarCheck className="text-green-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg CGPA</p>
                <p className="text-3xl font-bold text-gray-800">
                  {(students.reduce((sum, s) => sum + s.cgpa, 0) / students.length).toFixed(1)}
                </p>
              </div>
              <FaTrophy className="text-yellow-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg Attendance</p>
                <p className="text-3xl font-bold text-gray-800">
                  {Math.round(students.reduce((sum, s) => sum + s.attendance, 0) / students.length)}%
                </p>
              </div>
              <FaUserMd className="text-blue-500 text-3xl" />
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students by name, roll number, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-400" />
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={filterSubject}
                  onChange={(e) => setFilterSubject(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Student Records</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Academic Info</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <FaGraduationCap className="text-indigo-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.rollNo}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.year}</div>
                      <div className="text-sm text-gray-500">{student.subject}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <FaEnvelope className="mr-1" />
                          {student.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FaPhone className="mr-1" />
                          {student.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FaMapMarkerAlt className="mr-1" />
                          {student.address}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <FaTrophy className={`mr-1 ${getCGPAColor(student.cgpa)}`} />
                          <span className="text-sm font-medium">CGPA: {student.cgpa}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarCheck className={`mr-1 ${getAttendanceColor(student.attendance)}`} />
                          <span className="text-sm text-gray-500">{student.attendance}% attendance</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900 p-1">
                          <FaEye />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No students found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </TeacherLayout>
  );
};

export default StudentList;
