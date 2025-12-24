import React, { useState } from 'react';
import HODLayout from '../../../components/HodLayout/HODLayout';
import {
  FaChartLine,
  FaFileAlt,
  FaDownload,
  FaCalendarAlt,
  FaUsers,
  FaGraduationCap,
  FaUserMd,
  FaClipboardList,
  FaTrophy,
  FaClock,
  FaFilter,
  FaSearch,
  FaEye,
  FaPlus
} from 'react-icons/fa';

const HODReports = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Report categories
  const reportCategories = [
    {
      id: 'academic',
      title: 'Academic Reports',
      description: 'Student performance, grades, and academic analytics',
      icon: <FaGraduationCap className="text-3xl" />,
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      count: 12
    },
    {
      id: 'faculty',
      title: 'Faculty Reports',
      description: 'Teacher performance, attendance, and workload analysis',
      icon: <FaUserMd className="text-3xl" />,
      bgColor: 'bg-green-500',
      textColor: 'text-green-600',
      count: 8
    },
    {
      id: 'attendance',
      title: 'Attendance Reports',
      description: 'Student and faculty attendance tracking and analytics',
      icon: <FaCalendarAlt className="text-3xl" />,
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-600',
      count: 15
    },
    {
      id: 'department',
      title: 'Department Reports',
      description: 'Department overview, budget, and resource utilization',
      icon: <FaClipboardList className="text-3xl" />,
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-600',
      count: 6
    }
  ];

  // Recent reports
  const recentReports = [
    {
      id: 1,
      title: 'Monthly Academic Performance Report',
      category: 'Academic',
      generatedDate: '2024-01-15',
      generatedBy: 'Dr. Rajesh Kumar',
      status: 'Completed',
      size: '2.4 MB',
      downloads: 45
    },
    {
      id: 2,
      title: 'Faculty Attendance Summary - December 2023',
      category: 'Faculty',
      generatedDate: '2024-01-10',
      generatedBy: 'System Auto-Generated',
      status: 'Completed',
      size: '1.8 MB',
      downloads: 32
    },
    {
      id: 3,
      title: 'Student Enrollment Statistics Q4 2023',
      category: 'Academic',
      generatedDate: '2024-01-08',
      generatedBy: 'Dr. Priya Sharma',
      status: 'Completed',
      size: '3.1 MB',
      downloads: 28
    },
    {
      id: 4,
      title: 'Department Budget Utilization Report',
      category: 'Department',
      generatedDate: '2024-01-05',
      generatedBy: 'Dr. Amit Singh',
      status: 'Completed',
      size: '1.2 MB',
      downloads: 15
    },
    {
      id: 5,
      title: 'Weekly Attendance Report - Week 2',
      category: 'Attendance',
      generatedDate: '2024-01-12',
      generatedBy: 'System Auto-Generated',
      status: 'Processing',
      size: '-',
      downloads: 0
    }
  ];

  // Report templates
  const reportTemplates = [
    {
      id: 1,
      name: 'Student Performance Analysis',
      description: 'Comprehensive analysis of student grades and performance metrics',
      frequency: 'Monthly',
      lastGenerated: '2024-01-15',
      icon: <FaTrophy className="text-yellow-500" />
    },
    {
      id: 2,
      name: 'Faculty Workload Report',
      description: 'Analysis of faculty teaching hours and research activities',
      frequency: 'Quarterly',
      lastGenerated: '2023-12-30',
      icon: <FaUserMd className="text-blue-500" />
    },
    {
      id: 3,
      name: 'Attendance Summary',
      description: 'Monthly attendance statistics for students and faculty',
      frequency: 'Monthly',
      lastGenerated: '2024-01-10',
      icon: <FaCalendarAlt className="text-green-500" />
    },
    {
      id: 4,
      name: 'Department Analytics',
      description: 'Overall department performance and resource utilization',
      frequency: 'Quarterly',
      lastGenerated: '2023-12-15',
      icon: <FaChartLine className="text-purple-500" />
    }
  ];

  const filteredReports = recentReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || report.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'bg-green-100 text-green-600' :
           status === 'Processing' ? 'bg-yellow-100 text-yellow-600' :
           'bg-red-100 text-red-600';
  };

  return (
    <HODLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaChartLine className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Department Reports</h2>
              <p className="text-gray-600 mt-1">Generate, view, and manage department reports and analytics</p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <FaPlus className="mr-2" />
            Generate Report
          </button>
        </div>

        {/* Report Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium mb-1">{category.title}</p>
                  <p className="text-2xl font-bold text-gray-800 mb-2">{category.count}</p>
                  <p className="text-xs text-gray-500">{category.description}</p>
                </div>
                <div className={`${category.bgColor} bg-opacity-10 p-4 rounded-lg`}>
                  <div className={category.textColor}>
                    {category.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Report Templates */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaFileAlt className="text-green-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Report Templates</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportTemplates.map((template) => (
              <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="mr-3">
                      {template.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{template.name}</h4>
                      <p className="text-sm text-gray-500">{template.description}</p>
                    </div>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm transition-colors">
                    Generate
                  </button>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Frequency: {template.frequency}</span>
                  <span>Last: {template.lastGenerated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Recent Reports</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  <option value="Academic">Academic</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Attendance">Attendance</option>
                  <option value="Department">Department</option>
                </select>
              </div>
              <div className="relative">
                <FaSearch className="absolute left-2 top-2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-4 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{report.title}</div>
                        <div className="text-sm text-gray-500">by {report.generatedBy}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-600">
                        {report.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(report.generatedDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900 p-1" title="View">
                          <FaEye />
                        </button>
                        <button
                          className="text-green-600 hover:text-green-900 p-1"
                          title="Download"
                          disabled={report.status !== 'Completed'}
                        >
                          <FaDownload />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredReports.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No reports found matching your criteria.
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaFileAlt className="text-3xl mb-2" />
              <span className="text-sm font-medium">Custom Report</span>
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaDownload className="text-3xl mb-2" />
              <span className="text-sm font-medium">Bulk Export</span>
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaCalendarAlt className="text-3xl mb-2" />
              <span className="text-sm font-medium">Schedule Reports</span>
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
              <FaChartLine className="text-3xl mb-2" />
              <span className="text-sm font-medium">Analytics Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </HODLayout>
  );
};

export default HODReports;
