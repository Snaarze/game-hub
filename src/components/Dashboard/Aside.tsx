import GenreList from "../GenreList";

const Aside = () => {
  return (
    <div className="flex-1 xs:hidden">
      <GenreList />
    </div>
  );
};

export default Aside;
