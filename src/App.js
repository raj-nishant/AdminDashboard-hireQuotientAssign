import React from "react";
import Body from "./components/Body";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Body />
        <ToastContainer autoClose={1000} />
      </div>
    </div>
  );
}

export default App;
