
import FilterBtn from "./FilterBtn";

export type FilterType = {
  handleFilter: () => void;
};

const Filter = ({ handleFilter }: FilterType) => {
  return (
    <div className="py-4 px-2">{<FilterBtn handleFilter={handleFilter} />}</div>
  );
};

export default Filter;
