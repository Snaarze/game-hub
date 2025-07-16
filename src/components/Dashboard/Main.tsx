import Aside from "./Aside";
import Section from "./Section";
import { GameQuery } from "../../App";
import { Platform } from "../../hooks/usePlatforms";
import { Genre } from "../../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform) => void;
  onSelectGenre: (genre: Genre) => void;
  onChangeOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const Main = ({
  onSelectPlatform,
  onSelectGenre,
  gameQuery,
  onChangeOrder,
}: Props) => {
  return (
    <div className="flex h-full w-full mt-5">
      <Aside onSelectedGenre={onSelectGenre} selectedGenre={gameQuery.genre} />
      <Section
        onSelectPlatform={onSelectPlatform}
        gameQuery={gameQuery}
        onChangeOrder={onChangeOrder}
        sortOrder={gameQuery.sortOrder}
      />
    </div>
  );
};

export default Main;
