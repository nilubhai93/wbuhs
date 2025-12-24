import React from 'react';
import ParentLayout from '../../../components/ParentLayout/ParentLayout';
import { FaUser, FaIdCard, FaCalendarAlt, FaVenusMars, FaTint, FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeartbeat, FaAllergies, FaNotesMedical } from 'react-icons/fa';

const ViewChildProfile = () => {
  const childProfile = {
    personalInfo: {
      name: 'Rahul Sharma',
      rollNumber: '2023MBBS001',
      dateOfBirth: '2000-05-15',
      gender: 'Male',
      bloodGroup: 'O+',
      nationality: 'Indian'
    },
    academicInfo: {
      currentClass: 'MBBS 2nd Year',
      department: 'Anatomy',
      admissionYear: '2023',
      currentSemester: 'Semester 3',
      enrollmentNumber: 'EN2023001'
    },
    contactInfo: {
      email: 'rahul.sharma@student.wbuhs.edu.in',
      phone: '+91 9876543210',
      address: '123 Medical College Road, Kolkata, West Bengal - 700073'
    },
    medicalInfo: {
      allergies: 'Penicillin, Dust',
      chronicConditions: 'None',
      emergencyContact: {
        name: 'Mr. Sharma',
        relation: 'Father',
        phone: '+91 9876543211'
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <ParentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center">
          <FaUser className="mr-3 text-indigo-600 text-3xl" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Child Profile</h2>
            <p className="text-gray-600 mt-1">View your child's complete profile information.</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaIdCard className="text-blue-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">{childProfile.personalInfo.name}</div>
              <p className="text-sm text-gray-600 mt-1">Full Name</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">{childProfile.personalInfo.rollNumber}</div>
              <p className="text-sm text-gray-600 mt-1">Roll Number</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">{formatDate(childProfile.personalInfo.dateOfBirth)}</div>
              <p className="text-sm text-gray-600 mt-1">Date of Birth</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-lg font-bold text-orange-600">{childProfile.personalInfo.gender}</div>
              <p className="text-sm text-gray-600 mt-1">Gender</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-lg font-bold text-red-600">{childProfile.personalInfo.bloodGroup}</div>
              <p className="text-sm text-gray-600 mt-1">Blood Group</p>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <div className="text-lg font-bold text-indigo-600">{childProfile.personalInfo.nationality}</div>
              <p className="text-sm text-gray-600 mt-1">Nationality</p>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaUser className="text-green-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Academic Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">{childProfile.academicInfo.currentClass}</div>
              <p className="text-sm text-gray-600 mt-1">Current Class</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">{childProfile.academicInfo.department}</div>
              <p className="text-sm text-gray-600 mt-1">Department</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">{childProfile.academicInfo.admissionYear}</div>
              <p className="text-sm text-gray-600 mt-1">Admission Year</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-lg font-bold text-orange-600">{childProfile.academicInfo.currentSemester}</div>
              <p className="text-sm text-gray-600 mt-1">Current Semester</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-lg font-bold text-red-600">{childProfile.academicInfo.enrollmentNumber}</div>
              <p className="text-sm text-gray-600 mt-1">Enrollment Number</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaPhone className="text-indigo-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaEnvelope className="text-blue-500 mr-4" />
              <div>
                <p className="font-medium text-gray-800">{childProfile.contactInfo.email}</p>
                <p className="text-sm text-gray-600">Email Address</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaPhone className="text-green-500 mr-4" />
              <div>
                <p className="font-medium text-gray-800">{childProfile.contactInfo.phone}</p>
                <p className="text-sm text-gray-600">Phone Number</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaMapMarkerAlt className="text-red-500 mr-4" />
              <div>
                <p className="font-medium text-gray-800">{childProfile.contactInfo.address}</p>
                <p className="text-sm text-gray-600">Address</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaHeartbeat className="text-red-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Medical Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <FaAllergies className="text-yellow-500 mr-4" />
                <div>
                  <p className="font-medium text-gray-800">{childProfile.medicalInfo.allergies}</p>
                  <p className="text-sm text-gray-600">Allergies</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <FaNotesMedical className="text-blue-500 mr-4" />
                <div>
                  <p className="font-medium text-gray-800">{childProfile.medicalInfo.chronicConditions}</p>
                  <p className="text-sm text-gray-600">Chronic Conditions</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-gray-800 mb-3">Emergency Contact</h4>
              <div className="space-y-2">
                <p className="text-sm"><span className="font-medium">Name:</span> {childProfile.medicalInfo.emergencyContact.name}</p>
                <p className="text-sm"><span className="font-medium">Relation:</span> {childProfile.medicalInfo.emergencyContact.relation}</p>
                <p className="text-sm"><span className="font-medium">Phone:</span> {childProfile.medicalInfo.emergencyContact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParentLayout>
  );
};

export default ViewChildProfile;
