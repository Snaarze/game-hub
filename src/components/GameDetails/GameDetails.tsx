import { useParams } from "react-router-dom";
import useGameDescription from "../../hooks/useGameDescription";
import ExpandableText from "./ExpandableText";
import PlatformDetails from "./PlatformDetails";
import GenreDetails from "./GenreDetails";
import Metascore from "./Metascore";
import Publisher from "./Publisher";
import GameTrailer from "./GameTrailer";
import GameScreenshotsPreview from "./GameScreenshotsPreview";

const GameDetails = () => {
  // this mean that this parameter will never be null

  const { slug } = useParams();
  const pageSize = 10;
  const { data: game, isLoading, error } = useGameDescription(slug!, pageSize);

  if (isLoading) return <p className="text-white">Loading....</p>;

  // this prevent optional chaining
  if (error || !game) throw error;

  return (
    <div className="sm:block md:flex mx-5">
      <div className="bg-slate-900 text-white md:flex-1">
        <h1 className="text-3xl">{game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <div className="flex flex-wrap gap-y-5">
          <PlatformDetails parent_platforms={game.parent_platforms} />
          <Metascore metacritic={game.metacritic} />
          <GenreDetails genre={game.genres} />
          <Publisher publisher={game?.publishers} />
        </div>
      </div>
      <div className="md:flex-1">
        <GameTrailer slug={slug!} />
        <div className="flex flex-wrap gap-y-1">
          <GameScreenshotsPreview slug={slug!} />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
