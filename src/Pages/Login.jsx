import React from 'react';
import { Link } from 'react-router-dom';
import SocialBtn from '../Components/SocialBtn';

const Login = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-7'>Login</h1>
           <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto border pb-5">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-500 text-white font-semibold">Login</button>
        </div>
        <p className='text-xs text-center'>Already have an account?<Link to={'/register'} className='text-green-400 font-semibold'>Register</Link></p>
      </form>
      <div className='mx-auto'>
      <div className="divider w-52 mx-auto">OR</div>
      <div className='flex justify-center'>
      <SocialBtn/>
      </div>
      </div>
    </div>
            
        </div>
    );
};

export default Login;