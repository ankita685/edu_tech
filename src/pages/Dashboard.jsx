import React, { useState } from 'react';
import { Appbar } from '../components/Appbar';
import { Balance } from '../components/Balance';
import { Link } from 'react-router-dom';
import { Courses } from '../components/Courses';
import Purchases from '../components/Purchases';


 export const Dashboard = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('courses');
    const [purchasedCourses, setPurchasedCourses] = useState([]);
  
    const handleMenuItemClick = (menuItem) => {
      setSelectedMenuItem(menuItem);
    };
  
    const handlePaymentSuccess = (courseId) => {
      setPurchasedCourses(prevCourses => [...prevCourses, courseId]);
    };

  return (
    <div className="flex">
      {/* Side Navbar */}
      <div className="w-1/5 h-screen bg-gray-200">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
          <ul>
            <li
              className={`py-2 cursor-pointer ${
                selectedMenuItem === 'courses' ? 'font-bold' : ''
              }`}
              onClick={() => handleMenuItemClick('courses')}
            >
              <Link to="/dashboard">Home</Link>
            </li>
            <li
              className={`py-2 cursor-pointer ${
                selectedMenuItem === 'purchases' ? 'font-bold' : ''
              }`}
              onClick={() => handleMenuItemClick('purchases')}
            >
              <Link to="/dashboard">Purchases</Link>
            </li>
            <li
              className={`py-2 cursor-pointer ${
                selectedMenuItem === 'logout' ? 'font-bold' : ''
              }`}
              onClick={() => handleMenuItemClick('logout')}
            >
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5">
        <Appbar />
        <div className="m-8">
          {/* {selectedMenuItem === 'balance' && <Balance />} */}
          {selectedMenuItem === 'courses' && <Courses />}
          {selectedMenuItem === 'purchases' && <Purchases courses={purchasedCourses} />}

           {/* <PaymentForm onPaymentSuccess={handlePaymentSuccess} courseId={123} /> */}
        </div>
      </div>
    </div>
  );
};


