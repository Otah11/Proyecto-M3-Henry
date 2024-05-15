import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./reducer";


const store = configureStore({
    
    reducer: {
        userLogged: userSlice.reducer}
})

export default store