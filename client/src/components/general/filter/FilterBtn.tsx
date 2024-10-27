import { Button } from "@/components/ui/button";
import { HiOutlineFunnel } from "react-icons/hi2";

type FilterType = {
  handleFilter: () => void;
};

const FilterBtn = ({ handleFilter }: FilterType) => {
  return (
    <div className="text-center">
      <Button
        variant={"secondary"}
        className="rounded-full hover:bg-primary hover:text-primary-foreground"
        onClick={handleFilter}
      >
        Filter
        <HiOutlineFunnel />
      </Button>
    </div>
  );
};

export default FilterBtn;
