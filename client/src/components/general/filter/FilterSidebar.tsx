import { SidebarProvider } from "@/components/ui/sidebar";
import FIlterItemsSidebar from "./FIlterItemsSidebar";
import { ReactNode } from "react";

interface FilterSidebarType {
  filterOpen: boolean;
  children: ReactNode;
}

const FilterSidebar = ({ filterOpen, children }: FilterSidebarType) => {
  return (
    <section>
      <SidebarProvider>
        <FIlterItemsSidebar filterOpen={filterOpen} />
        <main className="w-full">{children}</main>
      </SidebarProvider>
    </section>
  );
};

export default FilterSidebar;
