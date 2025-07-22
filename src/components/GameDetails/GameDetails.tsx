import { useParams } from "react-router-dom";
import useGameDescription from "../../hooks/useGameDescription";
import ExpandableText from "./ExpandableText";
import PlatformDetails from "./PlatformDetails";
import useGenres from "../../hooks/useGenre";
import GenreDetails from "./GenreDetails";

const GameDetails = () => {
  // this mean that this parameter will never be null

  const { slug } = useParams();
  const pageSize = 10;
  const { data: game, isLoading, error } = useGameDescription(slug!, pageSize);

  if (isLoading) return <p className="text-white">Loading....</p>;

  // this prevent optional chaining
  if (error || !game) throw error;

  return (
    <div className="flex">
      <div className="bg-slate-900 text-white">
        <h1 className="text-3xl">{game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <div className="">
          <PlatformDetails parent_platforms={game.parent_platforms} />
          <GenreDetails genre={game.genres} />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
