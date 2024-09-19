import React, { useState, useEffect } from 'react';

import DashboardSidebar from './components/dashboardSidebar';
import DashboardFoodList from './components/dashboardFoodList';

const FoodManagement = () => {

  return (
    <div className="flex">
      <DashboardSidebar />
      <div>

      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Manage Food Items</h2>
       <DashboardFoodList />

      
      </div>

    </div>
  );
};

export default FoodManagement;
