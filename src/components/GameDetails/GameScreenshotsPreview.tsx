import React from "react";
import useGameScreenshots from "../../hooks/useGameScreenshots";

interface Props {
  slug: string;
}
const GameScreenshotsPreview = ({ slug }: Props) => {
  const { data, error, isLoading } = useGameScreenshots(slug!);
  if (error || !data) throw error;

  if (isLoading) return <p>Loading.....</p>;
  return (
    <>
      {data?.results.map((result) => (
        <img className="sm:w-full md:w-1/2" src={result.image} />
      ))}
    </>
  );
};

export default GameScreenshotsPreview;
