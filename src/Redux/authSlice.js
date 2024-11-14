import axios from "axios";
import axiosInstance from "../Helper/Helper";
import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

const initialState={
    status:"",
    isinRegistration:false,
    isLoggedIn:false,
    redirectlogin:null,
    redirectHome:null
}

export const register=createAsyncThunk(
    "register",

    async(formData)=>{
        let res=await axiosInstance.post('/user/signup',formData)
        let resData=res?.data

        return resData
    }
)

export const login=createAsyncThunk(
    "login",
    async (formData)=>{
        let res=await axiosInstance.post('/user/signin',formData)
        let resData=res?.data
        return resData
    }
)

export const loginSlice=createSlice({
    name:"loginSlice",
    initialState,

    reducers:{
        reset_redirectLogin:(state,{payload})=>{
            state.redirectlogin=payload
            state.isinRegistration=false
        },
        check_token:(state,{payload})=>{
            let token=localStorage.getItem("token")
            if(token!==null && token!==undefined){
                state.isLoggedIn=true
            }
        },
        // check_myname : (state, {payload})=>{
        //     let name = localStorage.getItem("first_name");
        //     if(name !== null && name !== undefined){
        //       state.isLoggedIn = true;
        //     }
        //   },
        reset_redirectHome:(state,{payload})=>{
            
            state.redirectHome=false;
        },
        logout:(state,{payload})=>{
            localStorage.removeItem("first_name")
            localStorage.removeItem("last_name")
            localStorage.removeItem("token")
            state.isLoggedIn=false
        }
    },
    extraReducers:(builder)=>{
        builder
        
        .addCase(register.fulfilled,(state,{payload})=>{
            if(payload.status===200){
                state.status="fulfilled"
                localStorage.setItem("first_name",payload?.data.first_name)
                localStorage.setItem("last_name",payload?.data.last_name)
                state.isinRegistration=true
                state.redirectlogin='/login'
            }else{
                state.isinRegistration=false
            }
        })
        .addCase(register.pending,(state,{payload})=>{
            state.status="pendind"
        })
        .addCase(register.rejected,(state,{payload})=>{
            state.status="rejected"
        })
        .addCase(login.fulfilled,(state,{payload})=>{
            if(payload.status===200){
                state.status='fulfilled'
                state.isLoggedIn=true
                localStorage.setItem("token",payload.token)
                localStorage.setItem("first_name",payload.data.first_name)
                localStorage.setItem("last_name",payload.data.last_name)
                localStorage.setItem("email",payload.data.email)
                state.redirectHome="/"
            }else{
                state.redirectHome="/login"
                state.isLoggedIn=false
            }
        })
        .addCase(login.pending,(state,{payload})=>{
            state.status="pending"
        })
        .addCase(login.rejected,(state,{payload})=>{
            state.status="rejected"
        })
    }
})

export const {
    reset_redirectHome,reset_redirectLogin,logout,check_token
}=loginSlice.actions