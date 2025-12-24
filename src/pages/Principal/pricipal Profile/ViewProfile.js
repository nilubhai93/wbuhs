import React from 'react';
import { Link } from 'react-router-dom';
import PrincipalLayout from '../../../components/PrincipalLayout/PrincipalLayout';
import {
  FaUserMd,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaClock,
  FaEdit,
  FaIdCard,
  FaUniversity,
  FaStethoscope,
  FaBook,
  FaUsers,
  FaBuilding
} from 'react-icons/fa';

const ViewProfile = () => {
  // Mock principal profile data
  const principalProfile = {
    id: 'PRN001',
    name: 'Dr. Rajesh Kumar Sharma',
    title: 'Principal',
    department: 'Administration',
    specialization: 'Medical Education & Administration',
    email: 'principal@wbuhealth.edu',
    phone: '+91 98765 43210',
    mobile: '+91 98765 43211',
    address: 'Medical College Campus, Kolkata, West Bengal - 700073',
    dateOfBirth: '1965-05-20',
    joiningDate: '2005-01-15',
    employeeId: 'EMP2005001',
    qualification: 'MD in Medicine, MBA in Healthcare Management, PhD in Medical Education',
    experience: '19 years',
    avatar: 'RKS',

    // Professional details
    departments: [
      { name: 'Anatomy & Physiology', hod: 'Dr. Sarah Johnson', students: 120 },
      { name: 'Biochemistry', hod: 'Dr. Amit Patel', students: 95 },
      { name: 'Pathology', hod: 'Dr. Priya Singh', students: 110 },
      { name: 'Pharmacology', hod: 'Dr. Ramesh Gupta', students: 85 }
    ],

    // Achievements
    achievements: [
      'Excellence in Medical Education Award 2022',
      'Best Principal Award by Medical Council',
      'Published 25 research papers on medical education',
      'Led college to NAAC A++ accreditation',
      'Established 5 new research centers'
    ],

    // Statistics
    stats: {
      totalStudents: 1250,
      totalTeachers: 85,
      totalDepartments: 12,
      totalHods: 12
    },

    // Additional info
    bloodGroup: 'O+',
    emergencyContact: '+91 98765 43212',
    languages: ['English', 'Hindi', 'Bengali'],
    specializations: ['Medical Education', 'Healthcare Administration', 'Quality Assurance']
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const calculateExperience = (joiningDate) => {
    const today = new Date();
    const joining = new Date(joiningDate);
    const years = today.getFullYear() - joining.getFullYear();
    const months = today.getMonth() - joining.getMonth();
    if (months < 0) {
      return `${years - 1} years ${months + 12} months`;
    }
    return `${years} years ${months} months`;
  };

  return (
    <PrincipalLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUserMd className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">My Profile</h2>
              <p className="text-gray-600 mt-1">View and manage your profile information</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <FaClock className="inline mr-2" />
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">
                {principalProfile.avatar}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{principalProfile.name}</h3>
                <p className="text-lg text-indigo-600 font-medium">{principalProfile.title}</p>
                <p className="text-gray-600">{principalProfile.department} Department</p>
                <p className="text-sm text-gray-500">Employee ID: {principalProfile.employeeId}</p>
              </div>
            </div>
            <Link to="/principal/profile/edit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
              <FaEdit className="mr-2" />
              Edit Profile
            </Link>
          </div>
        </div>

        
        {/* Personal Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <FaIdCard className="mr-2 text-indigo-600" />
              Personal Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <FaUserMd className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-24">Name:</span>
                <span className="text-gray-900">{principalProfile.name}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaCalendarAlt className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-24">Date of Birth:</span>
                <span className="text-gray-900">
                  {new Date(principalProfile.dateOfBirth).toLocaleDateString()} ({calculateAge(principalProfile.dateOfBirth)} years old)
                </span>
              </div>
              <div className="flex items-center text-sm">
                <FaEnvelope className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-24">Email:</span>
                <span className="text-gray-900">{principalProfile.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaPhone className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-24">Phone:</span>
                <span className="text-gray-900">{principalProfile.phone}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaPhone className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-24">Mobile:</span>
                <span className="text-gray-900">{principalProfile.mobile}</span>
              </div>
              <div className="flex items-start text-sm">
                <FaMapMarkerAlt className="text-gray-400 mr-3 w-5 mt-1" />
                <span className="text-gray-600 w-24">Address:</span>
                <span className="text-gray-900">{principalProfile.address}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <FaUniversity className="mr-2 text-indigo-600" />
              Professional Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <FaIdCard className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-32">Employee ID:</span>
                <span className="text-gray-900">{principalProfile.employeeId}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaBriefcase className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-32">Designation:</span>
                <span className="text-gray-900">{principalProfile.title}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaStethoscope className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-32">Department:</span>
                <span className="text-gray-900">{principalProfile.department}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaGraduationCap className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-32">Qualification:</span>
                <span className="text-gray-900">{principalProfile.qualification}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaCalendarAlt className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-32">Joining Date:</span>
                <span className="text-gray-900">
                  {new Date(principalProfile.joiningDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <FaClock className="text-gray-400 mr-3 w-5" />
                <span className="text-gray-600 w-32">Experience:</span>
                <span className="text-gray-900">{calculateExperience(principalProfile.joiningDate)}</span>
              </div>
            </div>
          </div>
        </div>



        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FaAward className="mr-2 text-indigo-600" />
            Achievements & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principalProfile.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                <FaAward className="text-yellow-500 mr-3" />
                <span className="text-sm text-gray-800">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {principalProfile.specializations.map((spec, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {principalProfile.languages.map((lang, index) => (
                <span key={index} className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PrincipalLayout>
  );
};

export default ViewProfile;
