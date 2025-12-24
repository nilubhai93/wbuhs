import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [portal, setPortal] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const portals = [
    { value: 'admin', label: 'Admin' },
    { value: 'faculty', label: 'Faculty' },
    { value: 'principal', label: 'Principal' },
    { value: 'hod', label: 'HOD' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'student', label: 'Student' },
    { value: 'parent', label: 'Parent' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!portal) {
      alert('Please select a portal');
      return;
    }

    // Navigate to respective dashboard based on portal selection
    navigate(`/${portal}/dashboard`);
  };

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
            <button 
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center px-6 py-20">
        <div className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#1565c0] to-[#42a5f5] rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-5xl">🔐</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
            <p className="text-gray-600">Sign in to access your portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Choose Portal Dropdown */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Chose
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors appearance-none bg-white"
                  value={portal}
                  onChange={(e) => setPortal(e.target.value)}
                  required
                >
                  <option value="">Select Portal</option>
                  {portals.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  {portal ? (
                    <span className="text-green-500 text-xl">✓</span>
                  ) : (
                    <span className="text-gray-400">▼</span>
                  )}
                </div>
              </div>
            </div>

            {/* ID Field */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Id
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter your ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                pass
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors pr-12"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1565c0] to-[#42a5f5] text-white font-bold py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;