import React from 'react';
import PrincipalLayout from '../../../components/PrincipalLayout/PrincipalLayout';
import { FaUniversity, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaCalendarAlt, FaUsers, FaBook, FaBuilding, FaAward } from 'react-icons/fa';

const CollegeProfile = () => {
  // Sample college data
  const college = {
    name: 'West Bengal University of Health Sciences',
    shortName: 'WBUHS',
    established: '2003',
    type: 'State University',
    address: 'DD-36, Sector-1, Salt Lake City, Kolkata - 700064, West Bengal, India',
    phone: '+91 33 2334 6600',
    email: 'info@wbuhs.ac.in',
    website: 'www.wbuhs.ac.in',
    chancellor: 'Governor of West Bengal',
    viceChancellor: 'Prof. (Dr.) Shyamal Kumar Banerjee',
    registrar: 'Dr. Subhas Chandra Saha',
    totalStudents: '12500',
    totalFaculty: '850',
    departments: '8',
    affiliatedColleges: '125',
    accreditations: 'NAAC A+, UGC Recognized, AIU Member',
    facilities: 'Central Library, Hostels, Sports Complex, Medical Center, Research Labs, Auditorium, Computer Center, Cafeteria',
    about: 'West Bengal University of Health Sciences (WBUHS) was established in 2003 by an Act of the West Bengal Legislative Assembly for better management of the health and medical education-related courses. The university is primarily responsible for the advancement of the learning and prosecution of research in human health and medicine.'
  };

  return (
    <PrincipalLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUniversity className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">College Profile</h2>
              <p className="text-gray-600 mt-1">Institutional information and details.</p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
            <FaAward className="mr-2" />
            Edit Profile
          </button>
        </div>

        {/* Basic Information Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaUniversity className="text-4xl text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{college.name}</h3>
            <p className="text-lg text-gray-600">({college.shortName})</p>
            <p className="text-sm text-gray-500 mt-2">Established in {college.established} • {college.type}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-red-500" />
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p className="text-sm text-gray-600">{college.address}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-green-500" />
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-sm text-gray-600">{college.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-500" />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-sm text-gray-600">{college.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaGlobe className="mr-3 text-purple-500" />
                <div>
                  <p className="font-medium text-gray-800">Website</p>
                  <p className="text-sm text-gray-600">{college.website}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-3 text-orange-500" />
                <div>
                  <p className="font-medium text-gray-800">Chancellor</p>
                  <p className="text-sm text-gray-600">{college.chancellor}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaUsers className="mr-3 text-indigo-500" />
                <div>
                  <p className="font-medium text-gray-800">Vice Chancellor</p>
                  <p className="text-sm text-gray-600">{college.viceChancellor}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaBook className="mr-3 text-teal-500" />
                <div>
                  <p className="font-medium text-gray-800">Registrar</p>
                  <p className="text-sm text-gray-600">{college.registrar}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaUsers className="text-3xl text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{college.totalStudents}</div>
            <p className="text-sm text-gray-600">Total Students</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaBook className="text-3xl text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{college.totalFaculty}</div>
            <p className="text-sm text-gray-600">Total Faculty</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaBuilding className="text-3xl text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{college.departments}</div>
            <p className="text-sm text-gray-600">Departments</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaAward className="text-3xl text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{college.affiliatedColleges}</div>
            <p className="text-sm text-gray-600">Affiliated Colleges</p>
          </div>
        </div>

        {/* Accreditations and Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FaAward className="mr-2 text-yellow-500" />
              Accreditations
            </h3>
            <p className="text-gray-600">{college.accreditations}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FaBuilding className="mr-2 text-indigo-500" />
              Facilities
            </h3>
            <p className="text-gray-600">{college.facilities}</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">About the University</h3>
          <p className="text-gray-600 leading-relaxed">{college.about}</p>
        </div>
      </div>
    </PrincipalLayout>
  );
};

export default CollegeProfile;
