import usePlatforms from "../../hooks/usePlatforms";
import OrderList from "./OrderList";
import PlatformList from "./PlatformList";

const FilterList = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <div className="flex gap-10 mb-6">
      <PlatformList data={data?.results} />
      <OrderList />
    </div>
  );
};

export default FilterList;
