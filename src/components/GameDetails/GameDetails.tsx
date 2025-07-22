import { useParams } from "react-router-dom";
import useGameDescription from "../../hooks/useGameDescription";

const GameDetails = () => {
  // this mean that this parameter will never be null
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDescription(slug!);

  if (isLoading) return <p className="text-white">Loading....</p>;

  // this prevent optional chaining
  if (error || !game) throw error;

  return (
    <div className="flex">
      <div className="bg-slate-900 text-white">
        <h1 className="text-xl">{game.name}</h1>
        <p>{game.description_raw}</p>
      </div>
      <div className="">
        <img src={game.background_image_additional} alt="" />
      </div>
    </div>
  );
};

export default GameDetails;
