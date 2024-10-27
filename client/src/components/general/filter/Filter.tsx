import { useState } from "react";
import FilterPage from "./FilterPage";
import FilterBtn from "./FilterBtn";

const Filter = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="py-4 px-2">
      {filterOpen ? (
        <FilterPage />
      ) : (
        <FilterBtn handleFilter={() => setFilterOpen(true)} />
      )}
    </div>
  );
};

export default Filter;
