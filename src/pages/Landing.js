import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1565c0] to-[#42a5f5]">
      {/* Header */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1565c0] to-[#42a5f5] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">WBUHS</h1>
                <p className="text-sm text-blue-600">West Bengal University of Health Sciences</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-4xl">
          <div className="w-32 h-32 bg-gradient-to-br from-[#1565c0] to-[#42a5f5] rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <span className="text-6xl">🎓</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to WBUHS Portal
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Access your personalized dashboard for students, teachers, principals, and administrators.
            Manage your academic journey with ease and efficiency.
          </p>

          {/* Login Button */}
          <button
            onClick={() => navigate('/login')}
            className="bg-white text-[#1565c0] font-bold py-4 px-12 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-white/20"
          >
            Login to Your Portal
          </button>

          {/* Student Registration Button */}
          <button
            onClick={() => navigate('/student/registration')}
            className="bg-transparent border-2 border-white text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-white/20 mt-6"
          >
            Student Registration
          </button>

          {/* Features Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-4">👨‍🎓</div>
              <h3 className="text-xl font-semibold mb-2">For Students</h3>
              <p className="text-white/80">Access grades, attendance, and academic records</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-semibold mb-2">For Teachers</h3>
              <p className="text-white/80">Manage classes, grades, and student progress</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold mb-2">For Administrators</h3>
              <p className="text-white/80">Oversee operations and manage the institution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
