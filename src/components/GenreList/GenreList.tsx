import useGameStore from "../../hooks/useGameStore";
import useGenres from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const setGenre = useGameStore((set) => set.setGenre);
  const selectedGenre = useGameStore((set) => set.gameQuery.genre?.id);
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
              selectedGenre === genre.id ? "font-bold" : "font-normal"
            }`}
            onClick={() => {
              setGenre(genre);
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
