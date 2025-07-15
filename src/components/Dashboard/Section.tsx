import CardList from "../CardList";
import useGames from "../../hooks/useGame";
import FilterList from "../FilterList";
const Section = () => {
  const { games, error } = useGames();
  return (
    <div className="flex-5 h-full ml-32">
      <FilterList />
      <CardList games={games} error={error} />
    </div>
  );
};

export default Section;
