import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
       value: {
          toggle: false,
       },
    },
    reducers: {
        login: (state, action) => {
            console.log(state.value)
            console.log(action)
            state.value = action.payload
        }
    },
 });
 
 export default toggleSlice.reducer;