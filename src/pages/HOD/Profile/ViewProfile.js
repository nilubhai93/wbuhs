import React from 'react';
import { Link } from 'react-router-dom';
import HODLayout from '../../../components/HodLayout/HODLayout';
import {
  FaUserMd,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaBuilding,
  FaIdCard
} from 'react-icons/fa';

const ViewProfile = () => {
  const profileData = {
    name: 'Dr. Rajesh Kumar',
    employeeId: 'HOD-001',
    department: 'Medical Sciences Department',
    designation: 'Head of Department',
    email: 'rajesh.kumar@wbuhs.edu',
    phone: '+91 98765 43210',
    address: 'Medical College Building, Kolkata - 700073',
    dateOfBirth: '1975-05-15',
    dateOfJoining: '2005-08-01',
    qualification: 'MD, PhD in Internal Medicine',
    specialization: 'Internal Medicine',
    experience: '20 years',
    publications: 45,
    researchProjects: 12,
    awards: 8,
    emergencyContact: {
      name: 'Mrs. Priya Kumar',
      relation: 'Spouse',
      phone: '+91 98765 43211'
    }
  };

  return (
    <HODLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUserMd className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">My Profile</h2>
              <p className="text-gray-600 mt-1">View your personal and professional information</p>
            </div>
          </div>
          <Link
            to="/hod/profile/edit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
          >
            <FaEdit className="mr-2" />
            Edit Profile
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Photo and Basic Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserMd className="text-6xl text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{profileData.name}</h3>
                <p className="text-indigo-600 font-medium mb-1">{profileData.designation}</p>
                <p className="text-gray-600 text-sm">{profileData.department}</p>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FaAward className="text-yellow-500 mr-2" />
                    <span className="text-sm font-medium">Publications</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800">{profileData.publications}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FaBriefcase className="text-blue-500 mr-2" />
                    <span className="text-sm font-medium">Projects</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800">{profileData.researchProjects}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FaAward className="text-green-500 mr-2" />
                    <span className="text-sm font-medium">Awards</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800">{profileData.awards}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <FaIdCard className="text-blue-500 mr-2 text-xl" />
                <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-500">Full Name</label>
                  <p className="mt-1 text-lg font-semibold text-gray-800">{profileData.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Employee ID</label>
                  <p className="mt-1 text-lg font-semibold text-gray-800">{profileData.employeeId}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                  <p className="mt-1 text-lg font-semibold text-gray-800">
                    {new Date(profileData.dateOfBirth).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Date of Joining</label>
                  <p className="mt-1 text-lg font-semibold text-gray-800">
                    {new Date(profileData.dateOfJoining).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <FaPhone className="text-green-500 mr-2 text-xl" />
                <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-500">Email Address</label>
                  <div className="flex items-center mt-1">
                    <FaEnvelope className="text-gray-400 mr-2" />
                    <p className="text-lg font-semibold text-gray-800">{profileData.email}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone Number</label>
                  <div className="flex items-center mt-1">
                    <FaPhone className="text-gray-400 mr-2" />
                    <p className="text-lg font-semibold text-gray-800">{profileData.phone}</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-500">Address</label>
                  <div className="flex items-start mt-1">
                    <FaMapMarkerAlt className="text-gray-400 mr-2 mt-1" />
                    <p className="text-lg font-semibold text-gray-800">{profileData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <FaGraduationCap className="text-purple-500 mr-2 text-xl" />
                <h3 className="text-xl font-bold text-gray-800">Professional Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-500">Qualification</label>
                  <p className="mt-1 text-lg font-semibold text-gray-800">{profileData.qualification}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Specialization</label>
                  <p className="mt-1 text-lg font-semibold text-gray-800">{profileData.specialization}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Experience</label>
                  <p className="mt-1 text-lg font-semibold text-gray-800">{profileData.experience}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Department</label>
                  <div className="flex items-center mt-1">
                    <FaBuilding className="text-gray-400 mr-2" />
                    <p className="text-lg font-semibold text-gray-800">{profileData.department}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <FaPhone className="text-red-500 mr-2 text-xl" />
                <h3 className="text-xl font-bold text-gray-800">Emergency Contact</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-500">Contact Name</label>
                  <p className="mt-1 text-lg font-semibold text-gray-800">{profileData.emergencyContact.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Relation</label>
                  <p className="mt-1 text-lg font-semibold text-gray-800">{profileData.emergencyContact.relation}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone Number</label>
                  <div className="flex items-center mt-1">
                    <FaPhone className="text-gray-400 mr-2" />
                    <p className="text-lg font-semibold text-gray-800">{profileData.emergencyContact.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HODLayout>
  );
};

export default ViewProfile;
