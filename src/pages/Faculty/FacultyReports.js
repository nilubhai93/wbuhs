import React from 'react';
import FacultyLayout from '../../components/FacultyLayout/FacultyLayout';
import { FaChartLine, FaDownload, FaFileAlt, FaUsers, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const FacultyReports = () => {
  const reports = [
    {
      id: 1,
      title: 'Student Performance Report',
      description: 'Comprehensive analysis of student academic performance across all departments.',
      icon: <FaGraduationCap className="text-2xl" />,
      bgColor: 'bg-blue-500',
      lastGenerated: '2024-01-15'
    },
    {
      id: 2,
      title: 'Faculty Attendance Report',
      description: 'Monthly attendance summary for all faculty members.',
      icon: <FaCalendarAlt className="text-2xl" />,
      bgColor: 'bg-green-500',
      lastGenerated: '2024-01-14'
    },
    {
      id: 3,
      title: 'Department Statistics',
      description: 'Statistical overview of each department including enrollment and performance metrics.',
      icon: <FaUsers className="text-2xl" />,
      bgColor: 'bg-purple-500',
      lastGenerated: '2024-01-13'
    },
    {
      id: 4,
      title: 'Annual Faculty Report',
      description: 'Year-end comprehensive report covering all faculty activities and achievements.',
      icon: <FaFileAlt className="text-2xl" />,
      bgColor: 'bg-orange-500',
      lastGenerated: '2023-12-31'
    }
  ];

  return (
    <FacultyLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaChartLine className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Faculty Reports</h2>
              <p className="text-gray-600 mt-1">Generate and view comprehensive faculty reports.</p>
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`${report.bgColor} p-3 rounded-lg mr-4 text-white`}>
                  {report.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{report.title}</h3>
                  <p className="text-sm text-gray-500">Last generated: {report.lastGenerated}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{report.description}</p>

              <div className="flex space-x-2">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-sm">
                  <FaChartLine className="mr-2" />
                  Generate
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-sm">
                  <FaDownload className="mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Report Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Generate Custom Report</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>Select type...</option>
                <option>Student Performance</option>
                <option>Faculty Attendance</option>
                <option>Department Statistics</option>
                <option>Custom Analysis</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>Custom range</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                <FaChartLine className="mr-2" />
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </FacultyLayout>
  );
};

export default FacultyReports;
