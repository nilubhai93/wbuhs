import React from 'react';
import StudentLayout from '../../components/studentLayout/StudentLayout';
import {
  FaHeartbeat,
  FaUserMd,
  FaCalendarAlt,
  FaFileMedical,
  FaSyringe,
  FaPills,
  FaStethoscope,
  FaAllergies,
  FaWeight,
  FaTint
} from 'react-icons/fa';

const MedicalRecords = () => {
  const medicalData = {
    personalInfo: {
      bloodGroup: 'O+',
      height: '175 cm',
      weight: '70 kg',
      allergies: ['Penicillin', 'Dust'],
      chronicConditions: ['None'],
      emergencyContact: {
        name: 'Mrs. Emily Johnson',
        relation: 'Mother',
        phone: '+91 98765 43211'
      }
    },
    recentVisits: [
      {
        date: '2024-01-15',
        doctor: 'Dr. Rajesh Kumar',
        department: 'Internal Medicine',
        diagnosis: 'Seasonal Flu',
        treatment: 'Rest, hydration, antipyretics',
        followUp: '2024-01-22'
      },
      {
        date: '2023-12-10',
        doctor: 'Dr. Priya Sharma',
        department: 'Dermatology',
        diagnosis: 'Mild Eczema',
        treatment: 'Topical corticosteroids, moisturizers',
        followUp: '2024-01-10'
      },
      {
        date: '2023-11-05',
        doctor: 'Dr. Vikram Singh',
        department: 'Ophthalmology',
        diagnosis: 'Mild Myopia',
        treatment: 'Corrective glasses prescribed',
        followUp: '2024-05-05'
      }
    ],
    vaccinations: [
      { vaccine: 'COVID-19', doses: 2, lastDose: '2023-08-15', nextDue: '2024-08-15' },
      { vaccine: 'Hepatitis B', doses: 3, lastDose: '2022-03-10', nextDue: '2032-03-10' },
      { vaccine: 'MMR', doses: 2, lastDose: '2015-06-20', nextDue: 'N/A' },
      { vaccine: 'DPT', doses: 5, lastDose: '2014-12-15', nextDue: 'N/A' },
      { vaccine: 'BCG', doses: 1, lastDose: '2005-01-10', nextDue: 'N/A' }
    ],
    medications: [
      {
        name: 'Cetirizine',
        dosage: '10mg once daily',
        prescribedFor: 'Allergies',
        prescribedBy: 'Dr. Priya Sharma',
        startDate: '2023-12-10',
        endDate: '2024-03-10'
      },
      {
        name: 'Vitamin D3',
        dosage: '1000 IU daily',
        prescribedFor: 'Vitamin D deficiency',
        prescribedBy: 'Dr. Rajesh Kumar',
        startDate: '2023-10-15',
        endDate: '2024-04-15'
      }
    ],
    vitalSigns: {
      bloodPressure: '120/80 mmHg',
      heartRate: '72 bpm',
      temperature: '98.6°F',
      oxygenSaturation: '98%'
    }
  };

  const getVaccinationStatus = (nextDue) => {
    if (nextDue === 'N/A') return { status: 'Up to date', color: 'text-green-600 bg-green-100' };
    const nextDueDate = new Date(nextDue);
    const today = new Date();
    const daysUntilDue = Math.ceil((nextDueDate - today) / (1000 * 60 * 60 * 24));

    if (daysUntilDue < 0) return { status: 'Overdue', color: 'text-red-600 bg-red-100' };
    if (daysUntilDue <= 30) return { status: 'Due soon', color: 'text-yellow-600 bg-yellow-100' };
    return { status: 'Up to date', color: 'text-green-600 bg-green-100' };
  };

  return (
    <StudentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaHeartbeat className="mr-3 text-red-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Medical Records</h2>
              <p className="text-gray-600 mt-1">View your health information and medical history</p>
            </div>
          </div>
        </div>

        {/* Personal Health Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vital Signs */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <FaStethoscope className="text-blue-500 mr-2 text-xl" />
              <h3 className="text-xl font-bold text-gray-800">Vital Signs</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <FaHeartbeat className="text-red-500 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-500">Blood Pressure</p>
                <p className="text-lg font-bold text-gray-800">{medicalData.vitalSigns.bloodPressure}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <FaHeartbeat className="text-pink-500 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-500">Heart Rate</p>
                <p className="text-lg font-bold text-gray-800">{medicalData.vitalSigns.heartRate}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <FaTint className="text-blue-500 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-500">Temperature</p>
                <p className="text-lg font-bold text-gray-800">{medicalData.vitalSigns.temperature}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <FaTint className="text-green-500 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-500">SpO2</p>
                <p className="text-lg font-bold text-gray-800">{medicalData.vitalSigns.oxygenSaturation}</p>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <FaUserMd className="text-green-500 mr-2 text-xl" />
              <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FaTint className="text-red-500 mr-2" />
                  <span className="text-sm font-medium">Blood Group</span>
                </div>
                <span className="text-lg font-bold text-gray-800">{medicalData.personalInfo.bloodGroup}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FaWeight className="text-blue-500 mr-2" />
                  <span className="text-sm font-medium">Height</span>
                </div>
                <span className="text-lg font-bold text-gray-800">{medicalData.personalInfo.height}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FaWeight className="text-green-500 mr-2" />
                  <span className="text-sm font-medium">Weight</span>
                </div>
                <span className="text-lg font-bold text-gray-800">{medicalData.personalInfo.weight}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Allergies and Conditions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <FaAllergies className="text-orange-500 mr-2 text-xl" />
              <h3 className="text-xl font-bold text-gray-800">Allergies</h3>
            </div>
            <div className="space-y-2">
              {medicalData.personalInfo.allergies.map((allergy, index) => (
                <div key={index} className="flex items-center p-3 bg-red-50 rounded-lg">
                  <FaAllergies className="text-red-500 mr-3" />
                  <span className="font-medium text-gray-800">{allergy}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <FaHeartbeat className="text-purple-500 mr-2 text-xl" />
              <h3 className="text-xl font-bold text-gray-800">Chronic Conditions</h3>
            </div>
            <div className="space-y-2">
              {medicalData.personalInfo.chronicConditions.map((condition, index) => (
                <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <FaHeartbeat className="text-blue-500 mr-3" />
                  <span className="font-medium text-gray-800">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Medications */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaPills className="text-blue-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Current Medications</h3>
          </div>
          <div className="space-y-4">
            {medicalData.medications.map((medication, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">{medication.name}</h4>
                  <span className="text-sm text-gray-500">Prescribed by {medication.prescribedBy}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Dosage</p>
                    <p className="font-medium text-gray-800">{medication.dosage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">For</p>
                    <p className="font-medium text-gray-800">{medication.prescribedFor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-gray-800">
                      {new Date(medication.startDate).toLocaleDateString('en-IN')} - {new Date(medication.endDate).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Medical Visits */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-green-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Recent Medical Visits</h3>
          </div>
          <div className="space-y-4">
            {medicalData.recentVisits.map((visit, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{visit.diagnosis}</h4>
                    <p className="text-sm text-gray-600">{visit.department} - {visit.doctor}</p>
                  </div>
                  <span className="text-sm text-gray-500">{new Date(visit.date).toLocaleDateString('en-IN')}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Treatment</p>
                    <p className="font-medium text-gray-800">{visit.treatment}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Follow-up</p>
                    <p className="font-medium text-gray-800">{new Date(visit.followUp).toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vaccination History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaSyringe className="text-indigo-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Vaccination History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Vaccine</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Doses</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Last Dose</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Next Due</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {medicalData.vaccinations.map((vaccine, index) => {
                  const statusInfo = getVaccinationStatus(vaccine.nextDue);
                  return (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">{vaccine.vaccine}</td>
                      <td className="py-3 px-4 text-center text-gray-700">{vaccine.doses}</td>
                      <td className="py-3 px-4 text-center text-gray-700">
                        {new Date(vaccine.lastDose).toLocaleDateString('en-IN')}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700">
                        {vaccine.nextDue === 'N/A' ? 'N/A' : new Date(vaccine.nextDue).toLocaleDateString('en-IN')}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                          {statusInfo.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <div className="flex items-center mb-6">
            <FaHeartbeat className="text-red-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Emergency Contact</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Contact Name</p>
              <p className="text-lg font-semibold text-gray-800">{medicalData.personalInfo.emergencyContact.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Relation</p>
              <p className="text-lg font-semibold text-gray-800">{medicalData.personalInfo.emergencyContact.relation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="text-lg font-semibold text-gray-800">{medicalData.personalInfo.emergencyContact.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default MedicalRecords;
