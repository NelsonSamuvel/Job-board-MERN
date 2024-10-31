import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  useSidebar,
} from "@/components/ui/sidebar";
import FilterPage from "./FilterPage";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { clearFilters } from "@/redux/features/filters/filterSlice";
import { useEffect } from "react";

const FIlterItemsSidebar = ({ filterOpen }: { filterOpen: boolean }) => {
  const dispatch = useDispatch();

  const { setOpen } = useSidebar();

  useEffect(() => {
    const handleOpen = () => {
      if (window.innerWidth < 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleOpen();

    window.addEventListener("resize", handleOpen);
    return () => window.removeEventListener("resize", handleOpen);
  }, [setOpen, filterOpen]);

  return (
    <Sidebar variant="floating" className="mt-20 py-4">
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
