import { useState } from "react";
import "./App.css";
import Main from "./components/Dashboard/Main";
import Navbar from "./components/Dashboard/Navbar";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectedGenre = (genre: Genre) =>
    setGameQuery({ ...gameQuery, genre });
  const onSelectPlatform = (platform: Platform) =>
    setGameQuery({ ...gameQuery, platform });

  const onChangeOrder = (sortOrder: string) =>
    setGameQuery({ ...gameQuery, sortOrder });
  return (
    <div className="app bg-slate-900 text-white">
      <div className="flex flex-col min-h-screen">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
        <Main
          gameQuery={gameQuery}
          onSelectGenre={onSelectedGenre}
          onSelectPlatform={onSelectPlatform}
          onChangeOrder={onChangeOrder}
          sortOrder={gameQuery.sortOrder}
        />
      </div>
    </div>
  );
}

export default App;
