import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userDetails : null
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers :{
        userRegister : (state,action) => {
            state.userDetails = action.payload;
        }
    }
})

export const {userRegister} = userSlice.actions
export default userSlice.reducer;