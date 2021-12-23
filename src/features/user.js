import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      value: {
         name: '',
         age: 0,
         email: '',
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


// export reducers

export default userSlice.reducer;