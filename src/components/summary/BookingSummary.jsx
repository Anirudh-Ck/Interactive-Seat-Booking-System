import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { resetSeats } from "../../redux/reducers/seatSlice";

Modal.setAppElement("#root"); // Set the root for accessibility
function BookingSummary() {
    const { selectedSeats, totalCost, pricing, error, selectedSeatCount } = useSelector((state) => state.seats);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBooking = () => {
      setIsModalOpen(true);
    };

    const handleGoToHome = () => {
        dispatch(resetSeats()); // Clear Redux state
        navigate("/"); // Navigate to home
    };


  return (
    <div className="p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 font-sans">
        <h1 className="text-2xl font-bold">Booking Summary</h1>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">{selectedSeats.length > 1 ? selectedSeats.length + " TICKETS" : selectedSeats.length + " TICKET"}</span>
          <span className="text-lg font-bold">₹{totalCost}</span>
        </div>
        <div className="mt-2 text-md flex flex-col">
                    <span className="text-gray-800">Platinum: {selectedSeatCount.Platinum} × 200 | </span>
                    <span className="text-gray-800">Gold: {selectedSeatCount.Gold} × 150 | </span>
                    <span className="text-gray-800">Silver: {selectedSeatCount.Silver} × 100</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">
            Food & Beverages <span className="text-blue-500">Add</span>
          </span>
          <span className="text-lg font-bold">₹0</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">Taxes & Fees</span>
          <span className="text-lg font-bold">₹0</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-xl font-bold">  
          <span>Total</span>
          <span>₹{totalCost}</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-bold hover:cursor-pointer" onClick={handleBooking}>
          Book Now ₹{totalCost}
        </button>
        <p className="text-gray-500 text-center mt-2 text-sm">
          By continuing to Payment, you hereby agree with{" "}
          <span className="text-blue-500">T&C</span>
        </p>
      </div>

          {/* Modal for Booking Confirmation */}
          <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-500">Booking Confirmed!</h2>
          <p className="mt-2 text-gray-600">Your booking has been successfully processed.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer" onClick={handleGoToHome}>
            Go to Home page 
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default BookingSummary;
