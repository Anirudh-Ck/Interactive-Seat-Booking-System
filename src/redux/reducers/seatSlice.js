import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSeats: [],
  totalCost: 0,
  error: "",
  pricing: {
    A: 200, // Platinum
    B: 200, // Platinum
    C: 150, // Gold
    D: 150, // Gold
    E: 100, // Silver
    F: 100, // Silver
  },
  selectedSeatCount: {
    Platinum: 0,
    Gold: 0,
    Silver: 0,
  },
};

const seatSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    toggleSeatSelection: (state, action) => {
      const seat = action.payload;
      const row = seat.charAt(0); // Extract row (A, B, C, etc.)
      const seatPrice = state.pricing[row];

       // Determine category
      let category = "";
      if (seatPrice === 200) category = "Platinum";
      else if (seatPrice === 150) category = "Gold";
      else if (seatPrice === 100) category = "Silver";

      
      if (state.selectedSeats.includes(seat)) {
        // Remove seat and subtract price
        state.selectedSeats = state.selectedSeats.filter((s) => s !== seat);
        state.totalCost -= seatPrice;
        state.selectedSeatCount[category] -= 1;
        state.error = "";
      } else {
        if(state.selectedSeats.length >= 8){
            state.error = "You can only select up to 8 seats"
        }else{
            // Add seat and add price
            state.selectedSeats.push(seat);
            state.totalCost += seatPrice;
            state.selectedSeatCount[category] += 1;
            state.error ="";
        }
       
      }
    },
  },
});

export const { toggleSeatSelection } = seatSlice.actions;
export default seatSlice.reducer;
