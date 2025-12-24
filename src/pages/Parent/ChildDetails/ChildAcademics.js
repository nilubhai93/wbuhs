import React from 'react';
import ParentLayout from '../../../components/ParentLayout/ParentLayout';
import { FaBook, FaChartLine, FaTrophy, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const ChildAcademics = () => {
  const academicRecords = [
    {
      semester: 'Semester 1',
      year: '2023',
      subjects: [
        { name: 'Anatomy', marks: 85, total: 100, grade: 'A' },
        { name: 'Physiology', marks: 78, total: 100, grade: 'B+' },
        { name: 'Biochemistry', marks: 92, total: 100, grade: 'A+' },
        { name: 'Medical Ethics', marks: 88, total: 100, grade: 'A' }
      ],
      sgpa: 8.7,
      cgpa: 8.7
    },
    {
      semester: 'Semester 2',
      year: '2023',
      subjects: [
        { name: 'Pathology', marks: 82, total: 100, grade: 'A' },
        { name: 'Pharmacology', marks: 75, total: 100, grade: 'B+' },
        { name: 'Microbiology', marks: 89, total: 100, grade: 'A' },
        { name: 'Forensic Medicine', marks: 85, total: 100, grade: 'A' }
      ],
      sgpa: 8.4,
      cgpa: 8.55
    }
  ];

  const currentSemester = {
    semester: 'Semester 3',
    subjects: [
      { name: 'Community Medicine', marks: '-', total: 100, grade: '-' },
      { name: 'Ophthalmology', marks: '-', total: 100, grade: '-' },
      { name: 'ENT', marks: '-', total: 100, grade: '-' },
      { name: 'Dermatology', marks: '-', total: 100, grade: '-' }
    ]
  };

  const achievements = [
    { title: 'Best Student in Biochemistry', date: 'Dec 2023', type: 'Academic Excellence' },
    { title: 'Medical Quiz Winner', date: 'Nov 2023', type: 'Competition' },
    { title: 'Research Paper Publication', date: 'Oct 2023', type: 'Research' }
  ];

  return (
    <ParentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center">
          <FaBook className="mr-3 text-indigo-600 text-3xl" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Child Academics</h2>
            <p className="text-gray-600 mt-1">View your child's academic performance and achievements.</p>
          </div>
        </div>

        {/* Academic Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaChartLine className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">8.55</h3>
            <p className="text-gray-600">Current CGPA</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaGraduationCap className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">MBBS 2nd Year</h3>
            <p className="text-gray-600">Current Class</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">3</h3>
            <p className="text-gray-600">Achievements</p>
          </div>
        </div>

        {/* Semester-wise Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Semester-wise Performance</h3>
          <div className="space-y-6">
            {academicRecords.map((semester, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {semester.semester} - {semester.year}
                  </h4>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">SGPA: <span className="font-bold">{semester.sgpa}</span></p>
                    <p className="text-sm text-gray-600">CGPA: <span className="font-bold">{semester.cgpa}</span></p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2">Subject</th>
                        <th className="text-center py-2">Marks</th>
                        <th className="text-center py-2">Total</th>
                        <th className="text-center py-2">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semester.subjects.map((subject, subIndex) => (
                        <tr key={subIndex} className="border-b border-gray-100">
                          <td className="py-2">{subject.name}</td>
                          <td className="text-center py-2">{subject.marks}</td>
                          <td className="text-center py-2">{subject.total}</td>
                          <td className="text-center py-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              subject.grade === 'A+' ? 'bg-green-100 text-green-800' :
                              subject.grade === 'A' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {subject.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Semester */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Current Semester - {currentSemester.semester}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2">Subject</th>
                  <th className="text-center py-2">Marks</th>
                  <th className="text-center py-2">Total</th>
                  <th className="text-center py-2">Grade</th>
                </tr>
              </thead>
              <tbody>
                {currentSemester.subjects.map((subject, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2">{subject.name}</td>
                    <td className="text-center py-2 text-gray-500">{subject.marks}</td>
                    <td className="text-center py-2">{subject.total}</td>
                    <td className="text-center py-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                        {subject.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaTrophy className="text-yellow-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Achievements</h3>
          </div>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <FaTrophy className="text-yellow-500 mr-4" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.type}</p>
                </div>
                <div className="text-right">
                  <FaCalendarAlt className="inline mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">{achievement.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ParentLayout>
  );
};

export default ChildAcademics;
