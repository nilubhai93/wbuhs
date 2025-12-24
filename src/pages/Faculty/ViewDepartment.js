import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FacultyLayout from '../../components/FacultyLayout/FacultyLayout';
import { FaSearch, FaFilter, FaEye, FaUsers, FaStethoscope, FaUniversity, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaUserTie, FaUserGraduate } from 'react-icons/fa';
import { departments, colleges, principals, hods, getTeachersByDepartmentIdAcrossColleges, getStudentsByDepartmentIdAcrossColleges, getDepartmentById } from '../../data/data';

const FacultyViewDepartment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [collegeFilter, setCollegeFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [activeTab, setActiveTab] = useState('colleges');
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [collegeDetailsTab, setCollegeDetailsTab] = useState('students');
    const [collegeSearchTerm, setCollegeSearchTerm] = useState('');
    const [collegeYearFilter, setCollegeYearFilter] = useState('');

    const department = getDepartmentById(parseInt(id));
    const departmentTeachers = getTeachersByDepartmentIdAcrossColleges(parseInt(id));
    const departmentStudents = getStudentsByDepartmentIdAcrossColleges(parseInt(id));

    // Get unique colleges for this department
    const departmentColleges = colleges.filter(college =>
        departmentTeachers.some(teacher => teacher.collegeId === college.id) ||
        departmentStudents.some(student => student.collegeId === college.id)
    );

    // Filter students based on search and filters
    const filteredStudents = departmentStudents.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCollege = !collegeFilter || student.collegeId === parseInt(collegeFilter);
        const matchesYear = !yearFilter || student.year === yearFilter;
        return matchesSearch && matchesCollege && matchesYear;
    });

    // Filter teachers based on search and filters
    const filteredTeachers = departmentTeachers.filter(teacher => {
        const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCollege = !collegeFilter || teacher.collegeId === parseInt(collegeFilter);
        return matchesSearch && matchesCollege;
    });

    const handleCollegeClick = (college) => {
        setSelectedCollege(college);
        setActiveTab('college-details');
    };

    const handleBackToColleges = () => {
        setSelectedCollege(null);
        setActiveTab('colleges');
        setCollegeDetailsTab('students');
        setCollegeSearchTerm('');
        setCollegeYearFilter('');
    };

    // Filter college students based on search and year
    const filteredCollegeStudents = selectedCollege ? departmentStudents.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
            student.rollNo.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(collegeSearchTerm.toLowerCase());
        const matchesYear = !collegeYearFilter || student.year === collegeYearFilter;
        return matchesSearch && matchesYear && student.collegeId === selectedCollege.id;
    }) : [];

    // Filter college teachers based on search
    const filteredCollegeTeachers = selectedCollege ? departmentTeachers.filter(teacher => {
        const matchesSearch = teacher.name.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
            teacher.email.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
            teacher.phone.toLowerCase().includes(collegeSearchTerm.toLowerCase());
        return matchesSearch && teacher.collegeId === selectedCollege.id;
    }) : [];

    // Filter college HODs based on search
    const filteredCollegeHODs = selectedCollege ? hods.filter(hod => {
        const matchesSearch = hod.name.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
            hod.email.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
            hod.phone.toLowerCase().includes(collegeSearchTerm.toLowerCase());
        return matchesSearch && hod.collegeId === selectedCollege.id && hod.departmentId === parseInt(id);
    }) : [];

    // Filter college Principals based on search
    const filteredCollegePrincipals = selectedCollege ? principals.filter(principal => {
        const matchesSearch = principal.name.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
            principal.email.toLowerCase().includes(collegeSearchTerm.toLowerCase()) ||
            principal.phone.toLowerCase().includes(collegeSearchTerm.toLowerCase());
        return matchesSearch && principal.collegeId === selectedCollege.id;
    }) : [];

    if (!department) {
        return (
            <FacultyLayout>
                <div className="p-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800">Department Not Found</h2>
                        <p className="text-gray-600 mt-2">The requested department could not be found.</p>
                        <button
                            onClick={() => navigate('/faculty/department-list')}
                            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                        >
                            Back to Departments
                        </button>
                    </div>
                </div>
            </FacultyLayout>
        );
    }

    return (
        <FacultyLayout>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

          .dashboard-container {
            font-family: 'Outfit', sans-serif;
          }

          .stat-card {
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .stat-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              45deg,
              transparent 30%,
              rgba(255, 255, 255, 0.1) 50%,
              transparent 70%
            );
            transform: rotate(45deg);
            transition: all 0.6s ease;
          }

          .stat-card:hover::before {
            left: 100%;
          }

          .stat-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .tab-active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
        `}
            </style>

            <div className="dashboard-container p-8 space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 min-h-screen">
                {/* Header */}
                <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/faculty/department-list')}
                                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-colors"
                            >
                                <FaArrowLeft className="text-gray-600" />
                            </button>
                            <div className={`p-4 rounded-xl ${department.color}`}>
                                <FaStethoscope className="text-white text-3xl" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                                    {department.name} Department
                                </h2>
                                <p className="text-gray-600 text-lg font-medium">Department ID: {department.id}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 rounded-xl border border-indigo-100">
                                <FaCalendarAlt className="text-indigo-600 text-xl" />
                                <div className="text-left">
                                    <div className="text-sm font-semibold text-indigo-900">
                                        {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </div>
                                    <div className="text-xs text-indigo-600">
                                        {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.2s' }}>
                        <div className="flex flex-col h-full">
                            <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                                <FaUniversity className="text-white text-2xl" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Colleges
                            </h3>
                            <p className="text-3xl font-bold text-cyan-600">
                                {departmentColleges.length}
                            </p>
                            <p className="text-xs text-gray-500 mt-auto">Offering this department</p>
                        </div>
                    </div>
                    <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.3s' }}>
                        <div className="flex flex-col h-full">
                            <div className="bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                                <FaUsers className="text-white text-2xl" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Total Students
                            </h3>
                            <p className="text-3xl font-bold text-emerald-600">
                                {departmentStudents.length.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500 mt-auto">Across all colleges</p>
                        </div>
                    </div>
                    <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.4s' }}>
                        <div className="flex flex-col h-full">
                            <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                                <FaStethoscope className="text-white text-2xl" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Total Teachers
                            </h3>
                            <p className="text-3xl font-bold text-amber-600">
                                {departmentTeachers.length}
                            </p>
                            <p className="text-xs text-gray-500 mt-auto">All departments</p>
                        </div>
                    </div>
                    <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.5s' }}>
                        <div className="flex flex-col h-full">
                            <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                                <FaEye className="text-white text-2xl" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Status
                            </h3>
                            <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${department.status === 'Active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}>
                                {department.status}
                            </span>
                            <p className="text-xs text-gray-500 mt-auto">Department status</p>
                        </div>
                    </div>
                </div>

                {/* Tabs and Filters */}
                {activeTab !== 'college-details' && (
                    <div className="animate-fade-in-up opacity-0 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" style={{ animationDelay: '0.6s' }}>


                        {/* Filters */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder={`Search ${activeTab}...`}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <select
                                        value={collegeFilter}
                                        onChange={(e) => setCollegeFilter(e.target.value)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    >
                                        <option value="">All Colleges</option>
                                        {departmentColleges.map(college => (
                                            <option key={college.id} value={college.id}>{college.name}</option>
                                        ))}
                                    </select>
                                    {activeTab === 'students' && (
                                        <select
                                            value={yearFilter}
                                            onChange={(e) => setYearFilter(e.target.value)}
                                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        >
                                            <option value="">All Years</option>
                                            <option value="1st Year">1st Year</option>
                                            <option value="2nd Year">2nd Year</option>
                                            <option value="3rd Year">3rd Year</option>
                                            <option value="4th Year">4th Year</option>
                                        </select>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {activeTab === 'colleges' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {departmentColleges.map(college => (
                                        <div
                                            key={college.id}
                                            className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                                            onClick={() => handleCollegeClick(college)}
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="bg-indigo-100 p-3 rounded-lg">
                                                    <FaUniversity className="text-indigo-600 text-xl" />
                                                </div>
                                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${college.status === 'Active'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {college.status}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">{college.name}</h3>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <FaMapMarkerAlt className="text-gray-400" />
                                                    <span>{college.city}, {college.state}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaUsers className="text-gray-400" />
                                                    <span>{departmentStudents.filter(s => s.collegeId === college.id).length} Students</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaStethoscope className="text-gray-400" />
                                                    <span>{departmentTeachers.filter(t => t.collegeId === college.id).length} Teachers</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-gray-200">
                                                <div className="text-xs text-gray-500">
                                                    Established: {college.established}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Accreditation: {college.accreditation}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'students' && (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Details</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year/Semester</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {filteredStudents.map(student => (
                                                <tr key={student.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                                            <div className="text-sm text-gray-500">{student.rollNo}</div>
                                                            <div className="text-sm text-gray-500">{student.email}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{student.collegeName}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{student.year}</div>
                                                        <div className="text-sm text-gray-500">{student.semester}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{student.cgpa}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${student.status === 'Active'
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                            }`}>
                                                            {student.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {activeTab === 'teachers' && (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher Details</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {filteredTeachers.map(teacher => (
                                                <tr key={teacher.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                                                            <div className="text-sm text-gray-500">{teacher.email}</div>
                                                            <div className="text-sm text-gray-500">{teacher.phone}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{teacher.collegeName}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{teacher.designation}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{teacher.experience}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${teacher.status === 'Active'
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                            }`}>
                                                            {teacher.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* College Details View */}
                {activeTab === 'college-details' && selectedCollege && (
                    <div className="animate-fade-in-up opacity-0 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" style={{ animationDelay: '0.6s' }}>
                        <div className="p-6 space-y-6">
                            {/* College Header */}
                            <div className="flex items-center justify-between bg-white rounded-xl p-6 border border-gray-200">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={handleBackToColleges}
                                        className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-colors"
                                    >
                                        <FaArrowLeft className="text-gray-600" />
                                    </button>
                                    <div className="bg-indigo-100 p-3 rounded-lg">
                                        <FaUniversity className="text-indigo-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{selectedCollege.name}</h3>
                                        <p className="text-gray-600">{selectedCollege.city}, {selectedCollege.state}</p>
                                    </div>
                                </div>
                            </div>



                            {/* Tabs and Filters */}
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                {/* Tabs */}
                                <div className="border-b border-gray-200">
                                    <div className="flex">
                                        <button
                                            onClick={() => setCollegeDetailsTab('students')}
                                            className={`px-6 py-4 font-medium text-sm ${collegeDetailsTab === 'students' ? 'tab-active' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Students ({filteredCollegeStudents.length})
                                        </button>
                                        <button
                                            onClick={() => setCollegeDetailsTab('teachers')}
                                            className={`px-6 py-4 font-medium text-sm ${collegeDetailsTab === 'teachers' ? 'tab-active' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Teachers ({filteredCollegeTeachers.length})
                                        </button>
                                        <button
                                            onClick={() => setCollegeDetailsTab('hods')}
                                            className={`px-6 py-4 font-medium text-sm ${collegeDetailsTab === 'hods' ? 'tab-active' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            HODs ({filteredCollegeHODs.length})
                                        </button>
                                        <button
                                            onClick={() => setCollegeDetailsTab('principals')}
                                            className={`px-6 py-4 font-medium text-sm ${collegeDetailsTab === 'principals' ? 'tab-active' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Principals ({filteredCollegePrincipals.length})
                                        </button>
                                    </div>
                                </div>

                                {/* Filters */}
                                <div className="p-6 border-b border-gray-200">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1 relative">
                                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder={`Search ${collegeDetailsTab}...`}
                                                value={collegeSearchTerm}
                                                onChange={(e) => setCollegeSearchTerm(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            />
                                        </div>
                                        {collegeDetailsTab === 'students' && (
                                            <select
                                                value={collegeYearFilter}
                                                onChange={(e) => setCollegeYearFilter(e.target.value)}
                                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            >
                                                <option value="">All Years</option>
                                                <option value="1st Year">1st Year</option>
                                                <option value="2nd Year">2nd Year</option>
                                                <option value="3rd Year">3rd Year</option>
                                                <option value="4th Year">4th Year</option>
                                            </select>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="overflow-x-auto">
                                    {collegeDetailsTab === 'students' && (
                                        <table className="w-full">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Details</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year/Semester</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {filteredCollegeStudents.map(student => (
                                                    <tr key={student.id} className="hover:bg-gray-50">
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div>
                                                                <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                                                <div className="text-sm text-gray-500">{student.rollNo}</div>
                                                                <div className="text-sm text-gray-500">{student.email}</div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{student.year}</div>
                                                            <div className="text-sm text-gray-500">{student.semester}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{student.cgpa}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${student.status === 'Active'
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-red-100 text-red-800'
                                                                }`}>
                                                                {student.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}

                                    {collegeDetailsTab === 'teachers' && (
                                        <table className="w-full">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher Details</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {filteredCollegeTeachers.map(teacher => (
                                                    <tr key={teacher.id} className="hover:bg-gray-50">
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div>
                                                                <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                                                                <div className="text-sm text-gray-500">{teacher.email}</div>
                                                                <div className="text-sm text-gray-500">{teacher.phone}</div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{teacher.designation}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{teacher.experience}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${teacher.status === 'Active'
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-red-100 text-red-800'
                                                                }`}>
                                                                {teacher.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}

                                    {collegeDetailsTab === 'hods' && (
                                        <table className="w-full">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HOD Details</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {filteredCollegeHODs.map(hod => (
                                                    <tr key={hod.id} className="hover:bg-gray-50">
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div>
                                                                <div className="text-sm font-medium text-gray-900">{hod.name}</div>
                                                                <div className="text-sm text-gray-500">{hod.email}</div>
                                                                <div className="text-sm text-gray-500">{hod.phone}</div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{hod.departmentName}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{hod.experience}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${hod.status === 'Active'
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-red-100 text-red-800'
                                                                }`}>
                                                                {hod.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}

                                    {collegeDetailsTab === 'principals' && (
                                        <table className="w-full">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal Details</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {filteredCollegePrincipals.map(principal => (
                                                    <tr key={principal.id} className="hover:bg-gray-50">
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div>
                                                                <div className="text-sm font-medium text-gray-900">{principal.name}</div>
                                                                <div className="text-sm text-gray-500">{principal.email}</div>
                                                                <div className="text-sm text-gray-500">{principal.phone}</div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{principal.experience}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{principal.qualification}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${principal.status === 'Active'
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-red-100 text-red-800'
                                                                }`}>
                                                                {principal.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </FacultyLayout>
    );
};

export default FacultyViewDepartment;
