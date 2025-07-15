import CardList from "../CardList";
import useGames from "../../hooks/useGame";
import FilterList from "../FilterList";
const Section = () => {
  const { data, error, isLoading } = useGames();
  return (
    <div className="flex-5 h-full ml-32">
      <FilterList />
      <CardList games={data} error={error} isLoading={isLoading} />
    </div>
  );
};

export default Section;
