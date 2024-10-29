import FilterBtn from "./FilterBtn";

export type FilterType = {
  handleFilterToggle?: () => void;
};

const Filter = ({ handleFilterToggle }: FilterType) => {
  return (
    <div className="py-4 px-2">
      {<FilterBtn handleFilterToggle={handleFilterToggle} />}
    </div>
  );
};

export default Filter;
