import { configureStore } from "@reduxjs/toolkit";
import timelineReducer from "./features/timelineSlice";

export const store = configureStore({
    reducer: {
        content: timelineReducer,
    }
});
