import { GameQuery } from "../../App";
import { Genre } from "../../hooks/useGenre";
import { Platform } from "../../hooks/usePlatforms";

interface Props {
  platform: Platform | null | undefined;
  genre: Genre;
}

const GameTitle = ({ platform, genre }: Props) => {
  const heading = `${platform?.slug || ""} ${genre?.name || ""} Games`;
  return <h1 className="font-bold text-3xl mb-2">{heading}</h1>;
};

export default GameTitle;
