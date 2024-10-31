import { Button } from "../ui/button";
// import { Input } from "../ui/input";
import { NavLink } from "react-router-dom";
import SidebarLayout from "../../layout/SidebarLayout";
import { navItems } from "@/utils/ui-data";

const NavBar = () => {
  return (
    <header className="px-2 md:px-4 py-6 sticky w-full top-0 bg-white z-50">
      <SidebarLayout>
        <nav className="max-md:flex-1  max-md:gap-4  flex items-center justify-between container-max gap-4">
          <NavLink to={"/"}>
            <h1 className="h1 text-primary self-start">Vacancee</h1>
          </NavLink>
          <ul className="md:flex items-center hidden gap-4 text-muted-foreground">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.name} className="text-lg max-lg:text-base">
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* <Input
            className="rounded-full bg-muted border-none hidden lg:block md:w-1/2"
            placeholder="Search by jobs, locations"
          /> */}

          <ul className="md:flex items-center hidden gap-4 text-muted-foreground">
            {navItems.slice(2).map((item) => (
              <li key={item.name} className="text-lg max-lg:text-base">
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Button className="rounded-full max-md:h-8  max-md:px-3 max-md:text-xs">
                For Employers
              </Button>
            </li>
          </ul>
        </nav>
      </SidebarLayout>
    </header>
  );
};

export default NavBar;
