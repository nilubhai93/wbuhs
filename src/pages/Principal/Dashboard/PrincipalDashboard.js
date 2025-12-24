import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrincipalLayout from '../../../components/PrincipalLayout/PrincipalLayout';
import {
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
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
import { colleges, students, teachers, departments, hods, principals } from '../../../data/data';

const PrincipalDashboard = () => {
  const navigate = useNavigate();

  // Stats Data for Principal
  const stats = [
    {
      id: 1,
      title: 'Total Students',
      value: '1,245',
      icon: <FaUsers className="text-4xl" />,
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      change: '+85 this year'
    },
    {
      id: 2,
      title: 'Total Faculty',
      value: '89',
      icon: <FaUserTie className="text-4xl" />,
      bgColor: 'bg-indigo-500',
      textColor: 'text-indigo-500',
      change: '+12 new hires'
    },
    {
      id: 3,
      title: 'Total HODs',
      value: '15',
      icon: <FaChartLine className="text-4xl" />,
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-500',
      change: 'Medical departments'
    },
    {
      id: 4,
      title: 'Departments',
      value: '12',
      icon: <FaStethoscope className="text-4xl" />,
      bgColor: 'bg-red-500',
      textColor: 'text-red-500',
      change: 'Medical specializations'
    },
    {
      id: 5,
      title: 'Overall Attendance',
      value: '94%',
      icon: <FaClipboardList className="text-4xl" />,
      bgColor: 'bg-green-500',
      textColor: 'text-green-500',
      change: 'Above target'
    },
    {
      id: 6,
      title: 'Pending Applications',
      value: '8',
      icon: <FaTrophy className="text-4xl" />,
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-500',
      change: 'Awaiting approval'
    }
  ];

  // Medical Departments with real data
  const departmentStats = departments.slice(0, 7).map(dept => {
    const deptStudents = students.filter(s => s.departmentId === dept.id);
    const deptTeachers = teachers.filter(t => t.departmentId === dept.id);
    return {
      name: dept.name,
      icon: <FaStethoscope />,
      students: deptStudents.length,
      Teachar: deptTeachers.length,
      color: dept.color
    };
  });

  // Recent Activities
  const recentActivities = [
    {
      id: 1,
      type: 'enrollment',
      message: 'New student batch enrolled in MBBS 2024',
      time: '2 hours ago',
      icon: <FaUsers className="text-blue-500" />
    },
    {
      id: 2,
      type: 'faculty',
      message: 'Dr. Sharma joined as HOD of Pathology',
      time: '1 day ago',
      icon: <FaUserTie className="text-green-500" />
    },
    {
      id: 3,
      type: 'report',
      message: 'Monthly attendance report generated',
      time: '2 days ago',
      icon: <FaChartLine className="text-orange-500" />
    },
    {
      id: 4,
      type: 'achievement',
      message: 'Department of Anatomy won research award',
      time: '3 days ago',
      icon: <FaTrophy className="text-yellow-500" />
    }
  ];

  return (
    <PrincipalLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUserTie className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Principal Dashboard</h2>
              <p className="text-gray-600 mt-1">Welcome back! Here's your institutional overview.</p>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className={`bg-gradient-to-br ${stat.bgColor.replace('bg-', 'from-').replace('-500', '-50')} ${stat.bgColor.replace('bg-', 'to-').replace('-500', '-100')} p-6 rounded-lg border ${stat.bgColor.replace('bg-', 'border-').replace('-500', '-200')} hover:shadow-xl transition-shadow`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-lg font-semibold ${stat.textColor.replace('-500', '-800')}`}>{stat.title}</h3>
                  <p className={`text-3xl font-bold ${stat.textColor.replace('-500', '-600')} mb-2`}>{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
                <div className={`${stat.textColor.replace('-500', '-500')} text-4xl`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Department Overview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaStethoscope className="text-green-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Medical Departments</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {departmentStats.map((dept, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`${dept.color} p-3 rounded-lg mr-4`}>
                  {dept.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{dept.name}</h4>
                  <p className="text-sm text-gray-600">{dept.students} students</p>
                  <p className="text-sm text-gray-500">{dept.Teachar} Teachar</p>
                </div>
              </div>
            ))}
          </div>
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
            <button
              onClick={() => navigate('/principal/manage-student')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaUsers className="text-3xl mb-2" />
              <span className="text-sm font-medium">Manage Students</span>
            </button>
            <button
              onClick={() => navigate('/principal/manage-hod')}
              className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaUserTie className="text-3xl mb-2" />
              <span className="text-sm font-medium">Manage HODs</span>
            </button>
            <button
              onClick={() => navigate('/principal/manage-teacher')}
              className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaChartLine className="text-3xl mb-2" />
              <span className="text-sm font-medium">Manage Teachers</span>
            </button>
            <button
              onClick={() => navigate('/principal/view-application')}
              className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaClipboardList className="text-3xl mb-2" />
              <span className="text-sm font-medium">View Applications</span>
            </button>
          </div>
        </div>

        {/* Institutional Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FaTrophy className="text-yellow-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Institutional Performance</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">4.7</div>
              <p className="text-sm text-gray-600 mt-1">Average Student Rating</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">96%</div>
              <p className="text-sm text-gray-600 mt-1">Placement Rate</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">15</div>
              <p className="text-sm text-gray-600 mt-1">Research Publications</p>
            </div>
          </div>
        </div>
      </div>
    </PrincipalLayout>
  );
};

export default PrincipalDashboard;
