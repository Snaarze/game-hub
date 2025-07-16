import GenreList from "../GenreList";
import { Genre } from "../../hooks/useGenre";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const Aside = ({ onSelectedGenre }: Props) => {
  return (
    <div className="flex-1">
      <GenreList onSelectedGenre={onSelectedGenre} />
    </div>
  );
};

export default Aside;
