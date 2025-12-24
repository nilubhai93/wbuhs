import React from 'react';
import { FaStethoscope, FaBars } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';

const AdminHeader = ({ collapsed, onToggle, userInfo }) => {
  return (
    <header className=" bg-gradient-to-br from-[#1565c0] to-[#42a5f5] text-white p-4 flex items-center justify-between fixed w-full top-0 z-50 shadow-md h-16 md:h-36">
      <div className="flex items-center gap-6">
        {/* Hamburger menu - visible on mobile */}
        <button
          onClick={() => onToggle(!collapsed)}
          className="p-2 hover:bg-blue-700 rounded-lg transition-colors md:hidden"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Logo */}
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg md:w-24 md:h-24 md:ml-16 ">
          <FaUserDoctor className="text-blue-600 text-2xl md:text-5xl" />
        </div>


        {/* Title */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold whitespace-nowrap">
            Medical College
          </h1>
          <div className="hidden md:block h-6 w-px bg-white/30"></div>
          <p className="hidden md:block text-base">
            Admin Portal
          </p>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
