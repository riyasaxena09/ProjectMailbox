import { createSlice } from "@reduxjs/toolkit";

const initialState1={ islogin:false,des:[],sent:[],ans:" ",ans1:"",count:0};
const LoginSlice=createSlice({
    name:'cart',
    initialState:initialState1,
    reducers:{
     login(state){
state.iscart=!state.iscart;
     },
     add:(state, action) => {
        state.des.push(...action.payload);
         },
    //     mail:(state,action)=>{
//state.mail=action.payload;
  //       },
  sentbox:(state,action)=>{
    state.sent.push(...action.payload);
  },
         showmail:(state,action)=>{
          state.ans=action.payload;
         },
         deleteItem: (state, action) => {
             state.des=[];
             },
             deleteItemInbox: (state, action) => {
                state.sent=[];
                },
                showmailInbox:(state,action)=>{
                    state.ans1=action.payload;
                   },
                   countnum:(state,action)=>{
                    state.count=action.payload;           }
    }
});

export const LoginActions=LoginSlice.actions;
export default LoginSlice;
