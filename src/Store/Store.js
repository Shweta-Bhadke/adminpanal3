import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "./Features/DarkModeSlice";
import LoginScilce  from "./Features/login";
import  LangSlice  from "./Features/translatelang";
export const store = configureStore({
  reducer: {
    darkMode: DarkModeSlice,
    handleLang:LangSlice,
    login:LoginScilce
  },
});
