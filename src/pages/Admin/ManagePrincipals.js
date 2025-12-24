import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import { FaSearch, FaPlus, FaEye, FaEdit, FaTrash, FaUser, FaEnvelope, FaPhone, FaCheckCircle, FaTimesCircle, FaArrowLeft, FaSave, FaTimes } from 'react-icons/fa';
import { principals } from '../../data/data';

const ManagePrincipals = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const collegeId = location.state?.collegeId;
  const [isEditing, setIsEditing] = useState(false);
  const [editedPrincipal, setEditedPrincipal] = useState(null);

  // Filter principals by collegeId if provided
  const collegePrincipals = collegeId
    ? principals.filter(principal => principal.collegeId === collegeId)
    : principals;

  // For college-specific view, show the first (and likely only) principal
  const principal = collegePrincipals[0];

  const handleEdit = () => {
    setEditedPrincipal({ ...principal });
    setIsEditing(true);
  };

  const handleSave = () => {
    // Here you would typically make an API call to save the changes
    console.log('Saving principal:', editedPrincipal);
    setIsEditing(false);
    setEditedPrincipal(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedPrincipal(null);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this principal?')) {
      // Here you would typically make an API call to delete the principal
      console.log('Deleting principal:', principal.id);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedPrincipal(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!principal) {
    return (
      <AdminLayout>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
            <h1 className="text-3xl font-bold text-gray-800">Principal Details</h1>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FaUser className="text-gray-400 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Principal Found</h3>
            <p className="text-gray-500">No principal is assigned to this college yet.</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Principal Details</h1>
              <p className="text-gray-600 mt-1">View and manage principal information</p>
            </div>
          </div>
          <div className="flex gap-2">
            {!isEditing ? (
              <>
                <button
                  onClick={handleEdit}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <FaEdit />
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <FaTrash />
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <FaSave />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <FaTimes />
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Principal Information Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start space-x-6">
            {/* Avatar */}
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FaUser className="text-purple-600 text-4xl" />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedPrincipal.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-lg font-semibold text-gray-900">{principal.name}</p>
                  )}
                </div>

                {/* Qualification */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedPrincipal.qualification}
                      onChange={(e) => handleInputChange('qualification', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-700">{principal.qualification}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedPrincipal.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-700">{principal.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedPrincipal.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-700">{principal.phone}</p>
                  )}
                </div>

                {/* Specialization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedPrincipal.specialization}
                      onChange={(e) => handleInputChange('specialization', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-700">{principal.specialization}</p>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedPrincipal.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-700">{principal.experience}</p>
                  )}
                </div>

                {/* College */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
                  <p className="text-gray-700">{principal.collegeName}</p>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${principal.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                    }`}>
                    {principal.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManagePrincipals;
