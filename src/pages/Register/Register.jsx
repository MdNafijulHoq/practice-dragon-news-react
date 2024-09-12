import { Link } from "react-router-dom";
import Navbar from "../Shared/Navabr/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        createUser(email,password)
       .then(result => {
        console.log(result.user)
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
            <form className="card-body" onSubmit={handleRegister}>
            <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
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
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center p-3">Already Registered? Please <Link to='/login' className="text-blue-600 underline">Login</Link></p>
          </div>
        </div>
      </div>
        </>
    );
};

export default Register;