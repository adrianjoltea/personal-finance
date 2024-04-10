import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { SortOptionsProps } from "./Interface/UiInterface";

export default function SortingByOption({ options }: SortOptionsProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select onChange={handleChange}>
      {options.map(value => (
        <option key={value.value} value={value.value}>
          {value.label}
        </option>
      ))}
    </select>
  );
}
