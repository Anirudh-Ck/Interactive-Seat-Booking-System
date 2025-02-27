import React from "react";
import { useSelector } from "react-redux";
import { DateTime } from 'luxon';

function TicketSummary() {
    const { selectedSeats, totalCost, pricing, error, selectedSeatCount } = useSelector((state) => state.seats);
    const currentDateTime = DateTime.now().setLocale('en-GB').toFormat('EEE, dd MMM, yyyy, HH:mm:ss');
    console.log("selectedSeats",selectedSeats.length);
    
  return (
    <div className="p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 font-sans">
        <h1 className="text-xl sm:text-2xl font-bold">Show Name</h1>
        <div className="flex space-x-2 mt-2">
          <span className="px-3 py-1 bg-gray-200 text-xs sm:text-sm rounded">Rated</span>
          <span className="px-3 py-1 bg-gray-200 text-sm rounded">
            Language
          </span>
          <span className="px-3 py-1 bg-gray-200 text-xs sm:text-sm rounded">2D</span>
        </div>
        <div className="mt-4">
          <h2 className="text-md sm:text-lg font-semibold">
            Cinepolis VIP Centre Square Mall, Ernakulam, Kochi
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            Central Mall, Mahatma Gandhi Road, Ernakulam, Kerala 682035, India
          </p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
        <div className="">
          <p className="text-md sm:text-lg font-bold">{currentDateTime}</p>
                    <div className="mt-2 text-sm sm:text-md flex flex-col">
                    <span className="text-gray-800 text-sm sm:text-md">Platinum: {selectedSeatCount.Platinum} × 200 | </span>
                    <span className="text-gray-800 text-sm sm:text-md">Gold: {selectedSeatCount.Gold} × 150 | </span>
                    <span className="text-gray-800 text-sm sm:text-md">Silver: {selectedSeatCount.Silver} × 100</span>
                    </div>
        </div>
        <div className="mt-4 flex items-center">
          <div className="bg-gray-100 p-2 sm:p-3 rounded-lg text-center">
            <p className="text-lg sm:text-xl font-bold">{selectedSeats.length}</p>
            <p className="text-gray-600 text-xs sm:text-sm">{selectedSeats.length > 1 ? "TICKETS" : "TICKET"}</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default TicketSummary;
