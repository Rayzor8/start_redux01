import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = '';

export const themeSlice = createSlice({
   name: 'theme',
   initialState: { value: initialStateValue },
   reducers: {
        changeTheme: (state, action) => {
            console.log(action);
            state.value = action.payload;
        }
   },
});

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;
