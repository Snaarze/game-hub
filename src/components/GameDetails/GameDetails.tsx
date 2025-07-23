import { useParams } from "react-router-dom";
import useGameDescription from "../../hooks/useGameDescription";
import ExpandableText from "./ExpandableText";
import PlatformDetails from "./PlatformDetails";
import useGenres from "../../hooks/useGenre";
import GenreDetails from "./GenreDetails";
import Metascore from "./Metascore";
import Publisher from "./Publisher";
import useGameTrailer from "../../hooks/useGameTrailer";
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
    <div className="flex mx-5">
      <div className="bg-slate-900 text-white">
        <h1 className="text-3xl">{game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <div className="flex flex-wrap gap-y-5">
          <PlatformDetails parent_platforms={game.parent_platforms} />
          <Metascore metacritic={game.metacritic} />
          <GenreDetails genre={game.genres} />
          <Publisher publisher={game?.publishers} />
        </div>
        <GameTrailer slug={slug!} />
        <div className="flex flex-wrap">
          <GameScreenshotsPreview slug={slug!} />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
