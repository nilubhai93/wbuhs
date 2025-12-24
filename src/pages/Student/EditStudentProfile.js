import React, { useState } from 'react';
import StudentLayout from '../../components/studentLayout/StudentLayout';
import {
  FaUser,
  FaSave,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaHeartbeat,
  FaIdCard,
  FaCamera,
  FaArrowLeft
} from 'react-icons/fa';

const EditStudentProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Dr. Sarah Johnson',
    studentId: 'MED2024001',
    year: '3RD YEAR MBBS',
    email: 'sarah.johnson@wbuhs.edu',
    phone: '+91 98765 43210',
    address: 'Medical College Hostel, Kolkata - 700073',
    dateOfBirth: '1998-05-15',
    dateOfAdmission: '2022-08-01',
    gpa: '8.5',
    attendance: '92%',
    emergencyContact: {
      name: 'Mrs. Emily Johnson',
      relation: 'Mother',
      phone: '+91 98765 43211'
    }
  });

  const handleSave = () => {
    // Here you would typically save the data to backend
    alert('Profile updated successfully!');
    // Navigate back to profile view
    window.history.back();
  };

  const handleCancel = () => {
    // Navigate back to profile view without saving
    window.history.back();
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEmergencyContactChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [field]: value
      }
    }));
  };

  return (
    <StudentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUser className="mr-3 text-purple-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Edit Profile</h2>
              <p className="text-gray-600 mt-1">Update your personal and academic information</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <FaSave className="mr-2" />
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <FaTimes className="mr-2" />
              Cancel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Photo and Basic Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUser className="text-6xl text-purple-600" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
                    <FaCamera className="text-sm" />
                  </button>
                </div>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full text-center text-xl font-bold text-gray-800 mb-2 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-purple-600 font-medium mb-1">{profileData.studentId}</p>
                <p className="text-gray-600 text-sm">{profileData.year}</p>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-blue-500 mr-2" />
                    <span className="text-sm font-medium">GPA</span>
                  </div>
                  <input
                    type="text"
                    value={profileData.gpa}
                    onChange={(e) => handleInputChange('gpa', e.target.value)}
                    className="w-16 text-lg font-bold text-gray-800 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-green-500 mr-2" />
                    <span className="text-sm font-medium">Attendance</span>
                  </div>
                  <input
                    type="text"
                    value={profileData.attendance}
                    onChange={(e) => handleInputChange('attendance', e.target.value)}
                    className="w-16 text-lg font-bold text-gray-800 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
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
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Student ID</label>
                  <input
                    type="text"
                    value={profileData.studentId}
                    onChange={(e) => handleInputChange('studentId', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                  <input
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Date of Admission</label>
                  <input
                    type="date"
                    value={profileData.dateOfAdmission}
                    onChange={(e) => handleInputChange('dateOfAdmission', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Current Year</label>
                  <input
                    type="text"
                    value={profileData.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">GPA</label>
                  <input
                    type="text"
                    value={profileData.gpa}
                    onChange={(e) => handleInputChange('gpa', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
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
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone Number</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-500">Address</label>
                  <textarea
                    value={profileData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows={3}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <FaHeartbeat className="text-red-500 mr-2 text-xl" />
                <h3 className="text-xl font-bold text-gray-800">Emergency Contact</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-500">Contact Name</label>
                  <input
                    type="text"
                    value={profileData.emergencyContact.name}
                    onChange={(e) => handleEmergencyContactChange('name', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Relation</label>
                  <input
                    type="text"
                    value={profileData.emergencyContact.relation}
                    onChange={(e) => handleEmergencyContactChange('relation', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone Number</label>
                  <input
                    type="tel"
                    value={profileData.emergencyContact.phone}
                    onChange={(e) => handleEmergencyContactChange('phone', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default EditStudentProfile;
