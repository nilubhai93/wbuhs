import React from 'react';
import ParentLayout from '../../../components/ParentLayout/ParentLayout';
import {
  FaTachometerAlt,
  FaChild,
  FaClipboardList,
  FaCreditCard,
  FaChartLine,
  FaClock,
  FaUser,
  FaCalendarAlt,
  FaBook,
  FaMoneyBillWave
} from 'react-icons/fa';

const ParentDashboard = () => {
  // Stats Data for Parent
  const stats = [
    {
      id: 1,
      title: 'Child Attendance',
      value: '92%',
      icon: <FaClipboardList className="text-4xl" />,
      bgColor: 'bg-green-500',
      textColor: 'text-green-500',
      change: 'This month'
    },
    {
      id: 2,
      title: 'Academic Performance',
      value: '8.5/10',
      icon: <FaBook className="text-4xl" />,
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      change: 'Current semester'
    },
    {
      id: 3,
      title: 'Pending Fees',
      value: '₹12,500',
      icon: <FaMoneyBillWave className="text-4xl" />,
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-500',
      change: 'Due this week'
    },
    {
      id: 4,
      title: 'Upcoming Events',
      value: '3',
      icon: <FaCalendarAlt className="text-4xl" />,
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-500',
      change: 'This month'
    }
  ];

  // Child Information
  const childInfo = {
    name: 'Rahul Sharma',
    class: 'MBBS 2nd Year',
    rollNumber: '2023MBBS001',
    department: 'Anatomy'
  };

  // Recent Activities
  const recentActivities = [
    {
      id: 1,
      type: 'attendance',
      message: 'Marked present for Physiology class',
      time: '2 hours ago',
      icon: <FaClipboardList className="text-green-500" />
    },
    {
      id: 2,
      type: 'academic',
      message: 'Scored 85% in Biochemistry exam',
      time: '1 day ago',
      icon: <FaBook className="text-blue-500" />
    },
    {
      id: 3,
      type: 'payment',
      message: 'Tuition fee payment received',
      time: '3 days ago',
      icon: <FaCreditCard className="text-orange-500" />
    },
    {
      id: 4,
      type: 'event',
      message: 'Registered for Medical Camp',
      time: '1 week ago',
      icon: <FaCalendarAlt className="text-purple-500" />
    }
  ];

  return (
    <ParentLayout>
      <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaUser className="mr-3 text-indigo-600 text-3xl" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Parent Dashboard</h2>
            <p className="text-gray-600 mt-1">Welcome back! Here's your child's academic overview.</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <FaClock className="inline mr-2" />
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>

      {/* Child Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FaChild className="text-blue-500 mr-2 text-xl" />
          <h3 className="text-xl font-bold text-gray-800">Child Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">{childInfo.name}</div>
            <p className="text-sm text-gray-600 mt-1">Name</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">{childInfo.class}</div>
            <p className="text-sm text-gray-600 mt-1">Class</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">{childInfo.rollNumber}</div>
            <p className="text-sm text-gray-600 mt-1">Roll Number</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-lg font-bold text-orange-600">{childInfo.department}</div>
            <p className="text-sm text-gray-600 mt-1">Department</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-gray-600 text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
              <div className={`${stat.bgColor} bg-opacity-10 p-4 rounded-lg`}>
                <div className={stat.textColor}>
                  {stat.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <FaClipboardList className="text-blue-500 mr-2 text-xl" />
          <h3 className="text-xl font-bold text-gray-800">Recent Activities</h3>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="mr-4">
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{activity.message}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
            <FaChild className="text-3xl mb-2" />
            <span className="text-sm font-medium">View Profile</span>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
            <FaClipboardList className="text-3xl mb-2" />
            <span className="text-sm font-medium">Check Attendance</span>
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
            <FaBook className="text-3xl mb-2" />
            <span className="text-sm font-medium">Academic Records</span>
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
            <FaCreditCard className="text-3xl mb-2" />
            <span className="text-sm font-medium">Payment History</span>
          </button>
        </div>
      </div>
      </div>
    </ParentLayout>
  );
};

export default ParentDashboard;
