import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
   name: '',
   age: 0,
   email: '',
};

export const userSlice = createSlice({
   name: 'user',
   initialState: {value:initialStateValue},
   reducers: {
      login: (state, action) => {
         console.log(action);
         state.value = action.payload;
      },
      logOut: (state, action) => {
         console.log(action)
         state.value = initialStateValue;
      },
   },
});



// export actions
// console.log(userSlice)
// {name: 'user', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
export const { login ,logOut} = userSlice.actions;
// export reducers
export default userSlice.reducer;
