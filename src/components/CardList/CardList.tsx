import { Game } from "../../hooks/useGame";
import IconList from "./IconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import { FetchResponse } from "../../hooks/useData";
import { NavLink } from "react-router-dom";

interface Props {
  games: FetchResponse<Game>[] | undefined;
  error: string | undefined;

  isRefetching: boolean;
}

const CardList = ({ games, error, isRefetching }: Props) => {
  return (
    <div className="w-full h-full flex flex-wrap gap-x-20 gap-y-10 items-center">
      {error && <p>{error}</p>}
      {isRefetching && (
        <div className="text-white text-3xl w-full h-full flex justify-center mt-50 mr-50">
          Loading....
        </div>
      )}
      {!isRefetching &&
        games
          ?.flatMap((result) => result.results)
          .map((game) => (
            <NavLink
              to={`games/${game.slug}`}
              className="border-nonerounded-xl overflow-hidden bg-slate-800 hover:cursor-pointer hover:scale-105 w-98 h-76 "
              key={game.id}
            >
              <img
                src={getCroppedImageUrl(game.background_image)}
                alt="game"
                className="w-full h-48"
              />
              <h2 className="text-xl font-bold mx-5 mt-5">{game.name}</h2>
              <div className="flex items-center justify-between mx-5">
                <ul className="flex gap-2">
                  {game.parent_platforms.map(({ platform }) => (
                    <IconList platform={platform} key={platform.id} />
                  ))}
                </ul>
                <CriticScore score={game.metacritic} />
              </div>
            </NavLink>
          ))}
    </div>
  );
};

export default CardList;
