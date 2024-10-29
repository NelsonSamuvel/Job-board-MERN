import { SidebarProvider } from "@/components/ui/sidebar";
import FIlterItemsSidebar from "./FIlterItemsSidebar";
import { ReactNode } from "react";

const FilterSidebar = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <SidebarProvider>
          <FIlterItemsSidebar />
          <main>{children}</main>
      </SidebarProvider>
    </section>
  );
};

export default FilterSidebar;
