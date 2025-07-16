import useGenres, { Genre } from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <div className="pl-5">
      <p className="font-bold text-3xl mb-10">Genres</p>
      <ul className="flex flex-col gap-4">
        {!isLoading &&
          data.map((genre) => (
            <li
              key={genre.id}
              className="flex gap-4 text-xl items-center hover:underline cursor-pointer"
              onClick={() => onSelectedGenre(genre)}
            >
              <img
                src={getCroppedImageUrl(genre.image_background)}
                className="h-10 w-14 rounded-xl "
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
