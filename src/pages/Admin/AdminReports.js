import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import {
  FaFileAlt,
  FaDownload,
  FaChartBar,
  FaUsers,
  FaUserTie,
  FaClipboardList,
  FaCalendarAlt,
  FaFilter,
  FaPrint,
  FaEye
} from 'react-icons/fa';
import { colleges, students, teachers, departments, hods, principals, parents } from '../../data/data';

const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState('overview');
  const [dateRange, setDateRange] = useState('all');
  const [selectedCollege, setSelectedCollege] = useState('all');

  // Calculate report data
  const reportData = {
    overview: {
      title: 'Institutional Overview Report',
      totalColleges: colleges.length,
      totalStudents: students.length,
      totalTeachers: teachers.length,
      totalHODs: hods.length,
      totalPrincipals: principals.length,
      totalParents: parents.length,
      totalDepartments: departments.length
    },
    colleges: {
      title: 'Colleges Report',
      data: colleges.map(college => ({
        ...college,
        studentCount: students.filter(s => s.collegeId === college.id).length,
        teacherCount: teachers.filter(t => t.collegeId === college.id).length,
        hodCount: hods.filter(h => h.collegeId === college.id).length
      }))
    },
    students: {
      title: 'Students Report',
      data: students.filter(student =>
        selectedCollege === 'all' || student.collegeId === parseInt(selectedCollege)
      )
    },
    teachers: {
      title: 'Teachers Report',
      data: teachers.filter(teacher =>
        selectedCollege === 'all' || teacher.collegeId === parseInt(selectedCollege)
      )
    },
    departments: {
      title: 'Departments Report',
      data: departments.map(dept => ({
        ...dept,
        totalStudents: students.filter(s => s.departmentId === dept.id).length,
        totalTeachers: teachers.filter(t => t.departmentId === dept.id).length,
        colleges: colleges.filter(c =>
          students.some(s => s.collegeId === c.id && s.departmentId === dept.id)
        ).length
      }))
    }
  };

  const handleGenerateReport = (reportType) => {
    // In a real application, this would generate and download a PDF or Excel file
    alert(`Generating ${reportData[reportType].title}...`);
  };

  const handlePrintReport = () => {
    window.print();
  };

  const renderReportContent = () => {
    const data = reportData[selectedReport];

    switch (selectedReport) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">Total Colleges</h3>
                  <p className="text-3xl font-bold text-blue-600">{data.totalColleges}</p>
                </div>
                <FaUsers className="text-4xl text-blue-500" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Total Students</h3>
                  <p className="text-3xl font-bold text-green-600">{data.totalStudents.toLocaleString()}</p>
                </div>
                <FaUserTie className="text-4xl text-green-500" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">Total Teachers</h3>
                  <p className="text-3xl font-bold text-purple-600">{data.totalTeachers}</p>
                </div>
                <FaClipboardList className="text-4xl text-purple-500" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-orange-800">Total HODs</h3>
                  <p className="text-3xl font-bold text-orange-600">{data.totalHODs}</p>
                </div>
                <FaUserTie className="text-4xl text-orange-500" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-red-800">Total Principals</h3>
                  <p className="text-3xl font-bold text-red-600">{data.totalPrincipals}</p>
                </div>
                <FaUserTie className="text-4xl text-red-500" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border border-indigo-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-800">Departments</h3>
                  <p className="text-3xl font-bold text-indigo-600">{data.totalDepartments}</p>
                </div>
                <FaChartBar className="text-4xl text-indigo-500" />
              </div>
            </div>
          </div>
        );

      case 'colleges':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teachers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HODs</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Established</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.data.map((college) => (
                  <tr key={college.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{college.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{college.city}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{college.studentCount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{college.teacherCount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{college.hodCount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{college.established}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'students':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.data.slice(0, 50).map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.rollNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.collegeName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.departmentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.cgpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.data.length > 50 && (
              <p className="text-sm text-gray-500 mt-4">Showing first 50 records. Total: {data.data.length} students.</p>
            )}
          </div>
        );

      case 'teachers':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.data.slice(0, 50).map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{teacher.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.collegeName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.departmentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.designation}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.experience} years</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.data.length > 50 && (
              <p className="text-sm text-gray-500 mt-4">Showing first 50 records. Total: {data.data.length} teachers.</p>
            )}
          </div>
        );

      case 'departments':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Students</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Teachers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Colleges Offering</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.data.map((dept) => (
                  <tr key={dept.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dept.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.totalStudents}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.totalTeachers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.colleges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return <div>Select a report type to view data.</div>;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaFileAlt className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Reports</h2>
              <p className="text-gray-600 mt-1">Generate and view institutional reports</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handlePrintReport}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <FaPrint className="mr-2" />
              Print
            </button>
            <button
              onClick={() => handleGenerateReport(selectedReport)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <FaDownload className="mr-2" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Report Controls */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="overview">Institutional Overview</option>
                <option value="colleges">Colleges Report</option>
                <option value="students">Students Report</option>
                <option value="teachers">Teachers Report</option>
                <option value="departments">Departments Report</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Time</option>
                <option value="year">This Year</option>
                <option value="month">This Month</option>
                <option value="week">This Week</option>
              </select>
            </div>
            {(selectedReport === 'students' || selectedReport === 'teachers') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">College Filter</label>
                <select
                  value={selectedCollege}
                  onChange={(e) => setSelectedCollege(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Colleges</option>
                  {colleges.map(college => (
                    <option key={college.id} value={college.id}>{college.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Report Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">{reportData[selectedReport].title}</h3>
            <div className="text-sm text-gray-600">
              Generated on {new Date().toLocaleDateString()}
            </div>
          </div>
          {renderReportContent()}
        </div>

        {/* Report Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Available Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedReport('overview')}>
              <div className="flex items-center mb-2">
                <FaChartBar className="text-indigo-500 mr-2" />
                <h4 className="font-semibold text-gray-800">Institutional Overview</h4>
              </div>
              <p className="text-sm text-gray-600">Complete overview of all colleges, students, and faculty</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedReport('colleges')}>
              <div className="flex items-center mb-2">
                <FaUsers className="text-blue-500 mr-2" />
                <h4 className="font-semibold text-gray-800">Colleges Report</h4>
              </div>
              <p className="text-sm text-gray-600">Detailed information about all medical colleges</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedReport('students')}>
              <div className="flex items-center mb-2">
                <FaUserTie className="text-green-500 mr-2" />
                <h4 className="font-semibold text-gray-800">Students Report</h4>
              </div>
              <p className="text-sm text-gray-600">Student enrollment and academic performance data</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedReport('teachers')}>
              <div className="flex items-center mb-2">
                <FaClipboardList className="text-purple-500 mr-2" />
                <h4 className="font-semibold text-gray-800">Teachers Report</h4>
              </div>
              <p className="text-sm text-gray-600">Faculty information and qualifications</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedReport('departments')}>
              <div className="flex items-center mb-2">
                <FaEye className="text-orange-500 mr-2" />
                <h4 className="font-semibold text-gray-800">Departments Report</h4>
              </div>
              <p className="text-sm text-gray-600">Medical departments and specializations overview</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminReports;
