import React from 'react';
import DashboardSidebar from './dashboardSidebar';
import BarChart from './barchart';


const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <DashboardSidebar />
      {/* Main Content Area */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
        <div className="bg-white p-6 rounded shadow-lg">
          <p className="text-gray-700">This is where you will manage your food items, view statistics, and handle other tasks.</p>
        </div>
        < BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
