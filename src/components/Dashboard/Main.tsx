import Aside from "./Aside";
import Section from "./Section";

// interface Params {
//   gamequery: GameQuery;
//   pageSize: number;
// }

const Main = () => {
  return (
    <div className="flex w-full bg-slate-900 text-white">
      <Aside />
      <Section />
    </div>
  );
};

export default Main;
