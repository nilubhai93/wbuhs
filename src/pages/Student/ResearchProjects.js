import React from 'react';
import StudentLayout from '../../components/studentLayout/StudentLayout';
import {
  FaFlask,
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileAlt,
  FaMicroscope,
  FaAward
} from 'react-icons/fa';

const ResearchProjects = () => {
  const researchData = {
    activeProjects: [
      {
        title: 'Impact of Telemedicine on Rural Healthcare Access',
        supervisor: 'Dr. Anita Desai',
        coSupervisor: 'Dr. Ramesh Kumar',
        startDate: '2023-09-01',
        expectedEndDate: '2024-08-31',
        status: 'Active',
        progress: 75,
        funding: '₹50,000',
        publications: []
      }
    ],
    completedProjects: [
      {
        title: 'Prevalence of Diabetes in Urban Population',
        supervisor: 'Dr. Vikram Singh',
        coSupervisor: 'Dr. Priya Sharma',
        startDate: '2022-01-01',
        endDate: '2023-06-30',
        status: 'Completed',
        grade: 'A',
        funding: '₹30,000',
        publications: [
          {
            title: 'Diabetes Prevalence Study in Kolkata Metropolitan Area',
            journal: 'Journal of Community Medicine',
            year: '2023',
            doi: '10.1234/jcm.2023.001'
          }
        ]
      }
    ],
    upcomingProjects: [
      {
        title: 'AI-Driven Diagnostic Tools for Early Cancer Detection',
        supervisor: 'Dr. Sanjay Gupta',
        coSupervisor: 'Dr. Meera Patel',
        expectedStartDate: '2024-03-01',
        expectedEndDate: '2025-02-28',
        status: 'Approved',
        funding: '₹1,00,000'
      }
    ],
    researchStats: {
      totalProjects: 3,
      activeProjects: 1,
      completedProjects: 1,
      publications: 1,
      totalFunding: '₹1,80,000'
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Completed': return 'text-blue-600 bg-blue-100';
      case 'Approved': return 'text-purple-600 bg-purple-100';
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <FaCheckCircle className="text-green-500" />;
      case 'Completed': return <FaAward className="text-blue-500" />;
      case 'Approved': return <FaCheckCircle className="text-purple-500" />;
      case 'Pending': return <FaClock className="text-yellow-500" />;
      default: return <FaExclamationTriangle className="text-gray-500" />;
    }
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A': return 'text-green-600 bg-green-100';
      case 'A-': return 'text-green-500 bg-green-50';
      case 'B+': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <StudentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaFlask className="mr-3 text-indigo-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Research Projects</h2>
              <p className="text-gray-600 mt-1">Track your research activities and publications</p>
            </div>
          </div>
        </div>

        {/* Research Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaFlask className="text-blue-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Total Projects</p>
                <p className="text-2xl font-bold text-gray-800">{researchData.researchStats.totalProjects}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Active Projects</p>
                <p className="text-2xl font-bold text-gray-800">{researchData.researchStats.activeProjects}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaAward className="text-purple-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-2xl font-bold text-gray-800">{researchData.researchStats.completedProjects}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaFileAlt className="text-orange-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Publications</p>
                <p className="text-2xl font-bold text-gray-800">{researchData.researchStats.publications}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaMicroscope className="text-indigo-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Total Funding</p>
                <p className="text-lg font-bold text-gray-800">{researchData.researchStats.totalFunding}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Projects */}
        <div className="space-y-6">
          {researchData.activeProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FaFlask className="text-indigo-600 text-2xl mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      <span className="ml-2">{project.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Supervisor</p>
                  <p className="text-lg font-semibold text-gray-800">{project.supervisor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Co-Supervisor</p>
                  <p className="text-lg font-semibold text-gray-800">{project.coSupervisor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {new Date(project.startDate).toLocaleDateString('en-IN')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expected End</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {new Date(project.expectedEndDate).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Funding</p>
                  <p className="text-lg font-semibold text-green-600">{project.funding}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completed Projects */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaAward className="text-blue-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Completed Projects</h3>
          </div>
          <div className="space-y-4">
            {researchData.completedProjects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                  <div className="flex items-center space-x-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(project.grade)}`}>
                      Grade: {project.grade}
                    </span>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      <span className="ml-2">{project.status}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Supervisor</p>
                    <p className="font-medium text-gray-800">{project.supervisor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-gray-800">
                      {new Date(project.startDate).toLocaleDateString('en-IN')} - {new Date(project.endDate).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Funding</p>
                    <p className="font-medium text-green-600">{project.funding}</p>
                  </div>
                </div>

                {project.publications.length > 0 && (
                  <div>
                    <h5 className="text-md font-semibold text-gray-700 mb-2">Publications</h5>
                    <div className="space-y-2">
                      {project.publications.map((pub, pubIndex) => (
                        <div key={pubIndex} className="bg-gray-50 rounded p-3">
                          <p className="font-medium text-gray-800">{pub.title}</p>
                          <p className="text-sm text-gray-600">{pub.journal} ({pub.year})</p>
                          <p className="text-xs text-gray-500">DOI: {pub.doi}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaClock className="text-purple-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Upcoming Projects</h3>
          </div>
          <div className="space-y-4">
            {researchData.upcomingProjects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span className="ml-2">{project.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Supervisor</p>
                    <p className="font-medium text-gray-800">{project.supervisor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Co-Supervisor</p>
                    <p className="font-medium text-gray-800">{project.coSupervisor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Expected Start</p>
                    <p className="font-medium text-gray-800">
                      {new Date(project.expectedStartDate).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Funding</p>
                    <p className="font-medium text-green-600">{project.funding}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default ResearchProjects;
