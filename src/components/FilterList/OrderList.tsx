import { ChangeEvent } from "react";

interface Props {
  onChangeOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const OrderList = ({ onChangeOrder, sortOrder }: Props) => {
  const order = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-relased", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = order.find((list) => list.value === sortOrder);

  return (
    <div>
      <select
        name=""
        id=""
        className="w-68 p-2 rounded-lg bg-slate-700 text-white font-semibold"
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          onChangeOrder(e.target.value);
          console.log(e);
        }}
      >
        {order.map((list) => (
          <option key={list.value} value={list.value}>
            {list.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderList;
