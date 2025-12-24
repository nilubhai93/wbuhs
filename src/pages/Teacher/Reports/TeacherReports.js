import React, { useState } from 'react';
import TeacherLayout from '../../../components/teacherLayout/TeacherLayout';
import { FaFileAlt, FaDownload, FaFilter, FaChartBar, FaUsers, FaCalendarCheck } from 'react-icons/fa';

const TeacherReports = () => {
  const [selectedReport, setSelectedReport] = useState('attendance');
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  // Sample report data
  const reports = [
    {
      id: 1,
      title: 'Student Attendance Report',
      type: 'attendance',
      description: 'Monthly attendance summary for all students',
      lastGenerated: '2023-10-15',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Academic Performance Report',
      type: 'performance',
      description: 'CGPA and exam results analysis',
      lastGenerated: '2023-10-10',
      status: 'Available'
    },
    {
      id: 3,
      title: 'Class Participation Report',
      type: 'participation',
      description: 'Student engagement and participation metrics',
      lastGenerated: '2023-10-12',
      status: 'Available'
    },
    {
      id: 4,
      title: 'Assignment Submission Report',
      type: 'assignments',
      description: 'Assignment completion and grading summary',
      lastGenerated: '2023-10-08',
      status: 'Available'
    }
  ];

  const periods = ['weekly', 'monthly', 'quarterly', 'yearly'];

  const handleGenerateReport = (reportType) => {
    // Handle report generation
    alert(`Generating ${reportType} report...`);
  };

  const handleDownloadReport = (reportId) => {
    // Handle report download
    alert(`Downloading report ${reportId}...`);
  };

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaFileAlt className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Reports</h2>
              <p className="text-gray-600 mt-1">Generate and download various reports</p>
            </div>
          </div>
        </div>

        {/* Report Filters */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-400" />
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="attendance">Attendance Reports</option>
                <option value="performance">Performance Reports</option>
                <option value="participation">Participation Reports</option>
                <option value="assignments">Assignment Reports</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {periods.map(period => (
                  <option key={period} value={period}>{period.charAt(0).toUpperCase() + period.slice(1)}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => handleGenerateReport(selectedReport)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <FaChartBar className="mr-2" />
              Generate Report
            </button>
          </div>
        </div>

        {/* Report Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Reports</p>
                <p className="text-3xl font-bold text-gray-800">{reports.length}</p>
              </div>
              <FaFileAlt className="text-indigo-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Available Reports</p>
                <p className="text-3xl font-bold text-gray-800">
                  {reports.filter(r => r.status === 'Available').length}
                </p>
              </div>
              <FaDownload className="text-green-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Students Covered</p>
                <p className="text-3xl font-bold text-gray-800">150</p>
              </div>
              <FaUsers className="text-blue-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg Attendance</p>
                <p className="text-3xl font-bold text-gray-800">87%</p>
              </div>
              <FaCalendarCheck className="text-yellow-500 text-3xl" />
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Available Reports</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {reports.map((report) => (
              <div key={report.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-900">{report.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Last generated: {report.lastGenerated}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      report.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {report.status}
                    </span>
                    <button
                      onClick={() => handleDownloadReport(report.id)}
                      className="text-indigo-600 hover:text-indigo-900 p-2"
                      disabled={report.status !== 'Available'}
                    >
                      <FaDownload />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default TeacherReports;
