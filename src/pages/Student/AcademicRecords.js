import React from 'react';
import StudentLayout from '../../components/studentLayout/StudentLayout';
import {
  FaGraduationCap,
  FaBook,
  FaChartLine,
  FaCalendarAlt,
  FaStar,
  FaTrophy
} from 'react-icons/fa';

const AcademicRecords = () => {
  const academicData = {
    overallGPA: '8.5',
    totalCredits: '180',
    completedCredits: '120',
    currentSemester: '6th Semester',
    semesters: [
      {
        semester: '6th Semester',
        year: '2024',
        status: 'Current',
        subjects: [
          { code: 'MED601', name: 'Advanced Pharmacology', credits: 4, grade: 'A', points: 9.0 },
          { code: 'MED602', name: 'Clinical Medicine', credits: 5, grade: 'A-', points: 8.5 },
          { code: 'MED603', name: 'Surgery Principles', credits: 4, grade: 'B+', points: 7.5 },
          { code: 'MED604', name: 'Pathology Lab', credits: 3, grade: 'A', points: 9.0 }
        ],
        gpa: '8.5',
        credits: 16
      },
      {
        semester: '5th Semester',
        year: '2023',
        status: 'Completed',
        subjects: [
          { code: 'MED501', name: 'Internal Medicine', credits: 5, grade: 'A', points: 9.0 },
          { code: 'MED502', name: 'Pediatrics', credits: 4, grade: 'A-', points: 8.5 },
          { code: 'MED503', name: 'Obstetrics & Gynecology', credits: 4, grade: 'B+', points: 7.5 },
          { code: 'MED504', name: 'Community Medicine', credits: 3, grade: 'A', points: 9.0 }
        ],
        gpa: '8.5',
        credits: 16
      },
      {
        semester: '4th Semester',
        year: '2023',
        status: 'Completed',
        subjects: [
          { code: 'MED401', name: 'Anatomy II', credits: 4, grade: 'A-', points: 8.5 },
          { code: 'MED402', name: 'Physiology II', credits: 4, grade: 'A', points: 9.0 },
          { code: 'MED403', name: 'Biochemistry II', credits: 3, grade: 'B+', points: 7.5 },
          { code: 'MED404', name: 'Microbiology', credits: 3, grade: 'A', points: 9.0 }
        ],
        gpa: '8.5',
        credits: 14
      }
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

  
  return (
    <StudentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaGraduationCap className="mr-3 text-blue-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Academic Records</h2>
              <p className="text-gray-600 mt-1">View your academic performance and grades</p>
            </div>
          </div>
        </div>

        {/* Overall Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaStar className="text-yellow-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Overall GPA</p>
                <p className="text-2xl font-bold text-gray-800">{academicData.overallGPA}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaBook className="text-blue-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Total Credits</p>
                <p className="text-2xl font-bold text-gray-800">{academicData.totalCredits}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaChartLine className="text-green-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Completed Credits</p>
                <p className="text-2xl font-bold text-gray-800">{academicData.completedCredits}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaCalendarAlt className="text-purple-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Current Semester</p>
                <p className="text-lg font-bold text-gray-800">{academicData.currentSemester}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Semester-wise Records */}
        <div className="space-y-6">
          {academicData.semesters.map((semester, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaTrophy className="text-white text-xl mr-3" />
                    <div>
                      <h3 className="text-white text-xl font-bold">{semester.semester}</h3>
                      <p className="text-blue-100">{semester.year}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      semester.status === 'Current'
                        ? 'bg-yellow-400 text-yellow-900'
                        : 'bg-green-400 text-green-900'
                    }`}>
                      {semester.status}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Semester Summary */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                  <div className="flex items-center space-x-6">
                    <div>
                      <p className="text-sm text-gray-500">Semester GPA</p>
                      <p className="text-2xl font-bold text-gray-800">{semester.gpa}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Credits</p>
                      <p className="text-xl font-semibold text-gray-700">{semester.credits}</p>
                    </div>
                  </div>
                </div>

                {/* Subjects Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject Code</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject Name</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Credits</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Grade</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Grade Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semester.subjects.map((subject, subIndex) => (
                        <tr key={subIndex} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-800">{subject.code}</td>
                          <td className="py-3 px-4 text-gray-700">{subject.name}</td>
                          <td className="py-3 px-4 text-center font-medium">{subject.credits}</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(subject.grade)}`}>
                              {subject.grade}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center font-medium">{subject.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StudentLayout>
  );
};

export default AcademicRecords;
