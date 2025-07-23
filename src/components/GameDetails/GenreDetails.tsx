import { Genre } from "../entities/Genre";

interface Props {
  genre: Genre[];
}
const GenreDetails = ({ genre }: Props) => {
  return (
    <div className="w-1/2">
      <p className="text-slate-500 text-md fz ont-bold">Genre</p>
      {genre.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  );
};

export default GenreDetails;
