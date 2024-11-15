import { Outlet } from "react-router-dom";

const AuthLaout = () => {
  return (
    <div>
      <h2 className="text-2xl">Auth laout</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLaout;