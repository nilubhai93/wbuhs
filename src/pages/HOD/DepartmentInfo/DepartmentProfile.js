import React from 'react';
import HODLayout from '../../../components/HodLayout/HODLayout';
import {
  FaBuilding,
  FaUserMd,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaAward,
  FaUsers,
  FaBook,
  FaMicroscope,
  FaStethoscope,
  FaHeartbeat,
  FaBrain,
  FaEdit
} from 'react-icons/fa';

const DepartmentProfile = () => {
  // Department information
  const departmentInfo = {
    name: 'Medical Sciences Department',
    code: 'MED-001',
    hod: 'Dr. Rajesh Kumar',
    established: '2005',
    location: 'Medical College Building, Kolkata',
    phone: '+91 33 1234 5678',
    email: 'medical@wbuhs.edu',
    website: 'www.wbuhs.edu/medical',
    description: 'The Department of Medical Sciences is committed to excellence in medical education, research, and healthcare delivery. We offer comprehensive MBBS program with specialized training in various medical disciplines.'
  };

  // Department statistics
  const stats = [
    {
      title: 'Total Faculty',
      value: '18',
      icon: <FaUserMd className="text-3xl" />,
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500'
    },
    {
      title: 'Total Students',
      value: '245',
      icon: <FaGraduationCap className="text-3xl" />,
      bgColor: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      title: 'Research Papers',
      value: '156',
      icon: <FaBook className="text-3xl" />,
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      title: 'Years of Excellence',
      value: '19',
      icon: <FaAward className="text-3xl" />,
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-600'
    }
  ];

  // Department courses
  const courses = [
    {
      name: 'Anatomy',
      code: 'MED-101',
      credits: 6,
      duration: '2 semesters',
      students: 65,
      icon: <FaBrain />,
      color: 'bg-red-100 text-red-600'
    },
    {
      name: 'Physiology',
      code: 'MED-102',
      credits: 6,
      duration: '2 semesters',
      students: 58,
      icon: <FaHeartbeat />,
      color: 'bg-pink-100 text-pink-600'
    },
    {
      name: 'Biochemistry',
      code: 'MED-103',
      credits: 4,
      duration: '2 semesters',
      students: 52,
      icon: <FaMicroscope />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Pathology',
      code: 'MED-104',
      credits: 5,
      duration: '2 semesters',
      students: 48,
      icon: <FaStethoscope />,
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  // Key faculty members
  const keyFaculty = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Head of Department',
      qualification: 'MD, PhD',
      specialization: 'Internal Medicine',
      experience: '20 years'
    },
    {
      name: 'Dr. Priya Sharma',
      designation: 'Associate Professor',
      qualification: 'MD, MSc',
      specialization: 'Anatomy',
      experience: '15 years'
    },
    {
      name: 'Dr. Amit Singh',
      designation: 'Assistant Professor',
      qualification: 'MD, PhD',
      specialization: 'Physiology',
      experience: '12 years'
    }
  ];

  // Facilities
  const facilities = [
    'Advanced Anatomy Lab',
    'Physiology Research Lab',
    'Biochemistry Lab',
    'Pathology Lab',
    'Medical Library',
    'Research Center',
    'Student Hostel',
    'Cafeteria'
  ];

  return (
    <HODLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaBuilding className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Department Profile</h2>
              <p className="text-gray-600 mt-1">Comprehensive overview of the Medical Sciences Department</p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <FaEdit className="mr-2" />
            Edit Profile
          </button>
        </div>

        {/* Department Overview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaBuilding className="text-indigo-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Department Overview</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Department Name</label>
                <p className="text-lg font-semibold text-gray-800">{departmentInfo.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Department Code</label>
                <p className="text-lg font-semibold text-gray-800">{departmentInfo.code}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Head of Department</label>
                <p className="text-lg font-semibold text-gray-800">{departmentInfo.hod}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Established</label>
                <p className="text-lg font-semibold text-gray-800">{departmentInfo.established}</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Location</label>
                  <p className="text-sm text-gray-800">{departmentInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-gray-400 mr-2" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <p className="text-sm text-gray-800">{departmentInfo.phone}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-gray-400 mr-2" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-sm text-gray-800">{departmentInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-gray-400 mr-2" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Website</label>
                  <p className="text-sm text-gray-800">{departmentInfo.website}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-500">Description</label>
            <p className="text-gray-700 mt-2">{departmentInfo.description}</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} bg-opacity-10 p-4 rounded-lg`}>
                  <div className={stat.textColor}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Department Courses */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaBook className="text-green-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Department Courses</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`${course.color} p-2 rounded-lg mr-3`}>
                      {course.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{course.name}</h4>
                      <p className="text-sm text-gray-500">{course.code}</p>
                    </div>
                  </div>
                  <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs font-medium">
                    {course.students} students
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Credits:</span> {course.credits}
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> {course.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Faculty */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaUsers className="text-blue-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Key Faculty Members</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyFaculty.map((faculty, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 h-12 w-12">
                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <FaUserMd className="text-indigo-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{faculty.name}</h4>
                    <p className="text-sm text-gray-600">{faculty.designation}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Qualification:</span>
                    <span className="font-medium">{faculty.qualification}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Specialization:</span>
                    <span className="font-medium">{faculty.specialization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-medium">{faculty.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaAward className="text-purple-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Department Facilities</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaBuilding className="text-indigo-500 mr-3" />
                <span className="text-sm font-medium text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Department Timeline */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-orange-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Department Timeline</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-indigo-500 rounded-full mt-1"></div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-800">2005 - Department Established</p>
                <p className="text-sm text-gray-600">Medical Sciences Department founded with initial faculty of 5 members</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-1"></div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-800">2010 - Research Center Inaugurated</p>
                <p className="text-sm text-gray-600">State-of-the-art research facilities added to support medical research</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-800">2015 - International Collaboration</p>
                <p className="text-sm text-gray-600">Partnership established with international medical institutions</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-800">2020 - Digital Transformation</p>
                <p className="text-sm text-gray-600">Complete digital overhaul of teaching and administrative systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HODLayout>
  );
};

export default DepartmentProfile;
