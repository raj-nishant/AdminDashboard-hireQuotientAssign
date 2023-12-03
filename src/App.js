import React from "react";
import UserManagementInterface from "./components/UserManagementInterface";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <UserManagementInterface />
        <ToastContainer autoClose={1000} />
      </div>
    </div>
  );
}

export default App;
