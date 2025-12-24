import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import { FaSave, FaTimes, FaStethoscope, FaBone, FaHeartbeat, FaMicroscope, FaBrain, FaTooth, FaUserMd, FaUsers, FaCut, FaFemale, FaBaby } from 'react-icons/fa';

const AddDepartment = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        icon: 'FaStethoscope',
        color: 'bg-blue-500',
        status: 'Active'
    });

    const iconOptions = [
        { value: 'FaBone', label: 'Bone', icon: FaBone },
        { value: 'FaHeartbeat', label: 'Heartbeat', icon: FaHeartbeat },
        { value: 'FaMicroscope', label: 'Microscope', icon: FaMicroscope },
        { value: 'FaStethoscope', label: 'Stethoscope', icon: FaStethoscope },
        { value: 'FaBrain', label: 'Brain', icon: FaBrain },
        { value: 'FaTooth', label: 'Tooth', icon: FaTooth },
        { value: 'FaUserMd', label: 'User MD', icon: FaUserMd },
        { value: 'FaUsers', label: 'Users', icon: FaUsers },
        { value: 'FaCut', label: 'Cut', icon: FaCut },
        { value: 'FaFemale', label: 'Female', icon: FaFemale },
        { value: 'FaBaby', label: 'Baby', icon: FaBaby }
    ];

    const colorOptions = [
        { value: 'bg-blue-500', label: 'Blue' },
        { value: 'bg-green-500', label: 'Green' },
        { value: 'bg-red-500', label: 'Red' },
        { value: 'bg-yellow-500', label: 'Yellow' },
        { value: 'bg-purple-500', label: 'Purple' },
        { value: 'bg-indigo-500', label: 'Indigo' },
        { value: 'bg-pink-500', label: 'Pink' },
        { value: 'bg-teal-500', label: 'Teal' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically save the department to your backend
        console.log('Adding department:', formData);
        // Navigate back to manage department page
        navigate('/admin/manage-department');
    };

    const handleCancel = () => {
        navigate('/admin/manage-department');
    };

    return (
        <AdminLayout>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

          .form-container {
            font-family: 'Outfit', sans-serif;
          }

          .form-input {
            transition: all 0.3s ease;
          }

          .form-input:focus {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }

          .icon-button {
            transition: all 0.3s ease;
          }

          .icon-button:hover {
            transform: scale(1.1);
          }

          .icon-button.selected {
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
        `}
            </style>

            <div className="form-container p-8 space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 min-h-screen">
                {/* Page Header */}
                <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                            <FaStethoscope className="text-white text-4xl" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                                Add New Department
                            </h2>
                            <p className="text-gray-600 text-lg font-medium">Create a new medical department in the system</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Department Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Department Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder="Enter department name"
                                />
                            </div>

                            {/* Icon Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-4">
                                    Department Icon *
                                </label>
                                <div className="grid grid-cols-6 gap-4">
                                    {iconOptions.map((iconOption) => (
                                        <button
                                            key={iconOption.value}
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, icon: iconOption.value }))}
                                            className={`icon-button p-4 border-2 rounded-lg flex flex-col items-center gap-2 hover:border-indigo-500 ${formData.icon === iconOption.value
                                                    ? 'border-indigo-500 selected bg-indigo-50'
                                                    : 'border-gray-200'
                                                }`}
                                        >
                                            <iconOption.icon className="text-2xl text-gray-600" />
                                            <span className="text-xs text-gray-600">{iconOption.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-4">
                                    Department Color *
                                </label>
                                <div className="grid grid-cols-4 gap-4">
                                    {colorOptions.map((colorOption) => (
                                        <button
                                            key={colorOption.value}
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, color: colorOption.value }))}
                                            className={`icon-button p-4 border-2 rounded-lg flex items-center gap-2 hover:border-gray-400 ${formData.color === colorOption.value
                                                    ? 'border-gray-600'
                                                    : 'border-gray-200'
                                                }`}
                                        >
                                            <div className={`w-6 h-6 rounded-full ${colorOption.value}`}></div>
                                            <span className="text-sm text-gray-600">{colorOption.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Status */}
                            <div>
                                <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Status *
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-6 border-t border-gray-200">
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors font-semibold"
                                >
                                    <FaSave />
                                    Save Department
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors font-semibold"
                                >
                                    <FaTimes />
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AddDepartment;
