import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import FilterPage from "./FilterPage";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { clearFilters } from "@/redux/features/filters/filterSlice";

const FIlterItemsSidebar = () => {
  const dispatch = useDispatch();

  return (
    <Sidebar variant="floating" className="mt-20 py-4 w-[20rem]">
      <SidebarContent className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <SidebarGroup>
          <div className="flex items-center justify-between">
            <SidebarGroupLabel>Filter</SidebarGroupLabel>
            <Button variant="outline" onClick={() => dispatch(clearFilters())}>
              Reset
            </Button>
          </div>

          <SidebarGroupContent>
            <FilterPage />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default FIlterItemsSidebar;
