import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext)

  const handelSubmitLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.passwrod.value;
    console.log({email,password});

    userLogin(email, password)
    .then((result) => {
      const user = result.user;
      setUser(user)
    })
    .catch((error) => {
      alert(error.code)
    });
    
  }



  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 ">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <form onSubmit={handelSubmitLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="passwrod" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center ">
          Don't have an account? <Link to='/auth/register' className="text-blue-400">Regsiter</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;