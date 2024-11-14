// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../Helper/Helper";


// const initialState={
//     pic:"",
//     status:""
// }

// export const prof_pic=createAsyncThunk(
//     "profile_pic",
//     async(formData)=>{
//         let res=await axiosInstance.get('/user/profile-details',formData)
//         let resData=res?.data
//         return resData
//     }
// )


// export const profileSlice=createSlice({
//     name:"profile",
//     initialState,
//     reducers:{},
//     extraReducer:(builder)=>{
//         builder
//         .addCase(prof_pic.pending,(state,{payload})=>{
//             state.status="rejected"
//         })
//         .addCase(prof_pic.fulfilled,(state,{payload})=>{
//             state.status="fuilfilled"
//             state.pic=payload.data;
//         })
//         .addCase(prof_pic.rejected,(state,{payload})=>{
//             state.status="rejected"
//         })
//     }
// })



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
    upload_status: "idle",
    profile: {},
}

export const profileDetails = createAsyncThunk("/user/profile-details", 
    async() => {
    let response = await axiosInstance.get(`/user/profile-details`);
    let res = response?.data;
    return res;
});

export const ProfileSlice = createSlice({
    name:"Profile",
    initialState,
    extraReducers:(builder) => {
            builder
            .addCase(profileDetails.pending, (state, {payload}) => {
                state.upload_status = "loading";
            })
            .addCase(profileDetails.fulfilled, (state, {payload}) => {
                state.upload_status = "success";
                state.profile = payload;
            })
            .addCase(profileDetails.rejected, (state, {payload}) => {
                state.upload_status = "error.message";
            })
    }
});

export default ProfileSlice;
