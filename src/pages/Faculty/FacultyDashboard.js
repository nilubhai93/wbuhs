import React from 'react';
import FacultyLayout from '../../components/FacultyLayout/FacultyLayout';
import { FaTachometerAlt, FaUsers, FaStethoscope, FaUniversity, FaCalendarAlt } from 'react-icons/fa';

const FacultyDashboard = () => {
  return (
    <FacultyLayout>
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

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
`}
      </style>

      <div className="dashboard-container p-8 space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 min-h-screen">
        {/* Header */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-xl bg-indigo-500`}>
                <FaTachometerAlt className="text-white text-3xl" />
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  Faculty Dashboard
                </h2>
                <p className="text-gray-600 text-lg font-medium">Welcome to the Faculty Management System</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 rounded-xl border border-indigo-100">
                <FaCalendarAlt className="text-indigo-600 text-xl" />
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

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                <FaUniversity className="text-white text-2xl" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Total Colleges
              </h3>
              <p className="text-3xl font-bold text-cyan-600">
                5
              </p>
              <p className="text-xs text-gray-500 mt-auto">Under Management</p>
            </div>
          </div>
          <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Total Students
              </h3>
              <p className="text-3xl font-bold text-emerald-600">
                40
              </p>
              <p className="text-xs text-gray-500 mt-auto">Across all colleges</p>
            </div>
          </div>
          <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                <FaStethoscope className="text-white text-2xl" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Total Teachers
              </h3>
              <p className="text-3xl font-bold text-amber-600">
                34
              </p>
              <p className="text-xs text-gray-500 mt-auto">All departments</p>
            </div>
          </div>
          <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                <FaTachometerAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Departments
              </h3>
              <p className="text-3xl font-bold text-purple-600">
                12
              </p>
              <p className="text-xs text-gray-500 mt-auto">Active departments</p>
            </div>
          </div>
        </div>

        {/* Overview Content */}
        <div className="animate-fade-in-up opacity-0 bg-white rounded-2xl shadow-lg border border-gray-100 p-8" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Faculty Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Recent Activities</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">New college added to the system</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Department approval pending</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Teacher registration completed</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                  <FaUniversity className="text-indigo-600 text-xl mb-2" />
                  <span className="text-sm font-medium text-gray-700">View Colleges</span>
                </button>
                <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <FaUsers className="text-green-600 text-xl mb-2" />
                  <span className="text-sm font-medium text-gray-700">Manage Students</span>
                </button>
                <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                  <FaStethoscope className="text-orange-600 text-xl mb-2" />
                  <span className="text-sm font-medium text-gray-700">View Departments</span>
                </button>
                <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <FaTachometerAlt className="text-purple-600 text-xl mb-2" />
                  <span className="text-sm font-medium text-gray-700">Reports</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FacultyLayout>
  );
};

export default FacultyDashboard;
