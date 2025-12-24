import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import { FaSearch, FaPlus, FaEye, FaEdit, FaTrash, FaMapMarkerAlt, FaUser, FaUsers, FaCheckCircle, FaTimesCircle, FaUserTie, FaClock } from 'react-icons/fa';
import { colleges, getStudentsByCollegeId, getTeachersByCollegeId } from '../../data/data';

const CollegeList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate active counts
  const activeColleges = colleges.filter(c => c.status === 'Active').length;
  const totalStudents = colleges.reduce((sum, college) => sum + getStudentsByCollegeId(college.id).length, 0);
  const totalTeachers = colleges.reduce((sum, college) => sum + getTeachersByCollegeId(college.id).length, 0);

  // Filter colleges based on search term
  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.principal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedColleges = filteredColleges.slice(startIndex, startIndex + itemsPerPage);

  const handleViewDetails = (collegeId) => {
    navigate('/admin/manage-college/college-details', { state: { collegeId } });
  };

  const handleEditCollege = (collegeId) => {
    console.log('Edit college:', collegeId);
  };

  const handleDeleteCollege = (collegeId) => {
    console.log('Delete college:', collegeId);
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
                <FaUserTie className="text-white text-4xl" />
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  Manage Colleges
                </h2>
                <p className="text-gray-600 text-lg font-medium">View and manage all medical colleges in the system</p>
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
                  +12%
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-auto">Across all colleges</p>
            </div>
          </div>
          <div className="stat-card animate-fade-in-up opacity-0 bg-white rounded-2xl p-6 shadow-md border border-gray-100" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 p-3 rounded-xl w-fit mb-4 shadow-lg">
                <FaUser className="text-white text-4xl" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Total Teachers
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-4xl font-bold text-emerald-600">
                  {totalTeachers}
                </p>
                <span className="trend-badge text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  +8%
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
                Active Colleges
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-4xl font-bold text-amber-600">
                  {activeColleges}
                </p>
                <span className="trend-badge text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  +0%
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
                placeholder="Search colleges by name, location, or principal..."
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
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option value="">All Locations</option>
                <option value="kolkata">Kolkata</option>
                <option value="district">District</option>
              </select>
            </div>
          </div>
        </div>

        {/* Colleges Table */}
        <div className="animate-fade-in-up opacity-0 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" style={{ animationDelay: '0.8s' }}>
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">College Directory</h3>
              <button
                onClick={() => navigate('/admin/manage-college/add-college')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <FaPlus />
                Add New College
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teachers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedColleges.map((college) => (
                  <tr key={college.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{college.name}</div>
                        <div className="text-sm text-gray-500">Est. {college.established} • {college.accreditation}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{college.city}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{college.principal}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{getStudentsByCollegeId(college.id).length.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{getTeachersByCollegeId(college.id).length}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${college.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                        }`}>
                        {college.status === 'Active' ? <FaCheckCircle className="mr-1" /> : <FaTimesCircle className="mr-1" />}
                        {college.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewDetails(college.id)}
                          className="text-indigo-600 hover:text-indigo-900 p-1"
                          title="View Details"
                        >
                          <FaEye />
                        </button>
                        <button
                          onClick={() => handleEditCollege(college.id)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="Edit College"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteCollege(college.id)}
                          className="text-red-600 hover:text-red-900 p-1"
                          title="Delete College"
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                    <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredColleges.length)}</span> of{' '}
                    <span className="font-medium">{filteredColleges.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${page === currentPage
                          ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                          }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default CollegeList;
