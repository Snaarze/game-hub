import { useState } from "react";
import "./App.css";
import Main from "./components/Dashboard/Main";
import Navbar from "./components/Dashboard/Navbar";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatforms";
import { Outlet } from "react-router-dom";

function App() {
  // const onSelectedGenre = (genre: Genre) => {
  //   setGameQuery({ ...gameQuery, genre });
  // };

  // const onSelectPlatform = (platform: Platform | undefined) => {
  //   setGameQuery({ ...gameQuery, platform });
  // };

  // const onChangeOrder = (sortOrder: string) =>
  //   setGameQuery({ ...gameQuery, sortOrder });

  return (
    <div className="app bg-slate-900 text-white">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
