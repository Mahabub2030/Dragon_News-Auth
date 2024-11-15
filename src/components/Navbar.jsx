import { Link } from "react-router-dom";

import userIcon from '../assets/user.png'

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='career'>Career</Link>
      </div>
      <div className="login flex gap-2 justify-center items-center">
       <div>
       <img src={userIcon}alt="" />
       </div>
        <Link className="btn bg-black text-white" to="/auth/login">login</Link>
      </div>
    </div>
  );
};

export default Navbar;