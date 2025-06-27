import { Outlet } from "react-router"; // Make sure to import from 'react-router-dom' and not 'react-router'
import Sidebar from "../../Components/Dashboard/Sidebar";
import TopBar from "../../Components/Dashboard/TopBar";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for large screens */}
      <div className="hidden md:flex w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar (Drawer style) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div
            className="w-64 bg-gray-800 h-full p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside sidebar
          >
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto ">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-6">
          <div className="mt-6  p-6 rounded-lg shadow-lg">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
