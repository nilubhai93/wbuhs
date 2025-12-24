import React, { useState } from 'react';
import PrincipalLayout from '../../../components/PrincipalLayout/PrincipalLayout';
import { FaChartBar, FaDownload, FaCalendarAlt, FaUsers, FaBook, FaMoneyBillWave } from 'react-icons/fa';

const PrincipalReports = () => {
  const [selectedReport, setSelectedReport] = useState('academic');
  const [dateRange, setDateRange] = useState('monthly');

  const reportTypes = [
    { id: 'academic', label: 'Academic Performance', icon: <FaBook />, color: 'bg-blue-500' },
    { id: 'attendance', label: 'Attendance Reports', icon: <FaUsers />, color: 'bg-green-500' },
    { id: 'financial', label: 'Financial Reports', icon: <FaMoneyBillWave />, color: 'bg-yellow-500' },
    { id: 'department', label: 'Department Reports', icon: <FaChartBar />, color: 'bg-purple-500' }
  ];

  const academicReports = [
    { name: 'Student Performance Summary', description: 'Overall academic performance across all departments', lastGenerated: '2024-01-15' },
    { name: 'Department-wise Results', description: 'Detailed results breakdown by department', lastGenerated: '2024-01-10' },
    { name: 'Semester-wise Analysis', description: 'Performance trends across semesters', lastGenerated: '2024-01-05' },
    { name: 'Top Performers List', description: 'Students with highest academic achievements', lastGenerated: '2024-01-01' }
  ];

  const attendanceReports = [
    { name: 'Monthly Attendance Summary', description: 'Overall attendance statistics for the month', lastGenerated: '2024-01-31' },
    { name: 'Department Attendance', description: 'Attendance breakdown by department', lastGenerated: '2024-01-30' },
    { name: 'Student Attendance Details', description: 'Individual student attendance records', lastGenerated: '2024-01-25' },
    { name: 'Low Attendance Alerts', description: 'Students with attendance below threshold', lastGenerated: '2024-01-20' }
  ];

  const financialReports = [
    { name: 'Fee Collection Summary', description: 'Monthly fee collection and outstanding amounts', lastGenerated: '2024-01-31' },
    { name: 'Department Budget Utilization', description: 'Budget allocation and spending by department', lastGenerated: '2024-01-28' },
    { name: 'Scholarship Distribution', description: 'Scholarship awards and disbursements', lastGenerated: '2024-01-15' },
    { name: 'Financial Year Summary', description: 'Complete financial year overview', lastGenerated: '2024-01-01' }
  ];

  const departmentReports = [
    { name: 'Faculty Performance', description: 'Teaching quality and student feedback', lastGenerated: '2024-01-20' },
    { name: 'Research Output', description: 'Publications and research activities', lastGenerated: '2024-01-15' },
    { name: 'Infrastructure Utilization', description: 'Lab and facility usage statistics', lastGenerated: '2024-01-10' },
    { name: 'Student Satisfaction', description: 'Survey results and feedback analysis', lastGenerated: '2024-01-05' }
  ];

  const getCurrentReports = () => {
    switch (selectedReport) {
      case 'academic': return academicReports;
      case 'attendance': return attendanceReports;
      case 'financial': return financialReports;
      case 'department': return departmentReports;
      default: return academicReports;
    }
  };

  const handleGenerateReport = (reportName) => {
    // Handle report generation
    console.log(`Generating report: ${reportName}`);
  };

  const handleDownloadReport = (reportName) => {
    // Handle report download
    console.log(`Downloading report: ${reportName}`);
  };

  return (
    <PrincipalLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaChartBar className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Reports</h2>
              <p className="text-gray-600 mt-1">Generate and download institutional reports.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>

        {/* Report Type Selection */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Select Report Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reportTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedReport(type.id)}
                className={`p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center ${
                  selectedReport === type.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className={`text-3xl mb-2 ${selectedReport === type.id ? 'text-white' : 'text-gray-600'}`}>
                  {type.icon}
                </div>
                <span className="text-sm font-medium text-center">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            {reportTypes.find(type => type.id === selectedReport)?.label}
          </h3>
          <div className="space-y-4">
            {getCurrentReports().map((report, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{report.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <FaCalendarAlt className="mr-1" />
                      Last generated: {report.lastGenerated}
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleGenerateReport(report.name)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center text-sm"
                    >
                      <FaChartBar className="mr-2" />
                      Generate
                    </button>
                    <button
                      onClick={() => handleDownloadReport(report.name)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center text-sm"
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Report Generation Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <p className="text-sm text-gray-600 mt-1">Reports Generated This Month</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">156</div>
              <p className="text-sm text-gray-600 mt-1">Total Downloads</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">89%</div>
              <p className="text-sm text-gray-600 mt-1">Report Accuracy Rate</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">5min</div>
              <p className="text-sm text-gray-600 mt-1">Average Generation Time</p>
            </div>
          </div>
        </div>
      </div>
    </PrincipalLayout>
  );
};

export default PrincipalReports;
