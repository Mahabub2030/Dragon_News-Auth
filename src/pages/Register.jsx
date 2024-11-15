import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

  const {createNewUser ,setUser} = useContext(AuthContext);

  const handelSumitRe = (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const passwrod = form.get("passwrod")
    console.log({name, email, photo,passwrod});
    createNewUser(email,passwrod)
    .then((result) =>{
      const user = result.user;
      setUser(user)

      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    
      console.log(errorCode ,errorMessage)
    });
    
  }


  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 ">
        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
        <form onSubmit={handelSumitRe} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Enter you name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />
          </div>
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
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center ">
          Allready have an account <Link to='/auth/login' className="text-blue-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;