import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./authSlice";
import { ProfileSlice } from "./profileSlice";
// import { profileSlice } from "./profileSlice";
import { crudSlice } from "./crud";

export const store=configureStore({
    reducer:{
        auth:loginSlice.reducer,
        // profile:profileSlice.reducer,
        profile:ProfileSlice.reducer,
        crud:crudSlice.reducer
    }
})