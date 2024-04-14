// PaymentForm.jsx

import React, { useState } from 'react';

const PaymentForm = ({ onPaymentSuccess, courseId }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate payment processing using setTimeout
      setTimeout(() => {
        // Assume payment is successful
        setPaymentResult({ success: true, message: 'Payment successful!' });
        setLoading(false);
        // Call the onPaymentSuccess callback with the courseId
        onPaymentSuccess(courseId);
      }, 2000);
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentResult({ success: false, message: 'Payment failed. Please try again.' });
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Secure Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Payment form fields */}
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Expiry (MM/YY)"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
      {/* Payment result message */}
      {paymentResult && (
        <div className={`mt-4 text-center ${paymentResult.success ? 'text-green-600' : 'text-red-600'}`}>
          {paymentResult.message}
        </div>
      )}
    </div>
  );
};

export default PaymentForm;






