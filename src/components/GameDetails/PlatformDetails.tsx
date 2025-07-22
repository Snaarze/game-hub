import React, { ReactNode } from "react";
import { Platform } from "../entities/Platform";

interface Props {
  parent_platforms: { platform: Platform }[];
}

const PlatformDetails = ({ parent_platforms }: Props) => {
  return (
    <div>
      <h1 className="text-slate-500 text-md font-bold">Platform </h1>
      {parent_platforms.map(({ platform }) => (
        <p className="text-sm" key={platform.id}>
          {platform.name}
        </p>
      ))}
    </div>
  );
};

export default PlatformDetails;
