import { useRef } from "react";

interface Props {
  onSearch: (search: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex flex-1"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <input
        ref={ref}
        type="text"
        className="flex-1 bg-slate-600 py-2 px-10 rounded-3xl"
        placeholder="Search games..."
      />
    </form>
  );
};

export default Search;
