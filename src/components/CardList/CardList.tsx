import React from "react";
import { Game } from "../../hooks/useGame";
import IconList from "./IconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  games: Game[];
  error: string;
}

const CardList = ({ games, error }: Props) => {
  return (
    <div className="w-full h-full flex flex-wrap gap-10 items-center">
      {error && <p>{error}</p>}
      {games.map((game) => (
        <div
          className="border-none w-98 h-88 rounded-xl overflow-hidden bg-slate-800"
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
                <IconList platform={platform} />
              ))}
            </ul>
            <CriticScore score={game.metacritic} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
