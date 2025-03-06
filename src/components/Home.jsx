import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSeatSelection } from "../redux/reducers/seatSlice";
import { Toaster, toast } from 'sonner'
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Register from "./Register";


const rows = ["A", "B", "C", "D", "E", "F"];
const seatsPerRow = 10;
function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch();
  const { selectedSeats, totalCost, pricing, error, selectedSeatCount } = useSelector((state) => state.seats);
  const { userDetails } = useSelector((state)=> state.user)
  // console.log("userDetails",userDetails.name);
  
  const navigate = useNavigate()

  useEffect(() => {
    setIsDrawerOpen(selectedSeats.length > 0);
  }, [selectedSeats]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleBooking = () =>{
    if(userDetails?.name){
      navigate("/summary");
    }
    else{
      setShowRegister(true)
    }
  }


  // if(selectedSeats.length > 0){
  //   navigate("/booking", { replace: true });
  // }else{
  //   toast.error("You must select at least one seat to proceed!");
  // }

  return (

    <div className="flex flex-col items-center p-4 w-full ">
        <Toaster position="top-right" richColors />
    <div className="text-md sm:text-lg font-bold bg-gray-100 px-4 py-1 rounded-lg mt-2 mb-2">
      Platinum
    </div>

    
    <div className="w-full flex flex-col gap-4 items-center">
      {rows.map((row, index) => (
        <React.Fragment key={row}>
          <div className="grid grid-cols-10 gap-3 w-full max-w-3xl">
            {Array.from({ length: seatsPerRow }, (_, i) => { //[0,1,2,3,4,5,6,7,8,9]
              const seatId = `${row}${i + 1}`;// A1, A2, A3, A4, A5, A6,.....
              const isSelected = selectedSeats.includes(seatId);
              return (
                <div
                  key={seatId}
                  className={`w-full h-6 sm:h-12 flex items-center justify-center border rounded cursor-pointer text-[10px] sm:text-sm md:text-base font-semibold
                    ${isSelected ? "bg-blue-500 text-white" : getSeatColor(pricing[row])}`}
                  onClick={() => dispatch(toggleSeatSelection(seatId))}
                >
                  {seatId}
                </div>
              );
            })}
          </div>

          {/* Gold label appears BETWEEN Rows B & C */}
          {row === "B" && (
            <div className="text-md sm:text-lg font-bold mt-2 mb-2 bg-gray-100 px-4 py-1 rounded-lg">
              Gold
            </div>
          )}

          {/* Silver label appears BETWEEN Rows D & E (Above Screen) */}
          {row === "D" && (
            <div className="text-md sm:text-lg font-bold mt-2 mb-2 bg-gray-100 px-4 py-1 rounded-lg">
              Silver
            </div>
          )}
        </React.Fragment>
      ))}
    </div>

    {/* Screen Section */}
    <div className="bg-gray-300 text-center py-3 w-11/12 md:w-3/4 rounded-lg mt-8 text-md sm:text-lg font-bold">
      SCREEN THIS WAY
    </div>

    {/* Pricing Legend */}
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-400 border text-md sm:text-lg"></div> ₹100 (Silver)
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-yellow-400 border text-md sm:text-lg"></div> ₹150 (Gold)
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-300 border text-md sm:text-lg"></div> ₹200 (Platinum)
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-500 border text-md sm:text-lg"></div> Selected
      </div>
    </div>

    <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-lg border-t  p-4 flex justify-between items-center"
          >
            
                <div className="flex flex-col">
                    <div className="text-sm sm:text-lg font-bold">Total: ₹{totalCost}</div>
                    <div className="text-sm sm:text-lg font-bold">Total Selected Seats: {selectedSeats.length}</div>
                    <div className="mt-2 text-sm sm:text-md">
                    <span className="text-gray-800 text-sm sm:text-md">Platinum: {selectedSeatCount.Platinum} × 200 | </span>
                    <span className="text-gray-800 text-sm sm:text-md">Gold: {selectedSeatCount.Gold} × 150 | </span>
                    <span className="text-gray-800 text-sm sm:text-md">Silver: {selectedSeatCount.Silver} × 100</span>
                    </div>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm sm:text-lg" onClick={handleBooking}>
                        Book Tickets
                    </button>
                </div>
          </motion.div>
        )}
     </AnimatePresence>

     <div>
      {
        showRegister && <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />  // Show register modal when showRegister is true
      }
     </div>

  </div>
  );
}

const getSeatColor = (price) => {
  switch (price) {
    case 100:
      return "bg-gray-400"; // Silver
    case 150:
      return "bg-yellow-400"; // Gold
    case 200:
      return "bg-gray-300"; // Platinum
    default:
      return "bg-white";
  }
};

export default Home;
