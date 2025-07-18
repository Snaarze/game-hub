import useGenres, { Genre } from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error } = useGenres();

  if (error) return null;

  return (
    <div className="pl-5">
      <p className="font-bold text-3xl mb-5">Genres</p>
      <ul className="flex flex-col gap-4">
        {data?.results.map((genre) => (
          <li
            key={genre.id}
            className={`flex gap-4 text-xl items-center hover:underline cursor-pointer ${
              selectedGenre?.id === genre.id ? "font-bold" : "font-normal"
            }`}
            onClick={() => {
              onSelectedGenre(genre);
            }}
          >
            <img
              src={getCroppedImageUrl(genre.image_background)}
              className="h-10 w-10 rounded-xl "
              alt=""
            />{" "}
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
