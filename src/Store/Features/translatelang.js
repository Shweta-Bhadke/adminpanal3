import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang:{
    newlang:"en"
  },
};
export const LangSlice = createSlice({
  name: "changeLang",
  initialState,
  reducers: {
    setLangEng: (state,action) => {
      state.lang = action.payload;
      
      
    },
  },
});
export const { setLangEng } = LangSlice.actions;
export default LangSlice.reducer;
