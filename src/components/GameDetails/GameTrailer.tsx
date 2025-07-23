import useGameTrailer from "../../hooks/useGameTrailer";

interface Props {
  slug: string;
}
const GameTrailers = ({ slug }: Props) => {
  const { data: gameTrailer } = useGameTrailer(slug!);

  const firstTrailer = gameTrailer?.results[0];
  console.log("preview", gameTrailer);
  return (
    <>
      <div className="my-5 w-full flex">
        <video
          className="flex-1"
          src={firstTrailer?.data[480]}
          poster={firstTrailer?.preview}
          controls
        />
      </div>
    </>
  );
};

export default GameTrailers;
