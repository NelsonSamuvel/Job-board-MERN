import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { NavLink } from "react-router-dom";
import SidebarLayout from "../../layout/SidebarLayout";

const NavBar = () => {
  return (
    <header className="px-2 py-4">
      <SidebarLayout>
        <nav className="max-md:flex-1 max-md:gap-4 max-w-screen-xl flex items-center justify-between md:mx-auto gap-4">
          <h1 className="text-primary font-semibold text-2xl pb-1">Vacancee</h1>
          <ul className="md:flex items-center hidden gap-4 text-muted-foreground">
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              <li>Jobs</li>
            </NavLink>
            <NavLink to="/bookmarks">
              <li>Bookmarks</li>
            </NavLink>
          </ul>

          <Input
            className="rounded-full bg-muted border-none md:w-1/2"
            placeholder="Search for jobs"
          />

          <ul className="md:flex items-center hidden gap-4 text-muted-foreground">
            <li>Login</li>
            <li>SignUp</li>
            <li>
              <Button className="rounded-full">For Employers</Button>
            </li>
          </ul>
        </nav>
      </SidebarLayout>
    </header>
  );
};

export default NavBar;
