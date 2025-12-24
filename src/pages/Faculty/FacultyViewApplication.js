import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaEye, FaUser, FaEnvelope, FaPhone, FaClock, FaFilter, FaUserTie } from 'react-icons/fa';
import FacultyLayout from '../../components/FacultyLayout/FacultyLayout';

const FacultyViewApplication = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('pending'); // pending, approved, rejected, all
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState('');
  const [remarks, setRemarks] = useState('');

  // Fetch applications from localStorage
  useEffect(() => {
    const storedApplications = localStorage.getItem('studentApplications');
    if (storedApplications) {
      const allApplications = JSON.parse(storedApplications);
      // Filter to show only applications approved by principal
      const principalApprovedApps = allApplications.filter(
        app => app.status === 'approved_by_principal' || 
               app.status === 'approved_by_faculty' || 
               app.status === 'rejected_by_faculty'
      );
      setApplications(principalApprovedApps);
    }
  }, []);


  // Save to localStorage whenever applications change
  useEffect(() => {
    if (applications.length > 0) {
      const storedApplications = localStorage.getItem('studentApplications');
      if (storedApplications) {
        const allApplications = JSON.parse(storedApplications);
        // Update only the applications that faculty can see
        const updatedApplications = allApplications.map(app => {
          const facultyApp = applications.find(fa => fa.id === app.id);
          return facultyApp || app;
        });
        localStorage.setItem('studentApplications', JSON.stringify(updatedApplications));
      }
    }
  }, [applications]);

  // Filter applications based on faculty-level status
  const filteredApplications = applications.filter(app => {
    if (filter === 'all') return true;
    if (filter === 'pending') return app.status === 'approved_by_principal';
    if (filter === 'approved') return app.status === 'approved_by_faculty';
    if (filter === 'rejected') return app.status === 'rejected_by_faculty';
    return true;
  });

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    setShowModal(true);
    setActionType('view');
  };

  const handleApprove = (application) => {
    setSelectedApplication(application);
    setActionType('approve');
  };

  const handleReject = (application) => {
    setSelectedApplication(application);
    setActionType('reject');
  };

  const confirmAction = () => {
    if (actionType === 'approve') {
      const updatedApplications = applications.map(app =>
        app.id === selectedApplication.id
          ? {
              ...app,
              status: 'approved_by_faculty',
              facultyRemarks: remarks,
              facultyApprovedDate: new Date().toISOString()
            }
          : app
      );
      setApplications(updatedApplications);
      alert(`Application for ${selectedApplication.firstName} ${selectedApplication.lastName} has been approved and forwarded to Admin for final approval.`);
    } else if (actionType === 'reject') {
      const updatedApplications = applications.map(app =>
        app.id === selectedApplication.id
          ? {
              ...app,
              status: 'rejected_by_faculty',
              facultyRemarks: remarks,
              facultyApprovedDate: new Date().toISOString()
            }
          : app
      );
      setApplications(updatedApplications);
      alert(`Application for ${selectedApplication.firstName} ${selectedApplication.lastName} has been rejected.`);
    }
    setSelectedApplication(null);
    setActionType('');
    setRemarks('');
  };

  const cancelAction = () => {
    setSelectedApplication(null);
    setActionType('');
    setRemarks('');
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedApplication(null);
  };

  // Count applications by status
  const pendingCount = applications.filter(app => app.status === 'approved_by_principal').length;
  const approvedCount = applications.filter(app => app.status === 'approved_by_faculty').length;
  const rejectedCount = applications.filter(app => app.status === 'rejected_by_faculty').length;

  return (
    <FacultyLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <FaUserTie className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-gray-600 mt-1">Review applications approved by Principal</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-3xl font-bold text-purple-600">{pendingCount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto mb-6">
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <FaFilter className="text-purple-600 mr-2" />
                <span className="font-semibold text-gray-800">Filter Applications:</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === 'all'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({applications.length})
                </button>
                <button
                  onClick={() => setFilter('pending')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === 'pending'
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Pending ({pendingCount})
                </button>
                <button
                  onClick={() => setFilter('approved')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === 'approved'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Approved ({approvedCount})
                </button>
                <button
                  onClick={() => setFilter('rejected')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === 'rejected'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Rejected ({rejectedCount})
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {filter === 'all' && 'All Applications'}
            {filter === 'pending' && 'Pending Faculty Review'}
            {filter === 'approved' && 'Approved by Faculty'}
            {filter === 'rejected' && 'Rejected by Faculty'}
          </h2>

          {filteredApplications.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <p className="text-gray-600 text-lg">No applications found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredApplications.map((application) => (
                <div key={application.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <FaUser className="text-purple-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {application.firstName} {application.lastName}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                            ✓ Principal
                          </span>
                          {application.status === 'approved_by_principal' && (
                            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full font-semibold">
                              Pending Review
                            </span>
                          )}
                          {application.status === 'approved_by_faculty' && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                              ✓ Approved
                            </span>
                          )}
                          {application.status === 'rejected_by_faculty' && (
                            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-semibold">
                              ✗ Rejected
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700">
                      <FaEnvelope className="mr-2 text-gray-500" />
                      <span className="text-sm">{application.email}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaPhone className="mr-2 text-gray-500" />
                      <span className="text-sm">{application.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-700 text-xs">
                      <FaClock className="mr-2 text-gray-500" />
                      <span>Principal Approved: {new Date(application.principalApprovedDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-gray-600">10th Percentage</p>
                        <p className="text-sm font-semibold text-gray-800">{application.tenthPercentage}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">12th Percentage</p>
                        <p className="text-sm font-semibold text-gray-800">{application.twelfthPercentage}%</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewDetails(application)}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-sm"
                    >
                      <FaEye className="mr-2" />
                      View Details
                    </button>
                    {application.status === 'approved_by_principal' && (
                      <>
                        <button
                          onClick={() => handleApprove(application)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-sm"
                        >
                          <FaCheckCircle className="mr-2" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(application)}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-sm"
                        >
                          <FaTimesCircle className="mr-2" />
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View Details Modal - Complete Student Details */}
        {showModal && selectedApplication && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8">
              <div className="flex items-center justify-between mb-6 sticky top-0 bg-white pb-4 border-b">
                <h3 className="text-2xl font-bold text-gray-800">Complete Application Details</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimesCircle className="text-2xl" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <FaUser className="mr-2 text-purple-600" />
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">First Name</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.firstName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Last Name</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.lastName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Date of Birth</p>
                      <p className="font-semibold text-gray-800">{new Date(selectedApplication.dateOfBirth).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Gender</p>
                      <p className="font-semibold text-gray-800 capitalize">{selectedApplication.gender}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.phone}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">City</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.city}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">State</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.state}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Pincode</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.pincode}</p>
                    </div>
                  </div>
                </div>

                {/* 10th Grade Details */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <FaCheckCircle className="mr-2 text-green-600" />
                    10th Grade Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Board</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.tenthBoard}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">School Name</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.tenthSchool}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Year of Passing</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.tenthYear}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Percentage</p>
                      <p className="font-semibold text-green-600 text-lg">{selectedApplication.tenthPercentage}%</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600 mb-2">10th Result/Marksheet</p>
                      <a
                        href={`/uploads/${selectedApplication.tenthResult}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <FaEye className="mr-2" />
                        View Document
                      </a>
                    </div>
                  </div>
                </div>

                {/* 12th Grade Details */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <FaCheckCircle className="mr-2 text-blue-600" />
                    12th Grade Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Board</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.twelfthBoard}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">School Name</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.twelfthSchool}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Year of Passing</p>
                      <p className="font-semibold text-gray-800">{selectedApplication.twelfthYear}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Percentage</p>
                      <p className="font-semibold text-blue-600 text-lg">{selectedApplication.twelfthPercentage}%</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600 mb-2">12th Result/Marksheet</p>
                      <a
                        href={`/uploads/${selectedApplication.twelfthResult}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaEye className="mr-2" />
                        View Document
                      </a>
                    </div>
                  </div>
                </div>

                {/* Degree Details (if any) */}
                {selectedApplication.degree && (
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                      <FaCheckCircle className="mr-2 text-orange-600" />
                      Degree Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Degree Name</p>
                        <p className="font-semibold text-gray-800">{selectedApplication.degree}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">University</p>
                        <p className="font-semibold text-gray-800">{selectedApplication.degreeUniversity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Year of Passing</p>
                        <p className="font-semibold text-gray-800">{selectedApplication.degreeYear}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Percentage/CGPA</p>
                        <p className="font-semibold text-orange-600 text-lg">{selectedApplication.degreePercentage}%</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 mb-2">Degree Certificate/Marksheet</p>
                        <a
                          href={`/uploads/${selectedApplication.degreeResult}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                        >
                          <FaEye className="mr-2" />
                          View Document
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Uploaded Documents */}
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <FaCheckCircle className="mr-2 text-red-600" />
                    Uploaded Documents
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Aadhar Card</p>
                      <a
                        href={`/uploads/${selectedApplication.aadhar}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        <FaEye className="mr-2" />
                        View Aadhar
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Passport Photo</p>
                      <a
                        href={`/uploads/${selectedApplication.photo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        <FaEye className="mr-2" />
                        View Photo
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Signature</p>
                      <a
                        href={`/uploads/${selectedApplication.signature}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        <FaEye className="mr-2" />
                        View Signature
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">10th Admit Card</p>
                      <a
                        href={`/uploads/${selectedApplication.tenthAdmitCard}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        <FaEye className="mr-2" />
                        View Admit Card
                      </a>
                    </div>
                  </div>
                </div>

                {/* Approval Status */}
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-3">Approval Status</h4>
                  <div className="flex items-center text-green-700">
                    <FaCheckCircle className="mr-2" />
                    <span>Principal Approved on {new Date(selectedApplication.principalApprovedDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 mt-6 pt-6 border-t sticky bottom-0 bg-white">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg transition-colors font-semibold"
                >
                  Close
                </button>
                {selectedApplication.status === 'approved_by_principal' && (
                  <button
                    onClick={() => {
                      closeModal();
                      handleApprove(selectedApplication);
                    }}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors font-semibold"
                  >
                    Approve Application
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Approve/Reject Confirmation */}
        {selectedApplication && actionType !== 'view' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
              <div className={`w-16 h-16 ${actionType === 'approve' ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {actionType === 'approve' ? (
                  <FaCheckCircle className="text-green-600 text-3xl" />
                ) : (
                  <FaTimesCircle className="text-red-600 text-3xl" />
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {actionType === 'approve' ? 'Approve Application?' : 'Reject Application?'}
              </h3>

              <p className="text-gray-700 mb-4 text-center">
                {actionType === 'approve'
                  ? `Are you sure you want to approve the application for ${selectedApplication.firstName} ${selectedApplication.lastName}? This will forward the application to Admin for final approval.`
                  : `Are you sure you want to reject the application for ${selectedApplication.firstName} ${selectedApplication.lastName}?`}
              </p>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Remarks (Optional)
                </label>
                <textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="3"
                  placeholder="Add any remarks or comments..."
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={cancelAction}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-6 rounded-lg transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmAction}
                  className={`flex-1 ${actionType === 'approve'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-red-600 hover:bg-red-700'
                    } text-white py-3 px-6 rounded-lg transition-colors font-semibold`}
                >
                  {actionType === 'approve' ? 'Approve' : 'Reject'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </FacultyLayout>
  );
};

export default FacultyViewApplication;