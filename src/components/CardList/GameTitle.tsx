import { GameQuery } from "../../App";
import { Genre } from "../../hooks/useGenre";
import { Platform } from "../../hooks/usePlatforms";

interface Props {
  platform: string | Platform;
  genre: string | Genre;
}

const GameTitle = ({ platform, genre }: Props) => {
  const heading = `${platform || ""} ${genre || ""} Games`;
  return <h1 className="font-bold text-3xl mb-2">{heading}</h1>;
};

export default GameTitle;
