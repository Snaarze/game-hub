import CardList from "../CardList";
import useGames from "../../hooks/useGame";
import FilterList from "../FilterList";
import { Platform } from "../../hooks/usePlatforms";
import { GameQuery } from "./Main";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform) => void;
  onChangeOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const Section = ({
  gameQuery,
  onSelectPlatform,
  onChangeOrder,
  sortOrder,
}: Props) => {
  // selectedGenre is the initial state of the useGame, which could be null or re-fetch on the server
  const { data, error, isLoading } = useGames(gameQuery);

  console.log("data", data);
  return (
    <div className="flex-5 h-full ml-32">
      <FilterList
        onChangeOrder={onChangeOrder}
        onSelectPlatform={onSelectPlatform}
        platform={gameQuery.platform}
        sortOrder={sortOrder}
      />
      <CardList games={data} error={error} isLoading={isLoading} />
    </div>
  );
};

export default Section;
