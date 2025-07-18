import usePlatforms from "../../hooks/usePlatforms";
import OrderList from "./OrderList";
import PlatformList from "./PlatformList";
import { Platform } from "../../hooks/usePlatforms";
interface Props {
  onSelectPlatform: (platform: number | undefined) => void;

  onChangeOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const FilterList = ({ onSelectPlatform, onChangeOrder, sortOrder }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <div className="flex gap-10 mb-6">
      <PlatformList data={data?.results} onSelectPlatform={onSelectPlatform} />
      <OrderList onChangeOrder={onChangeOrder} sortOrder={sortOrder} />
    </div>
  );
};

export default FilterList;
