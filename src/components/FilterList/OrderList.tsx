import { ChangeEvent } from "react";
import useGameStore from "../../hooks/useGameStore";

const OrderList = () => {
  const setSortOrder = useGameStore((set) => set.setSortOrder);
  const selectedOrder = useGameStore((set) => set.gameQuery.sortOrder);
  const order = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-relased", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = order.find((list) => list.value === selectedOrder);

  return (
    <div>
      <select
        name=""
        id=""
        className="w-68 p-2 rounded-lg bg-slate-700 text-white font-semibold"
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setSortOrder(e.target.value);
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
