import NavBar from "@/components/general/NavBar";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/jobs", { replace: true });
  }, [navigate]);

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
