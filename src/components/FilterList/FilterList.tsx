import usePlatfomrms, { Platform } from "../../hooks/usePlatforms";
import OrderList from "./OrderList";
import PlatformList from "./PlatformList";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  platform: Platform | null;
  onChangeOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const FilterList = ({
  onSelectPlatform,
  platform,
  onChangeOrder,
  sortOrder,
}: Props) => {
  const { data, error } = usePlatfomrms();

  if (error) return null;
  return (
    <div className="flex gap-10 mb-5">
      <PlatformList data={data} onSelectPlatform={onSelectPlatform} />
      <OrderList onChangeOrder={onChangeOrder} sortOrder={sortOrder} />
    </div>
  );
};

export default FilterList;
