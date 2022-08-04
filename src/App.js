import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Navbar from './components/Navbar'
import Register_Boot from './components/Register_Boot'
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Register_Boot/>
    </div>
  );
}
