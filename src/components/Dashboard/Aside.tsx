import GenreList from "../GenreList";
import { Genre } from "../../hooks/useGenre";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const Aside = ({ onSelectedGenre, selectedGenre }: Props) => {
  return (
    <div className="flex-1 xs:hidden">
      <GenreList
        onSelectedGenre={onSelectedGenre}
        selectedGenre={selectedGenre}
      />
    </div>
  );
};

export default Aside;
