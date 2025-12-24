import React from 'react';
import HODLayout from '../../../components/HodLayout/HODLayout';
import {
  FaTachometerAlt,
  FaUsers,
  FaCalendarCheck,
  FaUserMd,
  FaChartLine,
  FaClipboardList,
  FaTrophy,
  FaClock,
  FaStethoscope,
  FaMicroscope,
  FaHeartbeat,
  FaBrain,
  FaTooth,
  FaEye,
  FaBone
} from 'react-icons/fa';

const HODDashboard = () => {
  // Stats Data for HOD
  const stats = [
    {
      id: 1,
      title: 'Total Students',
      value: '245',
      icon: <FaUsers className="text-4xl" />,
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      change: '+15 this semester'
    },
    {
      id: 2,
      title: 'Department Faculty',
      value: '18',
      icon: <FaUserMd className="text-4xl" />,
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-500',
      change: 'Active teachers'
    },
    {
      id: 3,
      title: 'Attendance Rate',
      value: '94%',
      icon: <FaCalendarCheck className="text-4xl" />,
      bgColor: 'bg-green-500',
      textColor: 'text-green-500',
      change: 'Department average'
    },
    {
      id: 4,
      title: 'Pending Reports',
      value: '12',
      icon: <FaChartLine className="text-4xl" />,
      bgColor: 'bg-red-500',
      textColor: 'text-red-500',
      change: 'Due this week'
    }
  ];

  // Department Courses
  const courses = [
    { name: 'Anatomy', icon: <FaBone />, students: 65, color: 'bg-red-100 text-red-600' },
    { name: 'Physiology', icon: <FaHeartbeat />, students: 58, color: 'bg-pink-100 text-pink-600' },
    { name: 'Biochemistry', icon: <FaMicroscope />, students: 52, color: 'bg-purple-100 text-purple-600' },
    { name: 'Pathology', icon: <FaStethoscope />, students: 48, color: 'bg-blue-100 text-blue-600' }
  ];

  // Faculty Performance
  const facultyPerformance = [
    {
      name: 'Dr. Sarah Johnson',
      subject: 'Anatomy',
      rating: 4.9,
      students: 65,
      attendance: 96
    },
    {
      name: 'Dr. Michael Chen',
      subject: 'Physiology',
      rating: 4.7,
      students: 58,
      attendance: 94
    },
    {
      name: 'Dr. Emily Davis',
      subject: 'Biochemistry',
      rating: 4.8,
      students: 52,
      attendance: 97
    },
    {
      name: 'Dr. Robert Wilson',
      subject: 'Pathology',
      rating: 4.6,
      students: 48,
      attendance: 95
    }
  ];

  return (
    <HODLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <FaUserMd className="mr-3 text-orange-600 text-3xl" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">HOD Dashboard</h2>
              <p className="text-sm md:text-base text-gray-600 mt-1">Welcome back! Here's your departmental overview.</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <FaClock className="inline mr-2" />
            <span className="hidden md:inline">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="md:hidden">
              {new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-xs md:text-sm font-medium mb-1">{stat.title}</p>
                  <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
                <div className={`${stat.bgColor} bg-opacity-10 p-3 md:p-4 rounded-lg`}>
                  <div className={stat.textColor}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Department Courses */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="flex items-center mb-4 md:mb-6">
            <FaStethoscope className="text-green-500 mr-2 text-lg md:text-xl" />
            <h3 className="text-lg md:text-xl font-bold text-gray-800">Department Courses</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {courses.map((course, index) => (
              <div key={index} className="flex items-center p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`${course.color} p-2 md:p-3 rounded-lg mr-3 md:mr-4 text-xl md:text-2xl`}>
                  {course.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-800">{course.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{course.students} students</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Performance */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="flex items-center mb-4 md:mb-6">
            <FaTrophy className="text-blue-500 mr-2 text-lg md:text-xl" />
            <h3 className="text-lg md:text-xl font-bold text-gray-800">Faculty Performance</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {facultyPerformance.map((faculty, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-gray-800">{faculty.name}</h4>
                    <p className="text-xs md:text-sm text-gray-600">{faculty.subject}</p>
                  </div>
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                    {faculty.students} students
                  </span>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaTrophy className="mr-2 text-yellow-500" />
                    <span>Rating: {faculty.rating}/5</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarCheck className="mr-2 text-green-500" />
                    <span>Attendance: {faculty.attendance}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white p-3 md:p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaUsers className="text-2xl md:text-3xl mb-2" />
              <span className="text-xs md:text-sm font-medium text-center">Manage Students</span>
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaUserMd className="text-2xl md:text-3xl mb-2" />
              <span className="text-xs md:text-sm font-medium text-center">Manage Teachers</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 md:p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaChartLine className="text-2xl md:text-3xl mb-2" />
              <span className="text-xs md:text-sm font-medium text-center">View Reports</span>
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white p-3 md:p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaClipboardList className="text-2xl md:text-3xl mb-2" />
              <span className="text-xs md:text-sm font-medium text-center">Department Info</span>
            </button>
          </div>
        </div>

        {/* Department Performance */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="flex items-center mb-4">
            <FaTrophy className="text-yellow-500 mr-2 text-lg md:text-xl" />
            <h3 className="text-lg md:text-xl font-bold text-gray-800">Department Performance</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="text-center p-3 md:p-4 bg-green-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-green-600">4.8</div>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Average Faculty Rating</p>
            </div>
            <div className="text-center p-3 md:p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">94%</div>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Overall Attendance</p>
            </div>
            <div className="text-center p-3 md:p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">245</div>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Total Students</p>
            </div>
          </div>
        </div>
      </div>
    </HODLayout>
  );
};

export default HODDashboard;