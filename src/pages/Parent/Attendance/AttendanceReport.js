import React from 'react';
import { FaChartBar, FaDownload, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaClock, FaPercentage } from 'react-icons/fa';

const AttendanceReport = () => {
  const reportSummary = {
    period: 'January 2024 - December 2024',
    totalWorkingDays: 240,
    totalPresent: 216,
    totalAbsent: 16,
    totalLate: 8,
    overallPercentage: 90,
    grade: 'A'
  };

  const monthlyBreakdown = [
    { month: 'January', workingDays: 25, present: 23, absent: 1, late: 1, percentage: 92 },
    { month: 'February', workingDays: 20, present: 18, absent: 1, late: 1, percentage: 90 },
    { month: 'March', workingDays: 22, present: 20, absent: 1, late: 1, percentage: 90.9 },
    { month: 'April', workingDays: 21, present: 19, absent: 1, late: 1, percentage: 90.5 },
    { month: 'May', workingDays: 23, present: 21, absent: 1, late: 1, percentage: 91.3 },
    { month: 'June', workingDays: 20, present: 18, absent: 1, late: 1, percentage: 90 },
    { month: 'July', workingDays: 22, present: 20, absent: 1, late: 1, percentage: 90.9 },
    { month: 'August', workingDays: 21, present: 19, absent: 1, late: 1, percentage: 90.5 },
    { month: 'September', workingDays: 22, present: 20, absent: 1, late: 1, percentage: 90.9 },
    { month: 'October', workingDays: 23, present: 21, absent: 1, late: 1, percentage: 91.3 },
    { month: 'November', workingDays: 21, present: 19, absent: 1, late: 1, percentage: 90.5 },
    { month: 'December', workingDays: 20, present: 18, absent: 1, late: 1, percentage: 90 }
  ];

  const subjectAnalysis = [
    { subject: 'Anatomy', classes: 85, present: 80, absent: 3, late: 2, percentage: 94.1 },
    { subject: 'Physiology', classes: 78, present: 74, absent: 2, late: 2, percentage: 94.9 },
    { subject: 'Biochemistry', classes: 72, present: 68, absent: 2, late: 2, percentage: 94.4 },
    { subject: 'Pathology', classes: 65, present: 61, absent: 2, late: 2, percentage: 93.8 },
    { subject: 'Pharmacology', classes: 58, present: 54, absent: 2, late: 2, percentage: 93.1 },
    { subject: 'Microbiology', classes: 52, present: 49, absent: 2, late: 1, percentage: 94.2 }
  ];

  const getGradeColor = (percentage) => {
    if (percentage >= 95) return 'text-green-600 bg-green-100';
    if (percentage >= 90) return 'text-blue-600 bg-blue-100';
    if (percentage >= 80) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getGrade = (percentage) => {
    if (percentage >= 95) return 'A+';
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    return 'D';
  };

  return (
   <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaChartBar className="mr-3 text-indigo-600 text-3xl" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Attendance Report</h2>
            <p className="text-gray-600 mt-1">Comprehensive attendance analysis for the academic year.</p>
          </div>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition flex items-center">
          <FaDownload className="mr-2" />
          Download Report
        </button>
      </div>

      {/* Report Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <FaCalendarAlt className="text-blue-500 mr-2 text-xl" />
          <h3 className="text-xl font-bold text-gray-800">Report Summary - {reportSummary.period}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{reportSummary.totalWorkingDays}</div>
            <p className="text-sm text-gray-600 mt-1">Working Days</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{reportSummary.totalPresent}</div>
            <p className="text-sm text-gray-600 mt-1">Days Present</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{reportSummary.totalAbsent}</div>
            <p className="text-sm text-gray-600 mt-1">Days Absent</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">{reportSummary.totalLate}</div>
            <p className="text-sm text-gray-600 mt-1">Days Late</p>
          </div>
        </div>

        <div className="text-center p-6 bg-indigo-50 rounded-lg">
          <div className="text-4xl font-bold text-indigo-600 mb-2">{reportSummary.overallPercentage}%</div>
          <p className="text-gray-600">Overall Attendance Percentage</p>
          <div className="mt-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(reportSummary.overallPercentage)}`}>
              Grade: {getGrade(reportSummary.overallPercentage)}
            </span>
          </div>
        </div>
      </div>

      {/* Monthly Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Monthly Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4">Month</th>
                <th className="text-center py-3 px-4">Working Days</th>
                <th className="text-center py-3 px-4">Present</th>
                <th className="text-center py-3 px-4">Absent</th>
                <th className="text-center py-3 px-4">Late</th>
                <th className="text-center py-3 px-4">Percentage</th>
                <th className="text-center py-3 px-4">Grade</th>
              </tr>
            </thead>
            <tbody>
              {monthlyBreakdown.map((month, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{month.month}</td>
                  <td className="py-3 px-4 text-center">{month.workingDays}</td>
                  <td className="py-3 px-4 text-center text-green-600 font-semibold">{month.present}</td>
                  <td className="py-3 px-4 text-center text-red-600 font-semibold">{month.absent}</td>
                  <td className="py-3 px-4 text-center text-yellow-600 font-semibold">{month.late}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(month.percentage)}`}>
                      {month.percentage}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(month.percentage)}`}>
                      {getGrade(month.percentage)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Subject-wise Analysis */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Subject-wise Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4">Subject</th>
                <th className="text-center py-3 px-4">Total Classes</th>
                <th className="text-center py-3 px-4">Present</th>
                <th className="text-center py-3 px-4">Absent</th>
                <th className="text-center py-3 px-4">Late</th>
                <th className="text-center py-3 px-4">Attendance %</th>
                <th className="text-center py-3 px-4">Grade</th>
              </tr>
            </thead>
            <tbody>
              {subjectAnalysis.map((subject, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{subject.subject}</td>
                  <td className="py-3 px-4 text-center">{subject.classes}</td>
                  <td className="py-3 px-4 text-center text-green-600 font-semibold">{subject.present}</td>
                  <td className="py-3 px-4 text-center text-red-600 font-semibold">{subject.absent}</td>
                  <td className="py-3 px-4 text-center text-yellow-600 font-semibold">{subject.late}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(subject.percentage)}`}>
                      {subject.percentage}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(subject.percentage)}`}>
                      {getGrade(subject.percentage)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h4 className="font-semibold text-green-800">Strengths</h4>
            </div>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Consistent attendance throughout the year</li>
              <li>• Excellent performance in Physiology and Biochemistry</li>
              <li>• Minimal late arrivals</li>
            </ul>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center mb-2">
              <FaClock className="text-yellow-500 mr-2" />
              <h4 className="font-semibold text-yellow-800">Areas for Improvement</h4>
            </div>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Occasional absences in Pharmacology</li>
              <li>• Need to maintain punctuality</li>
              <li>• Focus on attendance during exam periods</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;
