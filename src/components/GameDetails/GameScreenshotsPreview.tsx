import useGameScreenshots from "../../hooks/useGameScreenshots";

interface Props {
  slug: string;
}
const GameScreenshotsPreview = ({ slug }: Props) => {
  const { data, error, isLoading } = useGameScreenshots(slug!);

  if (isLoading) return <p>Loading.....</p>;
  return (
    <>
      {data?.results.map((result, index) => (
        <img key={index} className="sm:w-full md:w-1/2" src={result.image} />
      ))}
    </>
  );
};

export default GameScreenshotsPreview;
