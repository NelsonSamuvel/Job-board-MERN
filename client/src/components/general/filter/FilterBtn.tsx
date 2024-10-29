import { Button } from "@/components/ui/button";
import { HiOutlineFunnel } from "react-icons/hi2";
import { FilterType } from "./Filter";

const FilterBtn = ({ handleFilter }: FilterType) => {
  return (
    <div className="text-center py-4 lg:hidden">
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
