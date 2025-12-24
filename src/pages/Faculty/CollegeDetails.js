import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCalendarAlt,
  FaAward,
  FaUsers,
  FaUserTie,
  FaGraduationCap,
  FaBuilding,
  FaEdit,
  FaDownload,
  FaPrint,
  FaArrowLeft,
  FaStethoscope,
  FaMicroscope,
  FaHeartbeat,
  FaEye,
  FaBone,
  FaTooth,
  FaBrain,
  FaCheckCircle,
  FaStar,
  FaChartBar
} from 'react-icons/fa';
import { getCollegeById, getHODsByCollegeId, getTeachersByCollegeId, getStudentsByCollegeId, getDepartmentById } from '../../data/data';
import FacultyLayout from '../../components/FacultyLayout/FacultyLayout';

const CollegeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const collegeId = parseInt(id) || 1;

  const [activeTab, setActiveTab] = useState('overview');

  // Get college data
  const collegeData = getCollegeById(collegeId);
  const collegeHODs = getHODsByCollegeId(collegeId);
  const collegeTeachers = getTeachersByCollegeId(collegeId);
  const collegeStudents = getStudentsByCollegeId(collegeId);

  // Group students and teachers by department
  const departmentStats = {};
  collegeHODs.forEach(hod => {
    const dept = getDepartmentById(hod.departmentId);
    const deptTeachers = collegeTeachers.filter(t => t.departmentId === hod.departmentId);
    const deptStudents = collegeStudents.filter(s => s.departmentId === hod.departmentId);

    departmentStats[hod.departmentId] = {
      name: dept?.name || hod.departmentName,
      head: hod.name,
      teachers: deptTeachers.length,
      students: deptStudents.length
    };
  });

  const departments = Object.values(departmentStats);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaBuilding },
    { id: 'departments', label: 'Departments', icon: FaStethoscope },
    { id: 'principal', label: 'Principal', icon: FaUserTie },
    { id: 'hods', label: 'HODs', icon: FaUserTie },
    { id: 'teacher', label: 'Teachers', icon: FaUserTie },
    { id: 'students', label: 'Students', icon: FaUsers },
    { id: 'facilities', label: 'Facilities', icon: FaBuilding },
    { id: 'achievements', label: 'Achievements', icon: FaAward }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Statistics Cards - Modern Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Students Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaUsers className="text-white text-2xl" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-800">{collegeStudents.length}</div>
              <div className="text-sm text-gray-500 font-medium">Students</div>
            </div>
          </div>
        </div>

        {/* Teachers Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaUserTie className="text-white text-2xl" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-800">{collegeTeachers.length}</div>
              <div className="text-sm text-gray-500 font-medium">Teachers</div>
            </div>
          </div>
        </div>

        {/* Departments Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaStethoscope className="text-white text-2xl" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-800">{collegeHODs.length}</div>
              <div className="text-sm text-gray-500 font-medium">Departments</div>
            </div>
          </div>
        </div>

        {/* HODs Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaAward className="text-white text-2xl" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-800">{collegeHODs.length}</div>
              <div className="text-sm text-gray-500 font-medium">HODs</div>
            </div>
          </div>
        </div>
      </div>

      {/* About the College */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
          About the College
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">{collegeData.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Basic Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaBuilding className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">College Type</p>
                  <p className="font-semibold text-gray-800">{collegeData.type}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCalendarAlt className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Established</p>
                  <p className="font-semibold text-gray-800">{collegeData.established}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaAward className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Accreditation</p>
                  <p className="font-semibold text-gray-800">{collegeData.accreditation}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="font-semibold text-gray-800">{collegeData.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Leadership Card */}
        <div className="space-y-6">
          {/* Leadership */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-6 shadow-lg text-white">
            <h3 className="text-xl font-bold mb-4">Leadership</h3>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <FaUserTie className="text-white" />
              </div>
              <div>
                <div className="text-sm text-white/70">Principal</div>
                <div className="font-semibold">{collegeData.principal}</div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a href={`tel:${collegeData.phone}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <FaPhone className="text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-700 text-sm">{collegeData.phone}</span>
              </a>

              <a href={`mailto:${collegeData.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <FaEnvelope className="text-green-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-700 text-sm break-all">{collegeData.email}</span>
              </a>

              {collegeData.website && (
                <a href={collegeData.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                    <FaGlobe className="text-purple-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-700 text-sm">{collegeData.website}</span>
                </a>
              )}
            </div>
          </div>

          {/* Accreditation Badge */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <FaAward className="text-amber-500 text-2xl" />
              <h3 className="text-xl font-bold text-gray-800">Accreditation</h3>
            </div>
            <p className="text-gray-700 font-medium">{collegeData.accreditation}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDepartments = () => (
    <div className="space-y-6">
      {/* Departments Grid */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
          Departments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaStethoscope className="text-white text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{dept.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">Head: {dept.head}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <FaUserTie className="text-gray-500 text-xs" />
                  <span className="text-sm text-gray-600 font-medium">{dept.teachers} Teachers</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-gray-500 text-xs" />
                  <span className="text-sm text-gray-600 font-medium">{dept.students} Students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions for Departments */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Department Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <button
            onClick={() => navigate('/admin/manage-college/manage-hods', { state: { collegeId } })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <FaUserTie />
            Manage HODs
          </button>
          <button
            onClick={() => navigate('/admin/manage-college/manage-teachers', { state: { collegeId } })}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <FaUsers />
            Manage Teachers
          </button>
          <button
            onClick={() => navigate('/admin/manage-college/manage-students', { state: { collegeId } })}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <FaGraduationCap />
            Manage Students
          </button>
          <button
            onClick={() => navigate('/admin/manage-college/assign-department', { state: { collegeId } })}
            className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <FaStethoscope />
            Assign Departments
          </button>
          <button
            onClick={() => navigate('/admin/manage-college/manage-principals', { state: { collegeId } })}
            className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <FaUserTie />
            Manage Principal
          </button>
        </div>
      </div>
    </div>
  );

  const renderTeacher = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Teacher Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
            <FaUserTie className="text-indigo-600 text-4xl mx-auto mb-3" />
            <p className="text-3xl font-bold text-indigo-600">{collegeTeachers.length}</p>
            <p className="text-sm text-gray-600 mt-2">Total Teachers</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <FaStethoscope className="text-green-600 text-4xl mx-auto mb-3" />
            <p className="text-3xl font-bold text-green-600">{departments.length}</p>
            <p className="text-sm text-gray-600 mt-2">Departments</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <FaUsers className="text-blue-600 text-4xl mx-auto mb-3" />
            <p className="text-3xl font-bold text-blue-600">{collegeStudents.length}</p>
            <p className="text-sm text-gray-600 mt-2">Students</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Teachers List</h3>
          <button
            onClick={() => navigate('/admin/manage-college/manage-teachers', { state: { collegeId } })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            <FaEdit className="text-lg" />
            <span className="font-medium">Manage Teachers</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-slate-50 to-slate-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Department</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Designation</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Experience</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {collegeTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{teacher.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{teacher.departmentName}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{teacher.designation}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{teacher.experience}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{teacher.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderHODs = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-800 mb-4">HODs Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
            <FaUserTie className="text-indigo-600 text-4xl mx-auto mb-3" />
            <p className="text-3xl font-bold text-indigo-600">{collegeHODs.length}</p>
            <p className="text-sm text-gray-600 mt-2">Total HODs</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <FaStethoscope className="text-green-600 text-4xl mx-auto mb-3" />
            <p className="text-3xl font-bold text-green-600">{departments.length}</p>
            <p className="text-sm text-gray-600 mt-2">Departments</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <FaUsers className="text-blue-600 text-4xl mx-auto mb-3" />
            <p className="text-3xl font-bold text-blue-600">{collegeStudents.length}</p>
            <p className="text-sm text-gray-600 mt-2">Students</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">HODs List</h3>
          <button
            onClick={() => navigate('/admin/manage-college/manage-hods', { state: { collegeId } })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            <FaEdit className="text-lg" />
            <span className="font-medium">Manage HODs</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-slate-50 to-slate-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Department</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Qualification</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Experience</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {collegeHODs.map((hod) => (
                <tr key={hod.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{hod.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{hod.departmentName}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{hod.qualification}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{hod.experience}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{hod.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Students Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
            <FaUsers className="text-indigo-600 text-4xl mx-auto mb-3" />
            <p className="text-3xl font-bold text-indigo-600">{collegeStudents.length}</p>
            <p className="text-sm text-gray-600 mt-2">Total Students</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <FaStethoscope className="text-green-600 text-4xl mx-auto mb-3" />
            <p className="text-3xl font-bold text-green-600">{departments.length}</p>
            <p className="text-sm text-gray-600 mt-2">Departments</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <FaUserTie className="text-blue-600 text-4xl mx-auto mb-3" />
            <p className="text-3xl font-bold text-blue-600">{collegeTeachers.length}</p>
            <p className="text-sm text-gray-600 mt-2">Teachers</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Students List</h3>
          <button
            onClick={() => navigate('/admin/manage-college/manage-students', { state: { collegeId } })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            <FaEdit className="text-lg" />
            <span className="font-medium">Manage Students</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-slate-50 to-slate-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Roll No</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Department</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Year</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {collegeStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{student.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{student.rollNo}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{student.departmentName}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{student.year}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{student.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderFacilities = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
          Facilities & Infrastructure
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {collegeData.facilities.map((facility, index) => (
            <div key={index} className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 p-4 rounded-xl border border-slate-200 transition-all duration-300">
              <FaCheckCircle className="text-green-500 flex-shrink-0 text-xl" />
              <span className="text-gray-700 font-medium">{facility}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
          Achievements & Recognition
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collegeData.achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <FaStar className="text-amber-500 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
          Performance Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaChartBar className="text-white text-2xl" />
            </div>
            <div className="text-white/70 text-sm mb-2">Pass Rate</div>
            <div className="text-4xl font-bold text-white mb-2">{collegeData.statistics.passRate}%</div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden mt-3">
              <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: `${collegeData.statistics.passRate}%` }}></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaUsers className="text-white text-2xl" />
            </div>
            <div className="text-white/70 text-sm mb-2">Placement Rate</div>
            <div className="text-4xl font-bold text-white mb-2">{collegeData.statistics.placementRate}%</div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden mt-3">
              <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" style={{ width: `${collegeData.statistics.placementRate}%` }}></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaAward className="text-white text-2xl" />
            </div>
            <div className="text-white/70 text-sm mb-2">Research Publications</div>
            <div className="text-4xl font-bold text-white mb-2">{collegeData.statistics.researchPublications}</div>
            <div className="text-sm text-white/60 mt-2">Annual Count</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaGlobe className="text-white text-2xl" />
            </div>
            <div className="text-white/70 text-sm mb-2">International Collaborations</div>
            <div className="text-4xl font-bold text-white mb-2">{collegeData.statistics.internationalCollaborations}</div>
            <div className="text-sm text-white/60 mt-2">Active Partnerships</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrincipal = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
          Principal Information
        </h3>
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <FaUserTie className="text-white text-3xl" />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-semibold text-gray-900">{collegeData.principal}</h4>
            <p className="text-lg text-gray-600 font-medium">Principal</p>
            <p className="text-sm text-gray-500">{collegeData.principalContact}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <FaPhone className="text-blue-600" />
            </div>
            Contact Details
          </h4>
          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Phone</p>
              <p className="font-medium text-gray-800">{collegeData.principalContact}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Email</p>
              <p className="font-medium text-gray-800 text-sm break-all">{collegeData.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <FaBuilding className="text-green-600" />
            </div>
            College Leadership
          </h4>
          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Institution</p>
              <p className="font-medium text-gray-800">{collegeData.name}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Accreditation</p>
              <p className="font-medium text-gray-800">{collegeData.accreditation}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <FaUsers className="text-purple-600" />
            </div>
            Key Statistics
          </h4>
          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Total Students</p>
              <p className="font-medium text-gray-800">{collegeStudents.length.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Faculty Members</p>
              <p className="font-medium text-gray-800">{collegeTeachers.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 shadow-lg border border-slate-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Principal's Message</h4>
        <div className="bg-white p-6 rounded-xl">
          <p className="text-gray-700 leading-relaxed">
            As the Principal of {collegeData.name}, I am committed to providing quality education and fostering an environment
            that nurtures academic excellence, research, and holistic development. Our institution strives to produce competent
            medical professionals who serve society with dedication and compassion.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Principal Management</h4>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/admin/manage-college/manage-principals', { state: { collegeId } })}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <FaUserTie />
            Manage Principal
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <FaArrowLeft />
            Back to Colleges
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <FacultyLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate(-1)}
            className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <FaArrowLeft />
          </button>

          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{collegeData.name}</h1>
            <div className="flex items-center gap-3">
              <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${collegeData.status === 'Active'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
                }`}>
                {collegeData.status}
              </span>
              <span className="text-sm text-gray-600">• Established {collegeData.established}</span>
            </div>
          </div>

        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gradient-to-r from-slate-50 to-slate-100">
            <nav className="flex space-x-8 px-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 whitespace-nowrap transition-all ${activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <tab.icon className="text-sm" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'departments' && renderDepartments()}
            {activeTab === 'teacher' && renderTeacher()}
            {activeTab === 'hods' && renderHODs()}
            {activeTab === 'students' && renderStudents()}
            {activeTab === 'facilities' && renderFacilities()}
            {activeTab === 'achievements' && renderAchievements()}
            {activeTab === 'principal' && renderPrincipal()}
          </div>
        </div>
      </div>
    </FacultyLayout>
  );
};

export default CollegeDetails;