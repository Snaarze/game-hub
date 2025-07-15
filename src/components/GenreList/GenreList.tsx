import useGenres from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";
const GenreList = () => {
  const { data, isLoading } = useGenres();
  console.log(data.map((genre) => console.log(genre)));

  return (
    <div className="pl-5">
      <p className="font-bold text-3xl">Genres</p>
      <ul className="flex flex-col gap-5">
        {!isLoading &&
          data.map((genre) => (
            <li key={genre.id} className="flex">
              <img
                src={getCroppedImageUrl(genre.image_background)}
                className="w-12 rounded-md "
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
