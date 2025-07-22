import { ChangeEvent } from "react";
import { Platform } from "../entities/Platform";
import useGameStore from "../../hooks/useGameStore";

interface Props {
  data: Platform[] | undefined;
}

const PlatformList = ({ data }: Props) => {
  const setPlatform = useGameStore((set) => set.setPlatform);
  // this function is for filtering the data to get the only data we need such as platform object that matches the value
  const changePlatform = (e: ChangeEvent<HTMLSelectElement>) => {
    const filteredData = data?.find((plat) => plat.slug === e.target.value);
    if (filteredData) setPlatform(filteredData);
  };

  return (
    <div>
      <select
        onChange={(event) => changePlatform(event)}
        name="platform"
        id="platform"
        className="w-68 p-2 rounded-lg bg-slate-700 text-white font-semibold"
      >
        <option value="" className=" ">
          Platform
        </option>
        {data?.map((platform) => (
          <option key={platform.id} className="">
            {platform.slug}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlatformList;
