import React, { useState } from 'react';
import TeacherLayout from '../../../components/teacherLayout/TeacherLayout';
import { FaCalendarCheck, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const StudentAttendanceHistory = () => {
  const [selectedMonth, setSelectedMonth] = useState('October 2023');

  // Sample attendance data for a student
  const attendanceData = [
    { date: '2023-10-01', status: 'Present', subject: 'Anatomy Lecture', time: '09:00 AM - 10:00 AM' },
    { date: '2023-10-02', status: 'Present', subject: 'Physiology Lecture', time: '10:00 AM - 11:00 AM' },
    { date: '2023-10-03', status: 'Present', subject: 'Biochemistry Lecture', time: '11:00 AM - 12:00 PM' },
    { date: '2023-10-04', status: 'Absent', subject: 'Anatomy Lecture', time: '09:00 AM - 10:00 AM' },
    { date: '2023-10-05', status: 'Present', subject: 'Physiology Lecture', time: '10:00 AM - 11:00 AM' },
    { date: '2023-10-06', status: 'Present', subject: 'Biochemistry Lecture', time: '11:00 AM - 12:00 PM' },
    { date: '2023-10-07', status: 'Present', subject: 'Anatomy Lecture', time: '09:00 AM - 10:00 AM' },
    { date: '2023-10-08', status: 'Present', subject: 'Physiology Lecture', time: '10:00 AM - 11:00 AM' },
    { date: '2023-10-09', status: 'Present', subject: 'Biochemistry Lecture', time: '11:00 AM - 12:00 PM' },
    { date: '2023-10-10', status: 'Present', subject: 'Anatomy Lecture', time: '09:00 AM - 10:00 AM' },
  ];

  const months = ['September 2023', 'October 2023', 'November 2023', 'December 2023'];

  const getStatusIcon = (status) => {
    return status === 'Present' ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />;
  };

  const getStatusColor = (status) => {
    return status === 'Present' ? 'text-green-600' : 'text-red-600';
  };

  const totalDays = attendanceData.length;
  const presentDays = attendanceData.filter(day => day.status === 'Present').length;
  const attendancePercentage = Math.round((presentDays / totalDays) * 100);

  return (
    <TeacherLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaCalendarCheck className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Student Attendance History</h2>
              <p className="text-gray-600 mt-1">View attendance records for the student</p>
            </div>
          </div>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>

        {/* Attendance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Days</p>
                <p className="text-3xl font-bold text-gray-800">{totalDays}</p>
              </div>
              <FaCalendarCheck className="text-indigo-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Present Days</p>
                <p className="text-3xl font-bold text-gray-800">{presentDays}</p>
              </div>
              <FaCheckCircle className="text-green-500 text-3xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Attendance %</p>
                <p className="text-3xl font-bold text-gray-800">{attendancePercentage}%</p>
              </div>
              <FaClock className="text-blue-500 text-3xl" />
            </div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Daily Attendance Records</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendanceData.map((record, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {new Date(record.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(record.status)}
                        <span className={`ml-2 text-sm font-medium ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default StudentAttendanceHistory;
