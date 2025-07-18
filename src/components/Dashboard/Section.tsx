import CardList from "../CardList";
import useGames from "../../hooks/useGame";
import FilterList from "../FilterList";
import { Platform } from "../../hooks/usePlatforms";
import { GameQuery } from "../../App";
import GameTitle from "../CardList/GameTitle";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform | undefined ) => void;
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

  const {
    data,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useGames(gameQuery);

  return (
    <div className="flex-5 h-full ml-32">
      <FilterList
        onChangeOrder={onChangeOrder}
        onSelectPlatform={onSelectPlatform}
        platform={gameQuery.platform}
        sortOrder={sortOrder}
      />
      <GameTitle gameQuery={gameQuery} />
      {data && data?.pages[0].results[0] === undefined && !isLoading && (
        <p className="text-center mt-50 mr-50">No Games Found</p>
      )}
      <CardList
        games={data?.pages}
        error={error?.message}
        isLoading={isLoading}
      />
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="bg-slate-700 px-5 rounded-md py-2 my-5"
        >
          {isFetchingNextPage ? "Loading" : "Load more..."}
        </button>
      )}
    </div>
  );
};

export default Section;
