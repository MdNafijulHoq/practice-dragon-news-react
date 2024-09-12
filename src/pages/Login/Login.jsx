/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navabr/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";



const Login = () => {

    const {signIn} = useContext(AuthContext);

    const location = useLocation();
    console.log("Location in the login page", location)

    const navigate = useNavigate();



    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            // that means jodi state pay thle jabe state a r nahole jabe home a
            navigate(location?.state ? location.state : '/');
           })
           .catch(error => {
            console.log(error)
           })
    }
    return (
        <>
        <Navbar></Navbar>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
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
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center p-3">Don't have an account? <Link to='/register' className="text-blue-600 underline">Register</Link></p>
          </div>
        </div>
      </div>
        </>
    );
};

export default Login;