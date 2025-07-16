import usePlatfomrms, { Platform } from "../../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  platform: Platform | null;
}

const FilterList = ({ onSelectPlatform, platform }: Props) => {
  const { data, error } = usePlatfomrms();

  if (error) return null;
  return (
    <div className="flex gap-10 mb-5">
      <select
        onChange={(e) => {
          const filteredData = data.filter(
            (plat) => plat.slug === e.target.value
          );
          onSelectPlatform(filteredData[0]);
        }}
        name="platform"
        id="platform"
        className="w-68 p-2 rounded-lg bg-slate-700 text-white font-semibold"
      >
        <option value="" className=" ">
          Platform
        </option>
        {data.map((platform) => (
          <option key={platform.id} className="">
            {platform.slug}
          </option>
        ))}
      </select>

      <select name="" id="" className="border-1 border-black w-68">
        <option value="">Order by : Desc</option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
};

export default FilterList;
