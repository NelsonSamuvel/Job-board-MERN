import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div className="container-max min-h-screen flex items-center">
        <div className="bg-primary w-1/2 mx-auto  text-center rounded-md py-8 px-2">
          <h3 className="text-primary-foreground pb-4">Something Went Wrong</h3>
          <NavLink to={"/jobs"}>
            <Button className="bg-primary-foreground text-primary hover:bg-gray-100">
              Redirect To Home Page
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
