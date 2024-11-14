import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState={
    status:"",
    blog:[],
    details:{},
    totalpage:""
}


export const create=createAsyncThunk(
    "create",
    async(formData)=>{
        let res=await axiosInstance.post('/product/create',formData)
        let resData=res?.data

        return resData

    }
)

export const read=createAsyncThunk(
    "read",

    async(formData)=>{
        let res=await axiosInstance.post('/product/list',formData)
        let resData=res?.data

        return resData
    }
)

export const detail= createAsyncThunk(
    "details",

    async(id)=>{
        let res=await axiosInstance.get(`/product/detail/${id}`)
        let resData=res.data

        return resData
    }
)

export const update=createAsyncThunk(
    "update",
    async(formData)=>{
        let res=await axiosInstance.post('/product/update',formData)
        let resData=res.data
        
        return resData
    }
)

export const deleted= createAsyncThunk(
    "delete",
    async(formData)=>{
        let res=await axiosInstance.post('/product/remove',formData)
        let resData=res.data

        return resData
    }
)

export const crudSlice=createSlice({
    name:"crudSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(create.pending,(state,{payload})=>{
            state.status="panding"
        })
        .addCase(create.fulfilled,(state,{payload})=>{
            state.status="fulfilled"
        })
        .addCase(create.rejected,(state,{payload})=>{
            state.status="rejected"
        })

        .addCase(read.pending,(state,{payload})=>{
            state.status="pending"
        })
        .addCase(read.fulfilled,(state,{payload})=>{
            state.status="fulfilled"
            state.blog=payload.data
            state.totalpage=payload.totalPages
        })
        .addCase(read.rejected,(state,{payload})=>{
            state.status="rejected"
        })

        .addCase(detail.pending,(state,{payload})=>{
            state.status="pending"
        })
        .addCase(detail.fulfilled,(state,{payload})=>{
            state.status="fulfilled"
            state.details=payload.data
            console.log(state.details,"harshhh")
        })
        .addCase(detail.rejected,(state,{payload})=>{
            state.status="rejected"
        })

        .addCase(update.pending,(state,{payload})=>{
            state.status="pending"
        })
        .addCase(update.fulfilled,(state,{payload})=>{
            state.status="fulfilled"
        })
        .addCase(update.rejected,(state,{payload})=>{
            state.status="rejected"
        })

        .addCase(deleted.pending,(state,{payload})=>{
            state.status="pending"
        })
        .addCase(deleted.fulfilled,(state,{payload})=>{
            state.status="fulfilled"
        })
        .addCase(deleted.rejected,(state,{payload})=>{
            state.status="rejected"
        })
    }
})