import { useRef } from "react";
import useGameStore from "../../../hooks/useGameStore";

const Search = () => {
  const setSearchText = useGameStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex flex-1 items-center justify-center px-32 ml-44"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
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
