import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaIdCard, FaCalendarAlt, FaHome } from 'react-icons/fa';
import ParentLayout from '../../../components/ParentLayout/ParentLayout';

const ViewParentProfile = () => {
    const parentProfile = {
        name: 'Mr. Rajesh Sharma',
        relation: 'Father',
        email: 'rajesh.sharma@email.com',
        phone: '+91 98765 43210',
        alternatePhone: '+91 87654 32109',
        address: {
            street: '123 MG Road',
            city: 'Kolkata',
            state: 'West Bengal',
            pincode: '700001',
            country: 'India'
        },
        occupation: 'Businessman',
        emergencyContact: {
            name: 'Mrs. Priya Sharma',
            relation: 'Mother',
            phone: '+91 76543 21098'
        },
        registrationDate: '2023-08-15',
        lastLogin: '2024-01-20'
    };

    const childDetails = {
        name: 'Rahul Sharma',
        rollNumber: '2023MBBS001',
        class: 'MBBS 2nd Year',
        department: 'Anatomy',
        admissionDate: '2023-08-01'
    };

    return (
        <ParentLayout>
           <div className="p-6 space-y-6">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <FaUser className="mr-3 text-indigo-600 text-3xl" />
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">Parent Profile</h2>
                            <p className="text-gray-600 mt-1">View and manage your profile information.</p>
                        </div>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition flex items-center">
                        <FaEdit className="mr-2" />
                        Edit Profile
                    </button>
                </div>

                {/* Profile Overview */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-6">
                        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mr-6">
                            <FaUser className="text-3xl text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">{parentProfile.name}</h3>
                            <p className="text-gray-600">{parentProfile.relation} of {childDetails.name}</p>
                            <p className="text-sm text-gray-500 mt-1">Member since {new Date(parentProfile.registrationDate).toLocaleDateString('en-IN')}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h4>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <FaEnvelope className="text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-600">Email</p>
                                        <p className="font-medium">{parentProfile.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-600">Phone</p>
                                        <p className="font-medium">{parentProfile.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-600">Alternate Phone</p>
                                        <p className="font-medium">{parentProfile.alternatePhone}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaHome className="text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-600">Occupation</p>
                                        <p className="font-medium">{parentProfile.occupation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Address</h4>
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-gray-400 mr-3 mt-1" />
                                <div>
                                    <p className="font-medium">{parentProfile.address.street}</p>
                                    <p className="text-gray-600">{parentProfile.address.city}, {parentProfile.address.state}</p>
                                    <p className="text-gray-600">{parentProfile.address.pincode}, {parentProfile.address.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Child Details */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-6">
                        <FaIdCard className="text-green-500 mr-2 text-xl" />
                        <h3 className="text-xl font-bold text-gray-800">Child Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">{childDetails.name}</div>
                            <p className="text-sm text-gray-600 mt-1">Name</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">{childDetails.rollNumber}</div>
                            <p className="text-sm text-gray-600 mt-1">Roll Number</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-600">{childDetails.class}</div>
                            <p className="text-sm text-gray-600 mt-1">Class</p>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                            <div className="text-lg font-bold text-orange-600">{childDetails.department}</div>
                            <p className="text-sm text-gray-600 mt-1">Department</p>
                        </div>
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Emergency Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-red-50 rounded-lg">
                            <div className="text-lg font-bold text-red-600">{parentProfile.emergencyContact.name}</div>
                            <p className="text-sm text-gray-600 mt-1">Name</p>
                        </div>
                        <div className="text-center p-4 bg-yellow-50 rounded-lg">
                            <div className="text-lg font-bold text-yellow-600">{parentProfile.emergencyContact.relation}</div>
                            <p className="text-sm text-gray-600 mt-1">Relation</p>
                        </div>
                        <div className="text-center p-4 bg-indigo-50 rounded-lg">
                            <div className="text-lg font-bold text-indigo-600">{parentProfile.emergencyContact.phone}</div>
                            <p className="text-sm text-gray-600 mt-1">Phone</p>
                        </div>
                    </div>
                </div>

                {/* Account Information */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-6">
                        <FaCalendarAlt className="text-blue-500 mr-2 text-xl" />
                        <h3 className="text-xl font-bold text-gray-800">Account Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">Registration Date</p>
                            <p className="font-medium">{new Date(parentProfile.registrationDate).toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">Last Login</p>
                            <p className="font-medium">{new Date(parentProfile.lastLogin).toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </ParentLayout>
    );
};

export default ViewParentProfile;
