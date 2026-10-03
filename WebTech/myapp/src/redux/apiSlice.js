import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:5050/user";


export const fetchData = createAsyncThunk("api/fetchdata",async()=>{
       const responce =  await axios.get(API_URL);
       return responce.data;
});

const apiSlice = createSlice({
    name:"api",
    initialState:{
        data:[],
        status:"idle", //idle,succeeded,failed
        error:null

    },
    reducers:{},
    extraReducers: (bulider)=>{

        bulider.addCase(fetchData.pending,(state)=>{
            state.status="loading..." ;

        })
        .addCase(fetchData.fulfilled,(state,action)=>{
           state.status = "Succeeded";
            state.data = action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status = "Failed";
            state.error = action.error.message;
        })
    }
})

export default apiSlice.reducer;