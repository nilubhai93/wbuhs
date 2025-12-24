import React, { useState } from 'react';
import HODLayout from '../../../components/HodLayout/HODLayout';
import {
  FaUserMd,
  FaSearch,
  FaFilter,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
  FaCalendarCheck,
  FaTrophy,
  FaClock,
  FaGraduationCap,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const TeacherList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('All');

  // Sample teacher data
  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      subject: 'Anatomy',
      email: 'sarah.johnson@wbuhs.edu',
      phone: '+91 98765 43210',
      experience: '12 years',
      rating: 4.9,
      attendance: 96,
      students: 65,
      status: 'Active',
      joinDate: '2012-08-15',
      qualification: 'MD, PhD'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      subject: 'Physiology',
      email: 'michael.chen@wbuhs.edu',
      phone: '+91 98765 43211',
      experience: '10 years',
      rating: 4.7,
      attendance: 94,
      students: 58,
      status: 'Active',
      joinDate: '2014-07-20',
      qualification: 'MD, MSc'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      subject: 'Biochemistry',
      email: 'emily.davis@wbuhs.edu',
      phone: '+91 98765 43212',
      experience: '8 years',
      rating: 4.8,
      attendance: 97,
      students: 52,
      status: 'Active',
      joinDate: '2016-09-10',
      qualification: 'PhD, MSc'
    },
    {
      id: 4,
      name: 'Dr. Robert Wilson',
      subject: 'Pathology',
      email: 'robert.wilson@wbuhs.edu',
      phone: '+91 98765 43213',
      experience: '15 years',
      rating: 4.6,
      attendance: 95,
      students: 48,
      status: 'Active',
      joinDate: '2009-06-05',
      qualification: 'MD, FRCPath'
    },
    {
      id: 5,
      name: 'Dr. Lisa Anderson',
      subject: 'Pharmacology',
      email: 'lisa.anderson@wbuhs.edu',
      phone: '+91 98765 43214',
      experience: '9 years',
      rating: 4.5,
      attendance: 93,
      students: 45,
      status: 'Active',
      joinDate: '2015-03-12',
      qualification: 'PhD, MSc'
    }
  ];

  const subjects = ['All', 'Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Pharmacology'];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterSubject === 'All' || teacher.subject === filterSubject;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600';
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.8) return 'text-green-600';
    if (rating >= 4.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <HODLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUserMd className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Manage Teachers</h2>
              <p className="text-gray-600 mt-1">View and manage department faculty members</p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <FaPlus className="mr-2" />
            Add Teacher
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Teachers</p>
                <p className="text-3xl font-bold text-gray-800">{teachers.length}</p>
              </div>
              <FaUserMd className="text-indigo-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Teachers</p>
                <p className="text-3xl font-bold text-gray-800">
                  {teachers.filter(t => t.status === 'Active').length}
                </p>
              </div>
              <FaCalendarCheck className="text-green-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg Rating</p>
                <p className="text-3xl font-bold text-gray-800">
                  {(teachers.reduce((sum, t) => sum + t.rating, 0) / teachers.length).toFixed(1)}
                </p>
              </div>
              <FaTrophy className="text-yellow-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Students</p>
                <p className="text-3xl font-bold text-gray-800">
                  {teachers.reduce((sum, t) => sum + t.students, 0)}
                </p>
              </div>
              <FaGraduationCap className="text-blue-500 text-3xl" />
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
                  placeholder="Search teachers by name, subject, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-400" />
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

        {/* Teachers Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Faculty Members</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTeachers.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <FaUserMd className="text-indigo-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                          <div className="text-sm text-gray-500">{teacher.qualification}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{teacher.subject}</div>
                      <div className="text-sm text-gray-500">{teacher.experience}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <FaEnvelope className="mr-1" />
                          {teacher.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FaPhone className="mr-1" />
                          {teacher.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <FaTrophy className={`mr-1 ${getRatingColor(teacher.rating)}`} />
                          <span className="text-sm font-medium">{teacher.rating}/5</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarCheck className="mr-1 text-green-500" />
                          <span className="text-sm text-gray-500">{teacher.attendance}% attendance</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(teacher.status)}`}>
                        {teacher.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900 p-1">
                          <FaEye />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900 p-1">
                          <FaEdit />
                        </button>
                        <button className="text-red-600 hover:text-red-900 p-1">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredTeachers.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No teachers found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </HODLayout>
  );
};

export default TeacherList;


