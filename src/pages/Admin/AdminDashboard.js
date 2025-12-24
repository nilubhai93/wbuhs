import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import {
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
  FaChartLine,
  FaClipboardList,
  FaTrophy,
  FaClock,
  FaStethoscope,
  FaArrowUp
} from 'react-icons/fa';
import { colleges, students, teachers, departments, hods, principals } from '../../data/data';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Calculate active counts
  const activeColleges = colleges.filter(c => c.status === 'Active').length;
  const activeStudents = students.filter(s => s.status === 'Active').length;
  const activeTeachers = teachers.filter(t => t.status === 'Active').length;
  const activeHods = hods.filter(h => h.status === 'Active').length;
  const activePrincipals = principals.filter(p => p.status === 'Active').length;
  const totalDepartments = departments.length;

  // Stats Data for Admin
  const stats = [
    {
      id: 1,
      title: 'Total Colleges',
      value: activeColleges.toString(),
      icon: <FaUsers className="text-4xl" />,
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      textColor: 'text-cyan-600',
      change: `${activeColleges} active colleges`,
      trend: '+0%'
    },
    {
      id: 2,
      title: 'Total Students',
      value: activeStudents.toString(),
      icon: <FaUserTie className="text-4xl" />,
      gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
      textColor: 'text-violet-600',
      change: 'Across all colleges',
      trend: '+12%'
    },
    {
      id: 3,
      title: 'Total Teachers',
      value: activeTeachers.toString(),
      icon: <FaClipboardList className="text-4xl" />,
      gradient: 'from-emerald-400 via-teal-500 to-green-600',
      textColor: 'text-emerald-600',
      change: 'All departments',
      trend: '+8%'
    },
    {
      id: 4,
      title: 'Current HODs',
      value: activeHods.toString(),
      icon: <FaChartLine className="text-4xl" />,
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      textColor: 'text-amber-600',
      change: 'Medical departments',
      trend: '+5%'
    },
    {
      id: 5,
      title: 'Total Principals',
      value: activePrincipals.toString(),
      icon: <FaUserTie className="text-4xl" />,
      gradient: 'from-pink-400 via-rose-500 to-red-600',
      textColor: 'text-rose-600',
      change: 'College leadership',
      trend: '+0%'
    },
    {
      id: 6,
      title: 'Departments',
      value: totalDepartments.toString(),
      icon: <FaStethoscope className="text-4xl" />,
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      textColor: 'text-blue-600',
      change: 'Medical specializations',
      trend: '+3%'
    }
  ];

  // Medical Departments with real data - showing all 12 departments
  const departmentStats = departments.map(dept => {
    const deptStudents = students.filter(s => s.departmentId === dept.id);
    const deptTeachers = teachers.filter(t => t.departmentId === dept.id);
    const deptColleges = new Set([...deptStudents.map(s => s.collegeId), ...deptTeachers.map(t => t.collegeId)]).size;
    return {
      name: dept.name,
      icon: <FaStethoscope />,
      students: deptStudents.length,
      Teachers: deptTeachers.length,
      colleges: deptColleges,
      color: dept.color
    };
  });

  // Recent Activities
  const recentActivities = [
    {
      id: 1,
      type: 'enrollment',
      message: 'New student batch enrolled across all colleges',
      time: '2 hours ago',
      icon: <FaUsers className="text-xl" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      type: 'Teachers',
      message: 'New HODs appointed in multiple departments',
      time: '1 day ago',
      icon: <FaUserTie className="text-xl" />,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 3,
      type: 'report',
      message: 'Annual performance report generated',
      time: '2 days ago',
      icon: <FaChartLine className="text-xl" />,
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 4,
      type: 'achievement',
      message: 'Multiple departments won research awards',
      time: '3 days ago',
      icon: <FaTrophy className="text-xl" />,
      gradient: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <AdminLayout>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
          
          .dashboard-container {
            font-family: 'Outfit', sans-serif;
          }
          
          .stat-card {
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              45deg,
              transparent 30%,
              rgba(255, 255, 255, 0.1) 50%,
              transparent 70%
            );
            transform: rotate(45deg);
            transition: all 0.6s ease;
          }
          
          .stat-card:hover::before {
            left: 100%;
          }
          
          .stat-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
            }
            50% {
              box-shadow: 0 0 40px rgba(99, 102, 241, 0.6);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .animate-fade-in-left {
            animation: fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .animate-fade-in-right {
            animation: fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .dept-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(0, 0, 0, 0.05);
          }
          
          .dept-card:hover {
            transform: translateX(8px);
            box-shadow: -4px 0 0 0 currentColor;
          }
          
          .activity-card {
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
          }
          
          .activity-card:hover {
            border-left-color: currentColor;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.02), transparent);
          }
          
          .action-button {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          
          .action-button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }
          
          .action-button:hover::before {
            width: 300px;
            height: 300px;
          }
          
          .action-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
          }
          
          .metric-card {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          
          .metric-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(to right, transparent, currentColor, transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .metric-card:hover::after {
            opacity: 1;
          }
          
          .metric-card:hover {
            transform: scale(1.05);
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          
          .trend-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-family: 'Space Mono', monospace;
            font-weight: 700;
            font-size: 0.75rem;
          }
        `}
      </style>

      <div className="dashboard-container p-8 space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 min-h-screen">
        {/* Page Header */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg animate-float">
                <FaUserTie className="text-white text-4xl" />
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  Admin Dashboard
                </h2>
                <p className="text-gray-600 text-lg font-medium">Welcome back! Here's your institutional overview.</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 rounded-xl border border-indigo-100">
                <FaClock className="text-indigo-600 text-xl" />
                <div className="text-left">
                  <div className="text-sm font-semibold text-indigo-900">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="text-xs text-indigo-600">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100 cursor-pointer"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className={`bg-gradient-to-br ${stat.gradient} p-3 rounded-xl w-fit mb-4 shadow-lg`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                  {stat.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className={`text-4xl font-bold ${stat.textColor}`}>
                    {stat.value}
                  </p>
                  <span className="trend-badge text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    <FaArrowUp className="text-xs" />
                    {stat.trend}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-auto">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Department Overview */}
        <div className="animate-fade-in-up opacity-0 bg-white rounded-2xl shadow-lg p-8 border border-gray-100" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl shadow-md">
              <FaStethoscope className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Medical Departments</h3>
              <p className="text-sm text-gray-500">Overview of all specializations</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {departmentStats.map((dept, index) => (
              <div
                key={index}
                className="dept-card flex items-center p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-md cursor-pointer group"
                style={{ animationDelay: `${0.9 + index * 0.05}s` }}
              >
                <div className={`${dept.color} p-4 rounded-xl mr-4 shadow-sm group-hover:shadow-md transition-shadow`}>
                  <div className="  text-xl">
                    {dept.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-base">{dept.name}</h4>
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold text-gray-600">
                      {dept.students} <span className="font-normal text-gray-400">students</span>
                    </p>
                    <p className="text-sm font-semibold text-gray-600">
                      {dept.Teachers} <span className="font-normal text-gray-400">teachers</span>
                    </p>
                    <p className="text-sm font-semibold text-gray-600">
                      {dept.colleges} <span className="font-normal text-gray-400">colleges</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="animate-fade-in-left opacity-0 bg-white rounded-2xl shadow-lg p-8 border border-gray-100" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl shadow-md">
              <FaClipboardList className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Recent Activities</h3>
              <p className="text-sm text-gray-500">Latest updates and events</p>
            </div>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={activity.id}
                className="activity-card flex items-center p-5 bg-gradient-to-r from-gray-50 to-transparent rounded-xl hover:shadow-sm cursor-pointer group transition-all"
                style={{
                  animationDelay: `${1.1 + index * 0.1}s`,
                  color: activity.gradient.includes('blue') ? '#3b82f6' :
                    activity.gradient.includes('emerald') ? '#10b981' :
                      activity.gradient.includes('amber') ? '#f59e0b' : '#eab308'
                }}
              >
                <div className={`bg-gradient-to-br ${activity.gradient} p-4 rounded-xl mr-5 shadow-sm group-hover:shadow-md transition-shadow`}>
                  <div className="text-white">
                    {activity.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold mb-1 text-base">{activity.message}</p>
                  <p className="text-sm text-gray-500 font-medium">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Institutional Performance */}
        <div className="animate-fade-in-right opacity-0 bg-white rounded-2xl shadow-lg p-8 border border-gray-100" style={{ animationDelay: '1.4s' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-3 rounded-xl shadow-md">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Institutional Performance</h3>
              <p className="text-sm text-gray-500">Key performance indicators</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="metric-card text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 cursor-pointer" style={{ color: '#10b981' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">4.8</div>
              <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Average Student Rating</p>
            </div>
            <div className="metric-card text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 cursor-pointer" style={{ color: '#3b82f6' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="text-5xl font-bold text-blue-600 mb-2">97%</div>
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Placement Rate</p>
            </div>
            <div className="metric-card text-center p-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100 cursor-pointer" style={{ color: '#8b5cf6' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <div className="text-5xl font-bold text-violet-600 mb-2">150</div>
              <p className="text-sm font-semibold text-violet-700 uppercase tracking-wide">Research Publications</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;