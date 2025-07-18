interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <div
      className={`p-1  bg-slate-600 rounded-md w-8 text-center text-md text-${color}-700`}
    >
      {score ? score : "-"}
    </div>
  );
};

export default CriticScore;
