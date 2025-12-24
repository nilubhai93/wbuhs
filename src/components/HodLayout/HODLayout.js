import React, { useState } from 'react';
import HODHeader from './HODHeader';
import HODSidebar from './HODSidebar';

const HODLayout = ({ children, onNavigate, currentPage, userInfo }) => {
  // true = sidebar hidden (mobile default), false = sidebar visible
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`${!collapsed ? 'md:ml-[300px]' : ''} flex flex-col min-h-screen bg-gray-50`}>

      {/* Sidebar */}
      <HODSidebar
        HODData={userInfo}
        isSidebarOpen={!collapsed}
        setIsSidebarOpen={(value) => setCollapsed(!value)}
      />

      <div className="flex flex-col md:ml-[300px] ">

        {/* Header */}
        <HODHeader
          collapsed={collapsed}
          onToggle={setCollapsed}
          userInfo={userInfo}
        />

        {/* Main Content */}
        <main className="flex-1 w-full overflow-y-auto transition-all duration-300 pt-24 md:pt-44">
          {children}
        </main>



      </div>


    </div>
  );
};

export default HODLayout;