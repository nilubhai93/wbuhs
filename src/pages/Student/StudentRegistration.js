import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaUser, FaGraduationCap, FaFileUpload, FaTimes } from 'react-icons/fa';

const StudentRegistration = () => {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    // 10th Details
    tenthBoard: '',
    tenthSchool: '',
    tenthYear: '',
    tenthPercentage: '',
    tenthResult: null,
    // 12th Details
    twelfthBoard: '',
    twelfthSchool: '',
    twelfthYear: '',
    twelfthPercentage: '',
    twelfthResult: null,
    // Degree Details (if any)
    degree: '',
    degreeUniversity: '',
    degreeYear: '',
    degreePercentage: '',
    degreeResult: null,
    // Document Uploads
    aadhar: null,
    photo: null,
    signature: null,
    tenthAdmitCard: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#42a5f5]">
      {/* Header */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1565c0] to-[#42a5f5] rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-800">WBUHS</h1>
                <p className="text-xs sm:text-sm text-blue-600">West Bengal University of Health Sciences</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="bg-[#1565c0] text-white px-4 py-2 rounded-lg hover:bg-[#0d47a1] transition duration-300 text-sm sm:text-base"
            >
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-2xl border-4 border-white/30">
            <FaUser className="text-white text-4xl sm:text-6xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Student Registration Portal
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Join WBUHS and start your journey towards excellence in health sciences education.
            Fill out the form below to complete your registration.
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1565c0] to-[#42a5f5] rounded-full flex items-center justify-center mr-3">
                  <FaUser className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Personal Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Gender <span className="text-red-500">*</span></label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address <span className="text-red-500">*</span></label>
                  <textarea
                    name="address"
                    placeholder="Enter full address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    rows="3"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="state"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Enter pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* 10th Grade Details */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                  <FaGraduationCap className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">10th Grade Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Board <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="tenthBoard"
                    placeholder="e.g., WBBSE, CBSE, ICSE"
                    value={formData.tenthBoard}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">School Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="tenthSchool"
                    placeholder="Enter school name"
                    value={formData.tenthSchool}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Passing <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    name="tenthYear"
                    placeholder="e.g., 2020"
                    value={formData.tenthYear}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    name="tenthPercentage"
                    placeholder="e.g., 85.5"
                    step="0.01"
                    value={formData.tenthPercentage}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaFileUpload className="inline mr-2" />
                    Upload 10th Result/Marksheet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="tenthResult"
                    onChange={handleFileChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl text-gray-800 file:bg-gradient-to-r file:from-green-500 file:to-green-600 file:text-white file:border-none file:rounded-lg file:px-4 file:py-2 file:mr-4 file:font-semibold hover:file:from-green-600 hover:file:to-green-700 file:cursor-pointer transition-all"
                    accept=".jpg,.jpeg,.png,.pdf"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF (Max 5MB)</p>
                </div>
              </div>
            </div>

            {/* 12th Grade Details */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <FaGraduationCap className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">12th Grade Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Board <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="twelfthBoard"
                    placeholder="e.g., WBCHSE, CBSE, ISC"
                    value={formData.twelfthBoard}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">School Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="twelfthSchool"
                    placeholder="Enter school name"
                    value={formData.twelfthSchool}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Passing <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    name="twelfthYear"
                    placeholder="e.g., 2022"
                    value={formData.twelfthYear}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    name="twelfthPercentage"
                    placeholder="e.g., 88.5"
                    step="0.01"
                    value={formData.twelfthPercentage}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaFileUpload className="inline mr-2" />
                    Upload 12th Result/Marksheet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="twelfthResult"
                    onChange={handleFileChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl text-gray-800 file:bg-gradient-to-r file:from-purple-500 file:to-purple-600 file:text-white file:border-none file:rounded-lg file:px-4 file:py-2 file:mr-4 file:font-semibold hover:file:from-purple-600 hover:file:to-purple-700 file:cursor-pointer transition-all"
                    accept=".jpg,.jpeg,.png,.pdf"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF (Max 5MB)</p>
                </div>
              </div>
            </div>

            {/* Degree Details (Optional) */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <FaGraduationCap className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Degree Details</h2>
                  <p className="text-sm text-gray-600 mt-1">(Optional - if applicable)</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Degree Name</label>
                  <input
                    type="text"
                    name="degree"
                    placeholder="e.g., B.Sc, B.A, B.Com"
                    value={formData.degree}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">University</label>
                  <input
                    type="text"
                    name="degreeUniversity"
                    placeholder="Enter university name"
                    value={formData.degreeUniversity}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Passing</label>
                  <input
                    type="number"
                    name="degreeYear"
                    placeholder="e.g., 2024"
                    value={formData.degreeYear}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage/CGPA</label>
                  <input
                    type="number"
                    name="degreePercentage"
                    placeholder="e.g., 78.5 or 8.5"
                    step="0.01"
                    value={formData.degreePercentage}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaFileUpload className="inline mr-2" />
                    Upload Degree Certificate/Marksheet
                  </label>
                  <input
                    type="file"
                    name="degreeResult"
                    onChange={handleFileChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl text-gray-800 file:bg-gradient-to-r file:from-orange-500 file:to-orange-600 file:text-white file:border-none file:rounded-lg file:px-4 file:py-2 file:mr-4 file:font-semibold hover:file:from-orange-600 hover:file:to-orange-700 file:cursor-pointer transition-all"
                    accept=".jpg,.jpeg,.png,.pdf"
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF (Max 5MB)</p>
                </div>
              </div>
            </div>

            {/* Document Uploads */}
            <div className="pb-4">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                  <FaFileUpload className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Document Uploads</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Aadhar Card <span className="text-red-500">*</span></label>
                  <input
                    type="file"
                    name="aadhar"
                    onChange={handleFileChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl text-gray-800 file:bg-gradient-to-r file:from-red-500 file:to-red-600 file:text-white file:border-none file:rounded-lg file:px-4 file:py-2 file:mr-4 file:font-semibold hover:file:from-red-600 hover:file:to-red-700 file:cursor-pointer transition-all"
                    accept=".jpg,.jpeg,.png,.pdf"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload front & back side</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Photo <span className="text-red-500">*</span></label>
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl text-gray-800 file:bg-gradient-to-r file:from-red-500 file:to-red-600 file:text-white file:border-none file:rounded-lg file:px-4 file:py-2 file:mr-4 file:font-semibold hover:file:from-red-600 hover:file:to-red-700 file:cursor-pointer transition-all"
                    accept=".jpg,.jpeg,.png"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Recent passport size photo</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Signature <span className="text-red-500">*</span></label>
                  <input
                    type="file"
                    name="signature"
                    onChange={handleFileChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl text-gray-800 file:bg-gradient-to-r file:from-red-500 file:to-red-600 file:text-white file:border-none file:rounded-lg file:px-4 file:py-2 file:mr-4 file:font-semibold hover:file:from-red-600 hover:file:to-red-700 file:cursor-pointer transition-all"
                    accept=".jpg,.jpeg,.png"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Signature on white paper</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">10th Admit Card <span className="text-red-500">*</span></label>
                  <input
                    type="file"
                    name="tenthAdmitCard"
                    onChange={handleFileChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl text-gray-800 file:bg-gradient-to-r file:from-red-500 file:to-red-600 file:text-white file:border-none file:rounded-lg file:px-4 file:py-2 file:mr-4 file:font-semibold hover:file:from-red-600 hover:file:to-red-700 file:cursor-pointer transition-all"
                    accept=".jpg,.jpeg,.png,.pdf"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload clear copy of admit card</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#1565c0] to-[#42a5f5] text-white font-bold py-4 px-12 rounded-2xl text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-green-500 text-5xl" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Registration Submitted Successfully!</h3>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 text-lg mb-4">
                  Your registration has been submitted successfully and is now under review.
                </p>
                
                {/* Approval Workflow */}
                <div className="bg-white rounded-lg p-6 mb-4">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Approval Workflow</h4>
                  
                  <div className="space-y-4">
                    {/* Step 1: Principal Approval */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        1
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-semibold text-gray-800">Principal Approval</p>
                        <p className="text-sm text-yellow-600">⏳ Pending Review</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-gray-300"></div>
                    </div>

                    {/* Step 2: Faculty Approval */}
                    <div className="flex items-start opacity-50">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        2
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-semibold text-gray-800">Faculty Approval</p>
                        <p className="text-sm text-gray-500">⏸️ Awaiting Principal Approval</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-gray-300"></div>
                    </div>

                    {/* Step 3: Admin Approval */}
                    <div className="flex items-start opacity-50">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        3
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-semibold text-gray-800">Admin Approval</p>
                        <p className="text-sm text-gray-500">⏸️ Awaiting Faculty Approval</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-gray-300"></div>
                    </div>

                    {/* Step 4: Credentials Sent */}
                    <div className="flex items-start opacity-50">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        4
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-semibold text-gray-800">Receive Login Credentials</p>
                        <p className="text-sm text-gray-500">📧 Via Email</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-blue-200 pt-4 mt-4">
                  <p className="text-blue-700 font-semibold text-base mb-2">
                    📧 You will receive your Student ID and Password via email after all approvals are completed.
                  </p>
                  <p className="text-sm text-gray-600">
                    Expected timeframe: 24-48 hours
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Please check your email regularly for status updates.
                </p>
                <p className="text-sm text-gray-600">
                  For any queries, contact: <span className="font-semibold text-blue-600">admission@wbuhs.edu.in</span>
                </p>
              </div>

              <button
                onClick={handleCloseModal}
                className="mt-8 bg-gradient-to-r from-[#1565c0] to-[#42a5f5] text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentRegistration;