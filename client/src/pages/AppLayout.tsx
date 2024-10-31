import NavBar from "@/components/general/NavBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
