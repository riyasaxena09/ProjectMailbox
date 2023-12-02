import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./loginredux";
const store=configureStore({
    reducer:{com1:LoginSlice.reducer},
});
export default store; 