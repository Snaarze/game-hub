import useGameStore from "../../hooks/useGameStore";

const GameTitle = () => {
  const gameQuery = useGameStore((set) => set.gameQuery);
  const heading = `${gameQuery.platform?.slug || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <h1 className="font-bold text-3xl mb-2">{heading}</h1>;
};

export default GameTitle;
