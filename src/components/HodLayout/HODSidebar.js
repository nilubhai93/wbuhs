import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

const HODSidebar = ({
  HODData,
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Menu items configuration (excluding logout)
const menuItems = [
{ path: "/hod/dashboard", label: "Dashboard", icon: "📊" },
{ path: "/hod/manage-student", label: "Manage Students", icon: "👥" },
{ path: "/hod/manage-teacher", label: "Manage Teachers", icon: "👨‍🏫" },
{ path: "/hod/department-info", label: "Department Info", icon: "🏢" },
{ path: "/hod/profile", label: "HOD Profile", icon: "👤" },
{ path: "/hod/reports", label: "Reports", icon: "📈" }
];




  // Get user initials
  const getUserInitials = (name) => {
    if (!name) return 'MS';
    const names = name.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    if (isMobileOrTablet) {
      setIsSidebarOpen(false);
    }
  };

  // Check if current path is active
  const isActive = (path) => {
    return window.location.pathname === path;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOrTablet && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1000] transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          ${isMobileOrTablet ? 'w-[280px]' : 'w-[300px]'}
          bg-gradient-to-b from-white to-[#f8faff]
          p-6
          fixed
          ${isMobileOrTablet ? (isSidebarOpen ? 'left-0' : '-left-[280px]') : 'left-0'}
          top-0
          h-screen
          ${isMobileOrTablet ? 'shadow-[0_0_30px_rgba(0,0,0,0.3)]' : 'shadow-[4px_0_20px_rgba(21,101,192,0.15)]'}
          transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          z-[1001]
          overflow-y-auto
          ${isMobileOrTablet ? '' : 'border-r border-[rgba(21,101,192,0.1)]'}
          backdrop-blur-[10px]
          flex flex-col
        `}
      >
        {/* Mobile Close Button */}
        {isMobileOrTablet && (
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-[1002]"
            aria-label="Close menu"
          >
            <FaTimes className="text-xl text-gray-600" />
          </button>
        )}
        
        {/* User Info */}
        <div className="text-center py-6 border-b-2 border-gradient mb-6 mt-4 relative flex-shrink-0">
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-gradient-to-r from-[#1565c0] via-[#42a5f5] to-[#1565c0] rounded-sm"></div>

          {/* User Avatar */}
          <div className="relative w-[90px] h-[90px] mx-auto mt-4 mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#42a5f5] to-[#1565c0] rounded-full opacity-70"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-[#1565c0] to-[#42a5f5] flex items-center justify-center text-3xl font-bold text-white shadow-[0_8px_25px_rgba(21,101,192,0.3)] transition-all duration-300 z-[2]">
              {getUserInitials(HODData?.name)}
            </div>
          </div>

          {/* User Details */}
          <h3 className="m-0 mb-2 text-[#1a237e] text-lg font-semibold text-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
            {HODData?.name || 'HOD Name'}
          </h3>
          <p className="m-0 mb-1 text-[#546e7a] text-sm font-medium">
            {HODData?.HODId || 'HOD ID'}
          </p>
          <p className="m-0 text-[#1565c0] text-[0.85rem] font-semibold uppercase tracking-wider">
            {HODData?.year || 'Year'}
          </p>
        </div>

        {/* Sidebar Menu */}
        <nav className="m-0 p-0 flex-1">
          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            {menuItems.map((item, index) => {
              const active = isActive(item.path);
              const isHovered = hoveredItem === item.label;
              
              return (
                <li key={index}>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`Navigate to ${item.label}`}
                    className={`
                      flex items-center px-6 py-4
                      ${(active || isHovered) ? 'text-white' : 'text-[#37474f]'}
                      rounded-xl
                      transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${(active || isHovered) 
                        ? 'bg-gradient-to-br from-[#1565c0] to-[#42a5f5]' 
                        : 'bg-transparent'
                      }
                      ${(active || isHovered) 
                        ? 'translate-x-2 scale-[1.02]' 
                        : 'translate-x-0 scale-100'}
                      cursor-pointer select-none relative
                      ${(active || isHovered) 
                        ? 'shadow-[0_6px_20px_rgba(21,101,192,0.3)]' 
                        : 'shadow-none'
                      }
                      ${(active || isHovered) 
                        ? 'border-none' 
                        : 'border border-transparent'}
                      overflow-hidden min-h-[56px]
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.path);
                    }}
                    onMouseEnter={() => {
                      if (!active) {
                        setHoveredItem(item.label);
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }
                    }}
                  >
                    {/* Hover Background Effect */}
                    {isHovered && !active && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(21,101,192,0.1)] to-[rgba(66,165,245,0.1)] rounded-xl z-[1] animate-fadeIn" />
                    )}

                    {/* Icon */}
                    <span 
                      className={`
                        text-2xl mr-5 flex-shrink-0 z-[2]
                        transition-all duration-300
                        ${(active || isHovered) ? 'scale-110' : 'scale-100'}
                      `}
                    >
                      {item.icon}
                    </span>

                    {/* Label */}
                    <span className="font-semibold text-[0.95rem] z-[2] tracking-wide antialiased">
                      {item.label}
                    </span>

                    {/* Active Indicator */}
                    {active && (
                      <div className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full z-[2]" />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button - Fixed at bottom */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <div
            role="button"
            tabIndex={0}
            aria-label="Logout"
            className={`
              flex items-center px-6 py-4 text-white
              rounded-xl
              transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
              bg-gradient-to-br from-[#e53935] to-[#c62828]
              cursor-pointer select-none relative
              shadow-[0_6px_20px_rgba(211,47,47,0.4)]
              overflow-hidden min-h-[56px]
              hover:bg-gradient-to-br hover:from-[#d32f2f] hover:to-[#b71c1c]
              hover:translate-x-2 hover:scale-[1.02]
              hover:shadow-[0_8px_25px_rgba(211,47,47,0.5)]
            `}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
            onMouseEnter={() => {
              setHoveredItem('Logout');
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('/');
              }
            }}
          >
            {/* Icon */}
            <span className="text-2xl mr-5 flex-shrink-0 z-[2]">
              <MdLogout/>
            </span>

            {/* Label */}
            <span className="font-semibold text-[0.95rem] z-[2] tracking-wide antialiased">
              Logout
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HODSidebar;