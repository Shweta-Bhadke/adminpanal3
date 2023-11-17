import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Components/Header";
// import { toggleDarkMode } from "../Store/Features/DarkModeSlice";
import { Route,Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          background: mode ? "black" : "white",
          color: mode ? "white" : "black",
        }}
      >
       
        
      </div>
   
      <Routes>
   
   <Route path='/' element={ <Header/>}></Route>
   <Route path='/login' element={ <Login/>}></Route>
 </Routes>
    </>
  );
}

export default App;
