import CardList from "../CardList";
import useGames from "../../hooks/useGame";
import FilterList from "../FilterList";
import { Genre } from "../../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}
const Section = ({ selectedGenre }: Props) => {
  // selectedGenre is the initial state of the useGame, which could be null or re-fetch on the server
  const { data, error, isLoading } = useGames(selectedGenre);
  return (
    <div className="flex-5 h-full ml-32">
      <FilterList />
      <CardList games={data} error={error} isLoading={isLoading} />
    </div>
  );
};

export default Section;
