import Aside from "./Aside";
import Section from "./Section";
import { GameQuery } from "../../App";
import { Genre } from "../../hooks/useGenre";
import { Platform } from "../../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: number | undefined) => void;
  onSelectGenre: (genre: number) => void;
  onChangeOrder: (sortOrder: string) => void;
  sortOrder: string;
}

// interface Params {
//   gamequery: GameQuery;
//   pageSize: number;
// }

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
