import { Button } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (children.length <= limit) return <p>{children}</p>;

  const summary = children.substring(0, limit);

  return (
    <div>
      {expanded ? summary + "....." : children}
      <Button
        className="bg-amber-300 text-black font-bold px-10 py-1 rounded-md ml-2"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Show" : "Less"}
      </Button>
    </div>
  );
};

export default ExpandableText;
