import CardList from "../CardList";
import useGames from "../../hooks/useGame";
import FilterList from "../FilterList";
import { Genre } from "../../hooks/useGenre";
import { Platform } from "../../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  onSelectPlatform: (platform: Platform) => void;
  platform: Platform | null;
}
const Section = ({ selectedGenre, onSelectPlatform, platform }: Props) => {
  // selectedGenre is the initial state of the useGame, which could be null or re-fetch on the server
  const { data, error, isLoading } = useGames(selectedGenre, platform);
  return (
    <div className="flex-5 h-full ml-32">
      <FilterList onSelectPlatform={onSelectPlatform} platform={platform} />
      <CardList games={data} error={error} isLoading={isLoading} />
    </div>
  );
};

export default Section;
