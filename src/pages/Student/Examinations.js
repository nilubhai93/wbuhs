import React from 'react';
import StudentLayout from '../../components/studentLayout/StudentLayout';
import {
  FaFileAlt,
  FaCalendarCheck,
  FaTrophy,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCalendarAlt
} from 'react-icons/fa';

const Examinations = () => {
  const examData = {
    upcomingExams: [
      {
        id: 1,
        subject: 'Advanced Pharmacology',
        subjectCode: 'MED601',
        date: '2024-02-20',
        time: '10:00 AM - 1:00 PM',
        venue: 'Hall A-101',
        type: 'Theory',
        status: 'Scheduled'
      },
      {
        id: 2,
        subject: 'Clinical Medicine',
        subjectCode: 'MED602',
        date: '2024-02-22',
        time: '2:00 PM - 5:00 PM',
        venue: 'Hall B-205',
        type: 'Practical',
        status: 'Scheduled'
      },
      {
        id: 3,
        subject: 'Surgery Principles',
        subjectCode: 'MED603',
        date: '2024-02-25',
        time: '9:00 AM - 12:00 PM',
        venue: 'Hall C-301',
        type: 'Theory',
        status: 'Scheduled'
      }
    ],
    examResults: [
      {
        semester: '5th Semester',
        year: '2023',
        subjects: [
          { code: 'MED501', name: 'Internal Medicine', marks: '85/100', grade: 'A', status: 'Pass' },
          { code: 'MED502', name: 'Pediatrics', marks: '78/100', grade: 'A-', status: 'Pass' },
          { code: 'MED503', name: 'Obstetrics & Gynecology', marks: '82/100', grade: 'A-', status: 'Pass' },
          { code: 'MED504', name: 'Community Medicine', marks: '88/100', grade: 'A', status: 'Pass' }
        ],
        overallGrade: 'A',
        percentage: '83.25%'
      },
      {
        semester: '4th Semester',
        year: '2023',
        subjects: [
          { code: 'MED401', name: 'Anatomy II', marks: '76/100', grade: 'A-', status: 'Pass' },
          { code: 'MED402', name: 'Physiology II', marks: '81/100', grade: 'A', status: 'Pass' },
          { code: 'MED403', name: 'Biochemistry II', marks: '79/100', grade: 'A-', status: 'Pass' },
          { code: 'MED404', name: 'Microbiology', marks: '84/100', grade: 'A', status: 'Pass' }
        ],
        overallGrade: 'A',
        percentage: '80%'
      }
    ],
    importantDates: [
      { event: 'Exam Registration Deadline', date: '2024-02-10', status: 'Completed' },
      { event: 'Hall Ticket Download', date: '2024-02-12', status: 'Available' },
      { event: 'First Exam', date: '2024-02-20', status: 'Upcoming' },
      { event: 'Result Declaration', date: '2024-03-15', status: 'Upcoming' }
    ]
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A': return 'text-green-600 bg-green-100';
      case 'A-': return 'text-green-500 bg-green-50';
      case 'B+': return 'text-blue-600 bg-blue-100';
      case 'B': return 'text-blue-500 bg-blue-50';
      case 'B-': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pass': return 'text-green-600 bg-green-100';
      case 'Fail': return 'text-red-600 bg-red-100';
      case 'Scheduled': return 'text-blue-600 bg-blue-100';
      case 'Completed': return 'text-gray-600 bg-gray-100';
      case 'Available': return 'text-green-600 bg-green-100';
      case 'Upcoming': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pass': return <FaCheckCircle className="text-green-500" />;
      case 'Fail': return <FaExclamationTriangle className="text-red-500" />;
      case 'Scheduled': return <FaCalendarCheck className="text-blue-500" />;
      case 'Completed': return <FaCheckCircle className="text-gray-500" />;
      case 'Available': return <FaCheckCircle className="text-green-500" />;
      case 'Upcoming': return <FaClock className="text-yellow-500" />;
      default: return <FaClock className="text-gray-500" />;
    }
  };

  return (
    <StudentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaFileAlt className="mr-3 text-blue-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Examinations</h2>
              <p className="text-gray-600 mt-1">View your examination schedule and results</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaCalendarCheck className="text-blue-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Upcoming Exams</p>
                <p className="text-2xl font-bold text-gray-800">{examData.upcomingExams.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaTrophy className="text-yellow-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Average Grade</p>
                <p className="text-2xl font-bold text-gray-800">A</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Pass Rate</p>
                <p className="text-2xl font-bold text-gray-800">100%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaClock className="text-purple-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Next Exam</p>
                <p className="text-lg font-bold text-gray-800">Feb 20</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Examinations */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-blue-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Upcoming Examinations</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date & Time</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Venue</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Type</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {examData.upcomingExams.map((exam) => (
                  <tr key={exam.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-800">{exam.subject}</p>
                        <p className="text-sm text-gray-500">{exam.subjectCode}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <FaCalendarAlt className="text-gray-400 mr-2" />
                        <div>
                      <p className="text-gray-700">{new Date(exam.date).toLocaleDateString()}</p>
                          <p className="text-sm text-gray-500">{exam.time}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                        <span className="text-gray-700">{exam.venue}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        {exam.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(exam.status)}`}>
                        {getStatusIcon(exam.status)}
                        <span className="ml-2">{exam.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Examination Results */}
        <div className="space-y-6">
          {examData.examResults.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaTrophy className="text-white text-xl mr-3" />
                    <div>
                      <h3 className="text-white text-xl font-bold">{result.semester}</h3>
                      <p className="text-green-100">{result.year}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white">
                      <p className="text-sm">Overall Grade</p>
                      <p className="text-2xl font-bold">{result.overallGrade}</p>
                      <p className="text-sm text-green-100">{result.percentage}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Subjects Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject Code</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject Name</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Marks</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Grade</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.subjects.map((subject, subIndex) => (
                        <tr key={subIndex} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-800">{subject.code}</td>
                          <td className="py-3 px-4 text-gray-700">{subject.name}</td>
                          <td className="py-3 px-4 text-center font-medium">{subject.marks}</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(subject.grade)}`}>
                              {subject.grade}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(subject.status)}`}>
                              {getStatusIcon(subject.status)}
                              <span className="ml-2">{subject.status}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Dates */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-purple-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Important Dates</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examData.importantDates.map((date, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  {getStatusIcon(date.status)}
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">{date.event}</p>
                    <p className="text-sm text-gray-500">{new Date(date.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(date.status)}`}>
                  {date.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Examinations;
