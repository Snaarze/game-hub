import { useRef } from "react";
import useGameStore from "../../../hooks/useGameStore";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const setSearchText = useGameStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="hidden sm:flex flex-1   md:items-center justify-center  "
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <input
        ref={ref}
        type="text"
        className="flex-1 bg-slate-600 py-2 px-10 rounded-3xl "
        placeholder="Search games..."
        onKeyDown={(event) => event.key === "Enter" && navigate("/")}
      />
    </form>
  );
};

export default Search;
