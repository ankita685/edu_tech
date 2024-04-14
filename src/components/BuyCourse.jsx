// BuyCourse.jsx
import React, { useState } from 'react';
import PaymentForm from './PaymentForm';

export const BuyCourse = ({ courseId }) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleBuyClick = () => {
    setShowPaymentForm(true); // Show the payment form when Buy button is clicked
  };

  return (
    <div>
      <button onClick={handleBuyClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Buy Course
      </button>
      {showPaymentForm && <PaymentForm courseId={courseId} />}
    </div>
  );
};
