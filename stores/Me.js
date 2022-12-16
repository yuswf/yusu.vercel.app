import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: {},
};

export const meSlice = createSlice({
    name: '_',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const {setData} = meSlice.actions;
export default meSlice.reducer;
