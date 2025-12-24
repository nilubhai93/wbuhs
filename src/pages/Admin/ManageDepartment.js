import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import { FaSearch, FaPlus, FaEye, FaEdit, FaTrash, FaUsers, FaCheckCircle, FaTimesCircle, FaStethoscope, FaClock, FaBone, FaHeartbeat, FaMicroscope, FaBrain, FaTooth, FaUserMd, FaCut, FaFemale, FaBaby } from 'react-icons/fa';
import { departments, getTeachersByDepartmentIdAcrossColleges, getStudentsByDepartmentIdAcrossColleges, hods } from '../../data/data';

const ManageDepartment = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Icon mapping for departments
    const getDepartmentIcon = (iconName) => {
        const iconMap = {
            'FaBone': FaBone,
            'FaHeartbeat': FaHeartbeat,
            'FaMicroscope': FaMicroscope,
            'FaStethoscope': FaStethoscope,
            'FaBrain': FaBrain,
            'FaTooth': FaTooth,
            'FaUserMd': FaUserMd,
            'FaUsers': FaUsers,
            'FaCut': FaCut,
            'FaFemale': FaFemale,
            'FaBaby': FaBaby
        };
        return iconMap[iconName] || FaStethoscope;
    };

    // Calculate active counts
    const activeDepartments = departments.filter(d => d.status === 'Active').length;
    const totalTeachers = departments.reduce((sum, dept) => sum + getTeachersByDepartmentIdAcrossColleges(dept.id).length, 0);
    const totalStudents = departments.reduce((sum, dept) => sum + getStudentsByDepartmentIdAcrossColleges(dept.id).length, 0);

    // Calculate colleges count for each department
    const getCollegesCountByDepartmentId = (deptId) => {
        const uniqueColleges = new Set(hods.filter(hod => hod.departmentId === deptId).map(hod => hod.collegeId));
        return uniqueColleges.size;
    };

    // Filter departments based on search term
    const filteredDepartments = departments.filter(dept =>
        dept.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDepartmentView = (deptId) => {
        navigate(`/admin/manage-department/DepartmentView/${deptId}`);
    };

    const handleEditDepartment = (deptId) => {
        console.log('Edit department:', deptId);
    };

    const handleDeleteDepartment = (deptId) => {
        console.log('Delete department:', deptId);
    };

    return (
        <AdminLayout>
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

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .trend-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-family: 'Space Mono', monospace;
            font-weight: 700;
            font-size: 0.75rem;
          }
        `}
            </style>

            <div className="dashboard-container p-8 space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 min-h-screen">
                {/* Page Header */}
                <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg animate-float">
                                <FaStethoscope className="text-white text-4xl" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                                    Manage Departments
                                </h2>
                                <p className="text-gray-600 text-lg font-medium">View and manage all medical departments in the system</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 rounded-xl border border-indigo-100">
                                <FaClock className="text-indigo-600 text-xl" />
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.2s' }}>
                        <div className="flex flex-col h-full">
                            <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                                <FaUsers className="text-white text-4xl" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Total Students
                            </h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <p className="text-4xl font-bold text-cyan-600">
                                    {totalStudents.toLocaleString()}
                                </p>
                                <span className="trend-badge text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    +15%
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-auto">Across all departments</p>
                        </div>
                    </div>
                    <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.3s' }}>
                        <div className="flex flex-col h-full">
                            <div className="bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                                <FaStethoscope className="text-white text-4xl" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Total Teachers
                            </h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <p className="text-4xl font-bold text-emerald-600">
                                    {totalTeachers}
                                </p>
                                <span className="trend-badge text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    +10%
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-auto">All departments</p>
                        </div>
                    </div>
                    <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.4s' }}>
                        <div className="flex flex-col h-full">
                            <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                                <FaCheckCircle className="text-white text-4xl" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Active Departments
                            </h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <p className="text-4xl font-bold text-amber-600">
                                    {activeDepartments}
                                </p>
                                <span className="trend-badge text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    +2%
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-auto">Currently operational</p>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="animate-fade-in-up opacity-0 bg-white rounded-2xl shadow-lg p-8 border border-gray-100" style={{ animationDelay: '0.6s' }}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search departments by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex gap-2">
                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                                <option value="">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Departments Table */}
                <div className="animate-fade-in-up opacity-0 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" style={{ animationDelay: '0.8s' }}>
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-800">Department Directory</h3>
                            <button
                                onClick={() => navigate('/admin/manage-department/add-department')}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                            >
                                <FaPlus />
                                Add New Department
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department Details</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teachers</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Colleges</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-20">
                                {filteredDepartments.map((dept) => (
                                    <tr key={dept.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className={`p-2 rounded-lg mr-3 ${dept.color}`}>
                                                    {React.createElement(getDepartmentIcon(dept.icon), { className: "text-white text-lg" })}
                                                </div>

                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{dept.name}</div>
                                                    <div className="text-sm text-gray-500">ID: {dept.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{getStudentsByDepartmentIdAcrossColleges(dept.id).length.toLocaleString()}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{getTeachersByDepartmentIdAcrossColleges(dept.id).length}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{getCollegesCountByDepartmentId(dept.id)}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${dept.status === 'Active'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                                }`}>
                                                {dept.status === 'Active' ? <FaCheckCircle className="mr-1" /> : <FaTimesCircle className="mr-1" />}
                                                {dept.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => handleDepartmentView(dept.id)}
                                                    className="text-indigo-600 hover:text-indigo-900 p-1"
                                                    title="View Details"
                                                >
                                                    <FaEye />
                                                </button>
                                                <button
                                                    onClick={() => handleEditDepartment(dept.id)}
                                                    className="text-blue-600 hover:text-blue-900 p-1"
                                                    title="Edit Department"
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteDepartment(dept.id)}
                                                    className="text-red-600 hover:text-red-900 p-1"
                                                    title="Delete Department"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ManageDepartment;

