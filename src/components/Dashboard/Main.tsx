import { useState } from "react";
import Aside from "./Aside";
import Section from "./Section";
import { Genre } from "../../hooks/useGenre";
import { platform } from "../../hooks/useGame";
import { Platform } from "../../hooks/usePlatforms";
const Main = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [platform, setPlatform] = useState<platform | null>(null);

  const onSelectedGenre = (genre: Genre) => setSelectedGenre(genre);
  const onSelectPlatform = (g: Platform) => setPlatform(g);
  return (
    <div className="flex h-full w-full mt-5">
      <Aside onSelectedGenre={onSelectedGenre} selectedGenre={selectedGenre} />
      <Section
        selectedGenre={selectedGenre}
        onSelectPlatform={onSelectPlatform}
        platform={platform}
      />
    </div>
  );
};

export default Main;
