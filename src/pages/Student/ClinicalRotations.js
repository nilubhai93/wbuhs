import React from 'react';
import StudentLayout from '../../components/studentLayout/StudentLayout';
import {
  FaHospital,
  FaUserMd,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaStethoscope,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

const ClinicalRotations = () => {
  const rotationData = {
    currentRotation: {
      department: 'Internal Medicine',
      hospital: 'WBUHS Teaching Hospital',
      startDate: '2024-01-15',
      endDate: '2024-03-15',
      supervisor: 'Dr. Rajesh Kumar',
      status: 'Active'
    },
    upcomingRotations: [
      {
        department: 'Surgery',
        hospital: 'WBUHS Teaching Hospital',
        startDate: '2024-03-16',
        endDate: '2024-05-16',
        supervisor: 'Dr. Priya Sharma',
        status: 'Upcoming'
      },
      {
        department: 'Pediatrics',
        hospital: 'City General Hospital',
        startDate: '2024-05-17',
        endDate: '2024-07-17',
        supervisor: 'Dr. Amit Patel',
        status: 'Upcoming'
      }
    ],
    completedRotations: [
      {
        department: 'Obstetrics & Gynecology',
        hospital: 'WBUHS Teaching Hospital',
        startDate: '2023-09-01',
        endDate: '2023-11-01',
        supervisor: 'Dr. Meera Singh',
        grade: 'A',
        status: 'Completed'
      },
      {
        department: 'Emergency Medicine',
        hospital: 'City General Hospital',
        startDate: '2023-05-01',
        endDate: '2023-07-01',
        supervisor: 'Dr. Vikram Rao',
        grade: 'A-',
        status: 'Completed'
      },
      {
        department: 'Psychiatry',
        hospital: 'Mental Health Center',
        startDate: '2023-01-01',
        endDate: '2023-03-01',
        supervisor: 'Dr. Sunita Gupta',
        grade: 'B+',
        status: 'Completed'
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Upcoming': return 'text-blue-600 bg-blue-100';
      case 'Completed': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <FaCheckCircle className="text-green-500" />;
      case 'Upcoming': return <FaClock className="text-blue-500" />;
      case 'Completed': return <FaCheckCircle className="text-gray-500" />;
      default: return <FaExclamationTriangle className="text-gray-500" />;
    }
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A': return 'text-green-600 bg-green-100';
      case 'A-': return 'text-green-500 bg-green-50';
      case 'B+': return 'text-blue-600 bg-blue-100';
      case 'B': return 'text-blue-500 bg-blue-50';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <StudentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaHospital className="mr-3 text-blue-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Clinical Rotations</h2>
              <p className="text-gray-600 mt-1">Track your clinical training rotations and progress</p>
            </div>
          </div>
        </div>

        {/* Current Rotation */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center mb-4">
            <FaStethoscope className="text-blue-600 text-2xl mr-3" />
            <h3 className="text-xl font-bold text-gray-800">Current Rotation</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p className="text-lg font-semibold text-gray-800">{rotationData.currentRotation.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Hospital</p>
              <p className="text-lg font-semibold text-gray-800">{rotationData.currentRotation.hospital}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Supervisor</p>
              <p className="text-lg font-semibold text-gray-800">{rotationData.currentRotation.supervisor}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="text-lg font-semibold text-gray-800">
                {new Date(rotationData.currentRotation.startDate).toLocaleDateString('en-IN')} - {new Date(rotationData.currentRotation.endDate).toLocaleDateString('en-IN')}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(rotationData.currentRotation.status)}`}>
              {getStatusIcon(rotationData.currentRotation.status)}
              <span className="ml-2">{rotationData.currentRotation.status}</span>
            </div>
          </div>
        </div>

        {/* Upcoming Rotations */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaClock className="text-orange-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Upcoming Rotations</h3>
          </div>
          <div className="space-y-4">
            {rotationData.upcomingRotations.map((rotation, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">{rotation.department}</h4>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(rotation.status)}`}>
                    {getStatusIcon(rotation.status)}
                    <span className="ml-2">{rotation.status}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <FaHospital className="text-gray-400 mr-2" />
                    <span>{rotation.hospital}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUserMd className="text-gray-400 mr-2" />
                    <span>{rotation.supervisor}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-gray-400 mr-2" />
                    <span>{new Date(rotation.startDate).toLocaleDateString('en-IN')} - {new Date(rotation.endDate).toLocaleDateString('en-IN')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Rotations */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaCheckCircle className="text-green-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Completed Rotations</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Department</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Hospital</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Supervisor</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Duration</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Grade</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {rotationData.completedRotations.map((rotation, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-800">{rotation.department}</td>
                    <td className="py-3 px-4 text-gray-700">{rotation.hospital}</td>
                    <td className="py-3 px-4 text-gray-700">{rotation.supervisor}</td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      {new Date(rotation.startDate).toLocaleDateString('en-IN')} - {new Date(rotation.endDate).toLocaleDateString('en-IN')}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(rotation.grade)}`}>
                        {rotation.grade}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(rotation.status)}`}>
                        {getStatusIcon(rotation.status)}
                        <span className="ml-2">{rotation.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default ClinicalRotations;
