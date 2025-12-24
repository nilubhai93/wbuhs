import React, { useState, useEffect } from 'react';
import StudentLayout from '../../components/studentLayout/StudentLayout';
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaTrophy,
  FaHospitalAlt,
  FaStethoscope,
  FaChartBar,
  FaClipboardList,
  FaCalendarAlt,
  FaExclamationCircle
} from 'react-icons/fa';

const StudentDashboard = ({ onNavigate, userInfo = {} }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Sample Data
  const [studentData] = useState({
    name: userInfo?.name || "Dr. Sarah Johnson",
    studentId: userInfo?.studentId || "MED2024001",
    cgpa: "8.5",
    attendancePercentage: 88,
    hasPendingFees: true,
    feeAmount: "25000",
    semesterName: "6th Semester",
    dueDate: "December 15, 2024",
    year: "3RD YEAR MBBS"
  });

  const [marksData] = useState([
    { subject: 'Pathology', grade: 'A+', total: '85', semester: 'VI', internal1: '28', internal2: '26', end: '78' },
    { subject: 'Pharmacology', grade: 'A', total: '82', semester: 'VI', internal1: '25', internal2: '27', end: '75' },
    { subject: 'Medicine', grade: 'B+', total: '78', semester: 'VI', internal1: '24', internal2: '23', end: '72' },
    { subject: 'Surgery', grade: 'A', total: '80', semester: 'VI', internal1: '26', internal2: '25', end: '74' }
  ]);

  const [subjectWiseMarks] = useState([
    { subjectName: 'Pathology', subjectCode: 'PATH601', semester: 'VI', internal1: 28, internal2: 26, end: 78, totalMarks: 85, grade: 'A+', credits: 4 },
    { subjectName: 'Pharmacology', subjectCode: 'PHAR601', semester: 'VI', internal1: 25, internal2: 27, end: 75, totalMarks: 82, grade: 'A', credits: 4 },
    { subjectName: 'Medicine', subjectCode: 'MED601', semester: 'VI', internal1: 24, internal2: 23, end: 72, totalMarks: 78, grade: 'B+', credits: 5 },
    { subjectName: 'Surgery', subjectCode: 'SURG601', semester: 'VI', internal1: 26, internal2: 25, end: 74, totalMarks: 80, grade: 'A', credits: 5 }
  ]);

  const [attendanceData] = useState([
    { date: '10 Sept 2024', subject: 'Pathology', status: 'present' },
    { date: '09 Sept 2024', subject: 'Pharmacology', status: 'present' },
    { date: '08 Sept 2024', subject: 'Medicine', status: 'absent' },
    { date: '07 Sept 2024', subject: 'Surgery', status: 'present' },
    { date: '06 Sept 2024', subject: 'Pediatrics', status: 'present' }
  ]);

  const [notices] = useState([
    { title: 'Clinical Rotation Schedule', content: 'New clinical rotation schedule for Surgery department released.', date: '12 Sept 2024' },
    { title: 'OSCE Examination', content: 'Objective Structured Clinical Examination scheduled for next month.', date: '10 Sept 2024' },
    { title: 'Medical Conference', content: 'Annual Medical Student Conference registration now open.', date: '08 Sept 2024' }
  ]);

  const [events] = useState([
    { day: '15', month: 'Sep', title: 'Grand Rounds', time: '8:00 AM', location: 'Main Auditorium', type: 'Academic' },
    { day: '18', month: 'Sep', title: 'Clinical Skills Workshop', time: '2:00 PM', location: 'Skills Lab', type: 'Practical' },
    { day: '20', month: 'Sep', title: 'Medical Ethics Seminar', time: '10:00 AM', location: 'Conference Hall', type: 'Seminar' }
  ]);

  const [collegeStats] = useState({
    departments: 12,
    placementRate: 98,
    presentCount: 4,
    absentCount: 1
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const getGradeColor = (grade) => {
    const colors = {
      'A+': 'bg-blue-900',
      'A': 'bg-blue-700',
      'B+': 'bg-gradient-to-br from-[#1565c0] to-[#42a5f5] ',
      'B': 'bg-blue-500'
    };
    return colors[grade] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <StudentLayout onNavigate={onNavigate} currentPage="dashboard" userInfo={userInfo}>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading Medical Dashboard...</p>
          </div>
        </div>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout onNavigate={onNavigate} currentPage="dashboard" userInfo={userInfo}>
      <div className="p-6 space-y-6">
        {/* Fee Alert Banner with Marquee */}
        {studentData.hasPendingFees && (
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm overflow-hidden">
            <div className="flex items-center p-4">
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <FaExclamationCircle className="text-white text-lg" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-red-800 font-semibold mb-1">Pending Fees Alert</h3>
                <marquee className="text-red-700 text-sm">
                  You have pending fees of ₹{studentData.feeAmount} for {studentData.semesterName}. Due date: {studentData.dueDate}. Please clear your dues for continued access to clinical facilities.
                </marquee>
              </div>
              <button 
                onClick={() => navigate('/student/fees')}
                className="flex-shrink-0 ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
              >
                Pay Now
              </button>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Clinical Attendance */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                <FaCheckCircle className="text-4xl text-green-600" />
              </div>
            </div>
            <h3 className="text-gray-700 text-sm font-semibold mb-2">Clinical Attendance</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">{studentData.attendancePercentage}%</p>
            <p className="text-sm text-gray-600">Excellent Standing</p>
          </div>

          {/* Academic CGPA */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FaTrophy className="text-4xl text-yellow-600" />
              </div>
            </div>
            <h3 className="text-gray-700 text-sm font-semibold mb-2">Academic CGPA</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">{studentData.cgpa}</p>
            <p className="text-sm text-gray-600">Outstanding</p>
          </div>

          {/* Medical Departments */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                <FaHospitalAlt className="text-4xl text-purple-600" />
              </div>
            </div>
            <h3 className="text-gray-700 text-sm font-semibold mb-2">Medical Departments</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">{collegeStats.departments}</p>
            <p className="text-sm text-gray-600">Specialized Units</p>
          </div>

          {/* Medical Placements */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaStethoscope className="text-4xl text-blue-600" />
              </div>
            </div>
            <h3 className="text-gray-700 text-sm font-semibold mb-2">Medical Placements</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">{collegeStats.placementRate}%</p>
            <p className="text-sm text-gray-600">Internship Success</p>
          </div>
        </div>

        {/* Recent Medical Subject Performance */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white p-4 flex items-center gap-3">
            <FaChartBar className="text-2xl" />
            <h3 className="text-xl font-bold">Recent Medical Subject Performance</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {marksData.map((mark, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-800">{mark.subject}</h4>
                    <span className={`${getGradeColor(mark.grade)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {mark.grade}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Total: {mark.total}</span>
                      <span>Sem: {mark.semester}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>IA1: {mark.internal1}</span>
                      <span>IA2: {mark.internal2}</span>
                      <span>End: {mark.end}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medical Subject Marks Details */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaClipboardList className="text-2xl" />
              <h3 className="text-xl font-bold">Medical Subject Marks Details</h3>
            </div>
            <button
              onClick={() => onNavigate?.('academic_records')}
              className="bg-white/20 hover:bg-white/30 border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              View All Records
            </button>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Medical Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Semester</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">IA 1</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">IA 2</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">End Sem</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Total</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Grade</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {subjectWiseMarks.map((subject, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-gray-800">{subject.subjectName}</div>
                      <div className="text-xs text-gray-500">{subject.subjectCode}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{subject.semester}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white px-3 py-1 rounded text-xs font-medium">
                        {subject.internal1}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white px-3 py-1 rounded text-xs font-medium">
                        {subject.internal2}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white px-3 py-1 rounded text-xs font-medium">
                        {subject.end}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-bold text-blue-600 text-lg">{subject.totalMarks}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`${getGradeColor(subject.grade)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {subject.grade}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-medium">
                        {subject.credits}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Clinical & Lecture Attendance */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-2xl" />
              <h3 className="text-xl font-bold">Clinical & Lecture Attendance</h3>
            </div>
            <button className="bg-white/20 hover:bg-white/30 border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              View Full Schedule
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 mb-2">{studentData.attendancePercentage}%</p>
                <p className="text-gray-600">Overall</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 mb-2">{collegeStats.presentCount}</p>
                <p className="text-gray-600">Present</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 mb-2">{collegeStats.absentCount}</p>
                <p className="text-gray-600">Absent</p>
              </div>
            </div>

            {/* Recent Clinical Sessions */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-4">Recent Clinical Sessions</h4>
              <div className="space-y-3">
                {attendanceData.map((record, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <div>
                      <p className="font-semibold text-gray-800">{record.date}</p>
                      <p className="text-sm text-gray-600">{record.subject}</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      record.status === 'present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {record.status === 'present' ? 'Present' : 'Absent'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notices and Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Medical College Notices */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white p-4 flex items-center gap-3">
              <FaClipboardList className="text-2xl" />
              <h3 className="text-lg font-bold">Medical College Notices</h3>
            </div>
            <div className="p-6 space-y-4">
              {notices.map((notice, index) => (
                <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                  <h4 className="font-semibold text-gray-800 mb-1">{notice.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{notice.content}</p>
                  <p className="text-xs text-gray-500">{notice.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Medical Events */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white p-4 flex items-center gap-3">
              <FaCalendarAlt className="text-2xl" />
              <h3 className="text-lg font-bold">Upcoming Medical Events</h3>
            </div>
            <div className="p-6 space-y-4">
              {events.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white rounded-lg w-16 h-16 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">{event.day}</span>
                    <span className="text-xs">{event.month}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{event.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>🕐 {event.time}</span>
                      <span>📍 {event.location}</span>
                    </div>
                    <span className={`inline-block mt-2 px-3 py-1 rounded text-xs font-medium ${
                      event.type === 'Academic' ? 'bg-blue-100 text-blue-700' :
                      event.type === 'Practical' ? 'bg-purple-100 text-purple-700' :
                      'bg-indigo-100 text-indigo-700'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;