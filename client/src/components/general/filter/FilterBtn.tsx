import { Button } from "@/components/ui/button";
import { HiOutlineFunnel } from "react-icons/hi2";
import { FilterType } from "./Filter";

const FilterBtn = ({ handleFilterToggle }: FilterType) => {
  return (
    <div className="text-center py-4 lg:hidden">
      <Button
        variant={"secondary"}
        className="rounded-full hover:bg-primary hover:text-primary-foreground"
        onClick={handleFilterToggle}
      >
        Filter
        <HiOutlineFunnel />
      </Button>
    </div>
  );
};

export default FilterBtn;
