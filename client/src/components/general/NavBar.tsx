import { HiBars3 } from "react-icons/hi2";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="px-2 py-4">
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto gap-4">
        <div>
          <h1 className="text-primary font-semibold text-xl">Vacancee</h1>
        </div>
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
          className="rounded-full bg-muted border-none w-1/2"
          placeholder="Search for jobs"
        />
        <Button size="sm" className="sm:hidden">
          <HiBars3 className="w-10 h-10" />
        </Button>
        <ul className="md:flex items-center hidden gap-4 text-muted-foreground">
          <li>Login</li>
          <li>SignUp</li>
          <li>
            <Button className="rounded-full">For Employers</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
