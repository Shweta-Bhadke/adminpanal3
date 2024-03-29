import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import { BrowserRouter } from "react-router-dom";
// import Asidebar from "./Components/Asidebar";
import './Components/translate'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
    <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<div>Loading-------</div>}>
      <App />
      </Suspense>
    </Provider>
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
