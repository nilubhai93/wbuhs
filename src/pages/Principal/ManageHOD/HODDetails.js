import React from 'react';
import PrincipalLayout from '../../../components/PrincipalLayout/PrincipalLayout';
import { FaUserTie, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaIdCard, FaBriefcase } from 'react-icons/fa';

const HODDetails = () => {
  // Sample HOD data
  const hod = {
    name: 'Dr. Rajesh Kumar',
    employeeId: 'HOD001',
    department: 'Anatomy',
    email: 'rajesh.kumar@wbuhs.edu',
    phone: '+91 9876543210',
    address: '456 College Street, Kolkata, West Bengal - 700073',
    dateOfBirth: 'March 20, 1975',
    gender: 'Male',
    qualification: 'MD Anatomy, PhD',
    specialization: 'Human Anatomy & Embryology',
    experience: '15 years',
    joiningDate: 'January 15, 2009',
    status: 'Active',
    publications: 45,
    researchProjects: 8
  };

  return (
    <PrincipalLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUserTie className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">HOD Details</h2>
              <p className="text-gray-600 mt-1">Detailed information for {hod.name}</p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
            <FaBriefcase className="mr-2" />
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaUserTie className="text-4xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{hod.name}</h3>
              <p className="text-gray-600">HOD - {hod.department}</p>
              <p className="text-sm text-gray-500">{hod.employeeId}</p>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-2 ${
                hod.status === 'Active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {hod.status}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3 text-indigo-500" />
                <span className="text-sm">{hod.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-3 text-green-500" />
                <span className="text-sm">{hod.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-3 text-red-500" />
                <span className="text-sm">{hod.address}</span>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FaGraduationCap className="mr-2 text-blue-500" />
              Professional Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Qualification</label>
                <p className="text-gray-800">{hod.qualification}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Specialization</label>
                <p className="text-gray-800">{hod.specialization}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Department</label>
                <p className="text-gray-800">{hod.department}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Employee ID</label>
                <p className="text-gray-800">{hod.employeeId}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Experience</label>
                <p className="text-gray-800">{hod.experience}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Joining Date</label>
                <p className="text-gray-800">{hod.joiningDate}</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FaIdCard className="mr-2 text-purple-500" />
              Personal Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                <p className="text-gray-800">{hod.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Gender</label>
                <p className="text-gray-800">{hod.gender}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Publications</label>
                <p className="text-gray-800">{hod.publications} research papers</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Research Projects</label>
                <p className="text-gray-800">{hod.researchProjects} ongoing projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Department Statistics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <FaCalendarAlt className="mr-2 text-orange-500" />
            Department Statistics ({hod.department})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">145</div>
              <p className="text-sm text-gray-600 mt-1">Total Students</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">12</div>
              <p className="text-sm text-gray-600 mt-1">Faculty Members</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <p className="text-sm text-gray-600 mt-1">Research Projects</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">92%</div>
              <p className="text-sm text-gray-600 mt-1">Department Average</p>
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-800">Published research paper in International Journal of Anatomy</span>
            </div>
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-800">Received Best HOD Award 2023</span>
            </div>
            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-800">Led successful research grant application worth ₹50 lakhs</span>
            </div>
          </div>
        </div>
      </div>
    </PrincipalLayout>
  );
};

export default HODDetails;
