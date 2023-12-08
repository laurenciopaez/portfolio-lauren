import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content: {
    }
}

const timelineSlice = createSlice({
    name: "timeline",
    initialState,
    reducer: {},
    extraReducers: (builder) => {

    }
})

export default timelineSlice.reducer;