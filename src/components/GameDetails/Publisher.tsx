import { publishers } from "../entities/Publisher";

interface Props {
  publisher: publishers[];
}

const Publisher = ({ publisher }: Props) => {
  return (
    <div className="w-1/2">
      <h1 className="text-slate-500 text-md font-bold">Publisher</h1>
      {publisher.map((publish) => (
        <p>{publish ? publish.name : "-"}</p>
      ))}
    </div>
  );
};

export default Publisher;
