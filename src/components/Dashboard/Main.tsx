import { useState } from "react";
import Aside from "./Aside";
import Section from "./Section";
import { Genre } from "../../hooks/useGenre";
const Main = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const onSelectedGenre = (genre: Genre) => setSelectedGenre(genre);
  return (
    <div className="flex h-full w-full mt-5">
      <Aside onSelectedGenre={onSelectedGenre} selectedGenre={selectedGenre} />
      <Section selectedGenre={selectedGenre} />
    </div>
  );
};

export default Main;
