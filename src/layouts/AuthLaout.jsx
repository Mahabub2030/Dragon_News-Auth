import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLaout = () => {
  return (
    <div className="font-poppins bg-[#F3F3F3] mt-5">
      <header className="m-3 w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLaout;