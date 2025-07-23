import Platform from "../entities/Platform";

interface Props {
  parent_platforms: { platform: Platform }[];
}

const PlatformDetails = ({ parent_platforms }: Props) => {
  return (
    <div className="w-1/2">
      <h1 className="text-slate-500 text-md font-bold">Platform </h1>
      {parent_platforms.map(({ platform }) => (
        <p className="text-sm" key={platform.id}>
          {platform.name ? platform.name : "-"}
        </p>
      ))}
    </div>
  );
};

export default PlatformDetails;
