import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        addLanguageCode:(state,action)=>{
           state.lang = action.payload;
        }
    }
})

export const {addLanguageCode} = configSlice.actions;
export default configSlice.reducer;