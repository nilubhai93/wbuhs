import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TeacherLayout from '../../components/teacherLayout/TeacherLayout';
import {
  FaCheckCircle,
  FaTrophy,
  FaHospitalAlt,
  FaStethoscope,
  FaChartBar,
  FaClipboardList,
  FaCalendarAlt,
  FaExclamationCircle,
  FaUsers,
  FaBookOpen,
  FaGraduationCap
} from 'react-icons/fa';

const TeacherDashboard = ({ onNavigate, userInfo = {} }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Sample Data for Teacher
  const [teacherData] = useState({
    name: userInfo?.name || "Dr. Sarah Johnson",
    teacherId: userInfo?.teacherId || "TCH2024001",
    department: "Pathology",
    experience: "8 years",
    studentsCount: 45,
    classesCount: 6,
    year: "SENIOR FACULTY"
  });

  const [classPerformance] = useState([
    { subject: 'Pathology', averageGrade: 'A+', attendance: 92, students: 45 },
    { subject: 'Pharmacology', averageGrade: 'A', attendance: 88, students: 42 },
    { subject: 'Medicine', averageGrade: 'B+', attendance: 85, students: 48 },
    { subject: 'Surgery', averageGrade: 'A', attendance: 90, students: 40 }
  ]);

  const [upcomingClasses] = useState([
    { subject: 'Pathology', time: '9:00 AM', room: 'Lab 201', students: 45 },
    { subject: 'Clinical Skills', time: '2:00 PM', room: 'Skills Lab', students: 30 },
    { subject: 'Medicine', time: '10:00 AM', room: 'Lecture Hall A', students: 60 }
  ]);

  const [notices] = useState([
    { title: 'Faculty Meeting', content: 'Monthly faculty meeting scheduled for next week.', date: '12 Sept 2024' },
    { title: 'Curriculum Update', content: 'New curriculum guidelines for Pathology department.', date: '10 Sept 2024' },
    { title: 'Research Grant', content: 'New research grant opportunities available.', date: '08 Sept 2024' }
  ]);

  const [events] = useState([
    { day: '15', month: 'Sep', title: 'Grand Rounds', time: '8:00 AM', location: 'Main Auditorium', type: 'Academic' },
    { day: '18', month: 'Sep', title: 'Faculty Workshop', time: '2:00 PM', location: 'Conference Room', type: 'Training' },
    { day: '20', month: 'Sep', title: 'Medical Ethics Seminar', time: '10:00 AM', location: 'Lecture Hall', type: 'Seminar' }
  ]);

  const [departmentStats] = useState({
    totalStudents: 180,
    activeClasses: 12,
    researchProjects: 8,
    publications: 25
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
      <TeacherLayout onNavigate={onNavigate} currentPage="dashboard" userInfo={userInfo}>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading Teacher Dashboard...</p>
          </div>
        </div>
      </TeacherLayout>
    );
  }

  return (
    <TeacherLayout onNavigate={onNavigate} currentPage="dashboard" userInfo={userInfo}>
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {teacherData.name}!</h1>
              <p className="text-blue-100 text-lg">Department of {teacherData.department} • {teacherData.experience} Experience</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">{teacherData.studentsCount}</p>
              <p className="text-blue-100">Students</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Students */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                <FaUsers className="text-4xl text-green-600" />
              </div>
            </div>
            <h3 className="text-gray-700 text-sm font-semibold mb-2">Total Students</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">{departmentStats.totalStudents}</p>
            <p className="text-sm text-gray-600">Enrolled</p>
          </div>

          {/* Active Classes */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FaBookOpen className="text-4xl text-yellow-600" />
              </div>
            </div>
            <h3 className="text-gray-700 text-sm font-semibold mb-2">Active Classes</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">{departmentStats.activeClasses}</p>
            <p className="text-sm text-gray-600">This Semester</p>
          </div>

          {/* Research Projects */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                <FaStethoscope className="text-4xl text-purple-600" />
              </div>
            </div>
            <h3 className="text-gray-700 text-sm font-semibold mb-2">Research Projects</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">{departmentStats.researchProjects}</p>
            <p className="text-sm text-gray-600">Ongoing</p>
          </div>

          {/* Publications */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-4xl text-blue-600" />
              </div>
            </div>
            <h3 className="text-gray-700 text-sm font-semibold mb-2">Publications</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">{departmentStats.publications}</p>
            <p className="text-sm text-gray-600">This Year</p>
          </div>
        </div>

        {/* Class Performance */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white p-4 flex items-center gap-3">
            <FaChartBar className="text-2xl" />
            <h3 className="text-xl font-bold">Class Performance Overview</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {classPerformance.map((classData, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-800">{classData.subject}</h4>
                    <span className={`${getGradeColor(classData.averageGrade)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {classData.averageGrade}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Attendance: {classData.attendance}%</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Students: {classData.students}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-2xl" />
              <h3 className="text-xl font-bold">Today's Classes</h3>
            </div>
            <button className="bg-white/20 hover:bg-white/30 border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              View Schedule
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingClasses.map((classItem, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold">
                      {classItem.time.split(':')[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{classItem.subject}</h4>
                      <p className="text-sm text-gray-600">{classItem.room} • {classItem.students} students</p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">{classItem.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notices and Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Faculty Notices */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white p-4 flex items-center gap-3">
              <FaClipboardList className="text-2xl" />
              <h3 className="text-lg font-bold">Faculty Notices</h3>
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

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-[#1565c0] to-[#42a5f5]  text-white p-4 flex items-center gap-3">
              <FaCalendarAlt className="text-2xl" />
              <h3 className="text-lg font-bold">Upcoming Events</h3>
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
                      event.type === 'Training' ? 'bg-purple-100 text-purple-700' :
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
    </TeacherLayout>
  );
};

export default TeacherDashboard;
