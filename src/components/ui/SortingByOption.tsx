import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { SortOptionsProps } from "./Interface/UiInterface";
import CardOperations from "../Card/CardOperations";

export default function SortingByOption({ options, title }: SortOptionsProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="transaction-table-title">
      <h3>{title}</h3>
      <CardOperations />
      <select onChange={handleChange} className="form-input form-input-table">
        {options.map(value => (
          <option key={value.value} value={value.value}>
            {value.label}
          </option>
        ))}
      </select>
    </div>
  );
}
