import React from "react";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameTitle = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.slug || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <h1 className="font-bold text-3xl mb-2">{heading}</h1>;
};

export default GameTitle;
