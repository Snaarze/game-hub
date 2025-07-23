interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color =
    score > 75
      ? "text-green-600"
      : score > 60
      ? "text-yellow-600"
      : "text-red-600";
  console.log(color);
  return (
    <div
      className={`p-1  bg-slate-600 rounded-md w-8 text-center text-md  ${color}`}
    >
      {score ? score : "-"}
    </div>
  );
};

export default CriticScore;
