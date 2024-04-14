import React from "react";
import PaymentForm from "./PaymentForm";
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Purchases from "./Purchases";

export const Courses = () => {
    const [purchasedCourses, setPurchasedCourses] = useState([]);

  const handlePurchase = (courseId) => {
    // Find the course with the given courseId
    const course = courses.find(course => course.id === courseId);
    console.log("Purchased course:", course); // Add this line to check
    // Add the purchased course to the purchasedCourses state
    setPurchasedCourses(prevCourses => [...prevCourses, course]);
  };
    
  const courses = [
    {
      id: 1,
      title: "Mern course",
      description: "buy now for only $1",
      image: "./public/images/p1.jpg",
    },
    { 
      id: 2,
      title: "Front-End course",
      description: " Discount price:$5",
      image: "./public/images/a1.jpg",
    },
    {
      id: 3,
      title: "Full stack course",
      description: " Discount price:$4",
      image: "./public/images/a2.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mt-8 mb-4">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {courses.map(course => (
          <div key={course.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
             {/* <Courses courses={courses} onPurchase={handlePurchase} />  */}
             <BuyCourse courseId={course.id} onPurchase={handlePurchase} />
            
           
            
         
            </div>
          </div>
        ))}
      </div>
      {/* <Purchases courses={purchasedCourses} />  */}
    </div>
  );
};


const BuyCourse = ({ courseId, onPurchase }) => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      // Check if the URL contains a query parameter for showing the payment form
      const params = new URLSearchParams(location.search);
      if (params.get("showPaymentForm") === "true") {
        setShowPaymentForm(true);
      }
    }, [location.search]);
  
    const handleBuyClick = () => {
      // Navigate to the PaymentForm route with a query parameter to show the form
      window.location.href = `/payment?courseId=${courseId}&showPaymentForm=true`;
      // Pass courseId to onPurchase
      onPurchase(courseId);
    };
  
    return (
      <div>
        {/* Enclose the elements within a parent div */}
        <button
          onClick={handleBuyClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Buy Course
        </button>
        {showPaymentForm && <PaymentForm courseId={courseId} />}
      </div>
    );
  };

export default BuyCourse;


// Courses.jsx
