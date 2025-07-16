import { useState } from "react";
import "./App.css";
import Main from "./components/Dashboard/Main";
import Navbar from "./components/Dashboard/Navbar";

function App() {
  return (
    <div className="app bg-slate-900 text-white">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
