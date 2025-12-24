import React from 'react';
import ParentLayout from '../../../components/ParentLayout/ParentLayout';
import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaClock, FaCalendarAlt, FaPercentage } from 'react-icons/fa';

const ViewChildAttendance = () => {
  const attendanceOverview = {
    totalDays: 120,
    presentDays: 108,
    absentDays: 8,
    lateDays: 4,
    attendancePercentage: 90
  };

  const monthlyAttendance = [
    { month: 'January', total: 25, present: 23, absent: 1, late: 1, percentage: 92 },
    { month: 'February', total: 20, present: 18, absent: 1, late: 1, percentage: 90 },
    { month: 'March', total: 22, present: 20, absent: 1, late: 1, percentage: 90.9 },
    { month: 'April', total: 21, present: 19, absent: 1, late: 1, percentage: 90.5 },
    { month: 'May', total: 23, present: 21, absent: 1, late: 1, percentage: 91.3 },
    { month: 'June', total: 9, present: 7, absent: 1, late: 1, percentage: 77.8 }
  ];

  const subjectWiseAttendance = [
    { subject: 'Anatomy', classes: 45, present: 42, absent: 2, late: 1, percentage: 93.3 },
    { subject: 'Physiology', classes: 40, present: 38, absent: 1, late: 1, percentage: 95 },
    { subject: 'Biochemistry', classes: 35, present: 33, absent: 1, late: 1, percentage: 94.3 }
  ];

  const recentAttendance = [
    { date: '2024-01-20', subject: 'Anatomy', status: 'present', time: '09:00 AM' },
    { date: '2024-01-19', subject: 'Physiology', status: 'present', time: '10:30 AM' },
    { date: '2024-01-18', subject: 'Biochemistry', status: 'late', time: '09:15 AM' },
    { date: '2024-01-17', subject: 'Anatomy', status: 'present', time: '09:00 AM' },
    { date: '2024-01-16', subject: 'Physiology', status: 'absent', time: '-', remark: 'Medical Leave' },
    { date: '2024-01-15', subject: 'Biochemistry', status: 'present', time: '09:00 AM' },
    { date: '2024-01-14', subject: 'Anatomy', status: 'present', time: '09:00 AM' },
    { date: '2024-01-13', subject: 'Physiology', status: 'late', time: '09:10 AM' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <FaCheckCircle className="text-green-500" />;
      case 'absent':
        return <FaTimesCircle className="text-red-500" />;
      case 'late':
        return <FaClock className="text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'late':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <ParentLayout>
     <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center">
        <FaClipboardList className="mr-3 text-indigo-600 text-3xl" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Child Attendance</h2>
          <p className="text-gray-600 mt-1">Monitor your child's attendance record and patterns.</p>
        </div>
      </div>

      {/* Attendance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaCalendarAlt className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">{attendanceOverview.totalDays}</h3>
          <p className="text-gray-600">Total Days</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600">{attendanceOverview.presentDays}</h3>
          <p className="text-gray-600">Present</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaTimesCircle className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-red-600">{attendanceOverview.absentDays}</h3>
          <p className="text-gray-600">Absent</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaClock className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-yellow-600">{attendanceOverview.lateDays}</h3>
          <p className="text-gray-600">Late</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaPercentage className="text-4xl text-indigo-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-indigo-600">{attendanceOverview.attendancePercentage}%</h3>
          <p className="text-gray-600">Overall</p>
        </div>
      </div>

      {/* Monthly Attendance */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Monthly Attendance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4">Month</th>
                <th className="text-center py-3 px-4">Total Days</th>
                <th className="text-center py-3 px-4">Present</th>
                <th className="text-center py-3 px-4">Absent</th>
                <th className="text-center py-3 px-4">Late</th>
                <th className="text-center py-3 px-4">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {monthlyAttendance.map((month, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{month.month}</td>
                  <td className="py-3 px-4 text-center">{month.total}</td>
                  <td className="py-3 px-4 text-center text-green-600 font-semibold">{month.present}</td>
                  <td className="py-3 px-4 text-center text-red-600 font-semibold">{month.absent}</td>
                  <td className="py-3 px-4 text-center text-yellow-600 font-semibold">{month.late}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${month.percentage >= 90 ? 'bg-green-100 text-green-800' : month.percentage >= 80 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {month.percentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Subject-wise Attendance */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Subject-wise Attendance</h3>
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
              </tr>
            </thead>
            <tbody>
              {subjectWiseAttendance.map((subject, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{subject.subject}</td>
                  <td className="py-3 px-4 text-center">{subject.classes}</td>
                  <td className="py-3 px-4 text-center text-green-600 font-semibold">{subject.present}</td>
                  <td className="py-3 px-4 text-center text-red-600 font-semibold">{subject.absent}</td>
                  <td className="py-3 px-4 text-center text-yellow-600 font-semibold">{subject.late}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${subject.percentage >= 90 ? 'bg-green-100 text-green-800' : subject.percentage >= 80 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {subject.percentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Attendance Records */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Attendance Records</h3>
        <div className="space-y-4">
          {recentAttendance.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                {getStatusIcon(record.status)}
                <div className="ml-4">
                  <p className="font-medium text-gray-800">{record.subject}</p>
                  <p className="text-sm text-gray-600">{formatDate(record.date)}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  <span className={`px-2 py-1 rounded text-xs font-medium mr-3 ${getStatusColor(record.status)}`}>
                    {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                  </span>
                  <span className="text-sm text-gray-600">{record.time}</span>
                </div>
                {record.remark && (
                  <p className="text-xs text-gray-500 mt-1">{record.remark}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </ParentLayout>
  );
};

export default ViewChildAttendance;
