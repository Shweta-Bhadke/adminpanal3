import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login:{
    checklogin:false
  },
};
export const LoginScilce = createSlice({
  name: "checkLogin",
  initialState,
  reducers: {
    setLogin: (state,action) => {
      state.login = action.payload;
      
      
    },
  },
});
export const { setLogin } = LoginScilce.actions;
export default LoginScilce.reducer;
