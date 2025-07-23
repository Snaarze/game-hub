interface Props {
  metacritic: number;
}
const Metascore = ({ metacritic }: Props) => {
  return (
    <div className="w-1/2 flex flex-col gap-1">
      <h1 className="text-slate-500 text-md font-bold">Metascore</h1>
      <p
        className={`${
          metacritic > 65
            ? "text-green-600"
            : metacritic > 50
            ? "text-yellow-600 "
            : "text-red-600"
        } bg-slate-600 w-8 text-center rounded-md`}
      >
        {metacritic ? metacritic : "-"}
      </p>
    </div>
  );
};

export default Metascore;
