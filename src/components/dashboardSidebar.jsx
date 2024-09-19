import React from 'react'
import { Link } from 'react-router-dom';


function dashboardSidebar() {
  return (
    <div className='bg-slate-300'>
       <div className="w-1/4 p-4">
        <h2 className="text-2xl font-bold  mb-4">Dashboard</h2>
        <ul className="space-y-3">
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-300 rounded">Dashboard Home</Link>
          </li>
          <li>
            <Link to="/dashboard/food" className="block py-2 px-4 hover:bg-gray-300 rounded">Food</Link>
          </li>
          <li>
            <Link to="/dashboard/insertfood" className="block py-2 px-4 hover:bg-gray-300 rounded">Insert Food</Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>

    </div>
  )
}

export default dashboardSidebar
