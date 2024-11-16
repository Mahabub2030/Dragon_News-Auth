import { Link } from "react-router-dom";

import userIcon from '../assets/user.png'
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
//  console.log(import.meta.env.VITE_a)

  const { user,logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between">
      <div className="">{user && user.name}</div>
      <div className="nav space-x-5">
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='career'>Career</Link>
        <Link to='dev'>devinfromation</Link>
      </div>
      <div className="login flex gap-2 justify-center items-center">
        <div>
          {
            user && user ?.email ? <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div> : 
             <img src={userIcon} alt="" />
          }
         
        </div>
        {
          user && user?.email ?
            <button onClick={logOut} className="btn bg-black text-white">logOut</button>

            : <Link className="btn bg-black text-white" to="/auth/login">login</Link>
        }

      </div>
    </div>
  );
};

export default Navbar;