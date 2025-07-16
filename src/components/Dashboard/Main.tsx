import { useState } from "react";
import Aside from "./Aside";
import Section from "./Section";
import { Genre } from "../../hooks/useGenre";
import { Platform } from "../../hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const Main = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectedGenre = (genre: Genre) =>
    setGameQuery({ ...gameQuery, genre });
  const onSelectPlatform = (platform: Platform) =>
    setGameQuery({ ...gameQuery, platform });

  return (
    <div className="flex h-full w-full mt-5">
      <Aside
        onSelectedGenre={onSelectedGenre}
        selectedGenre={gameQuery.genre}
      />
      <Section onSelectPlatform={onSelectPlatform} gameQuery={gameQuery} />
    </div>
  );
};

export default Main;
