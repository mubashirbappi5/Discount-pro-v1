import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthnContext } from "./../Provider/AuthContext";
import "animate.css";

const Navber = () => {
  const {  user, signoutUser } = useContext(AuthnContext);
  const {displayName, photoURL, email } = user || {}
  const  handlelogoutbtn = ()=>{
    signoutUser()

  }
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/brands"}>Brands</NavLink>
      </li>
      {
        user?<li>
        <NavLink to={"/my-profile"}>my-profile</NavLink>
      </li>:''
      }
      <li>
        <NavLink to={"/about"}>About Dev</NavLink>
      </li>
    </>
  );
  return (
    <div className="p-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-xl text-sm ">Discount PRO </a>
        </div>
        <div className="navbar-center hidden lg:flex gap-20">
          <div>
           {
            user? <h1 className="animate__animated animate__fadeInDown animate__delay-2s">welcome  {displayName}! </h1>:''
           }
          </div>
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end  gap-4">
          {user ? (
           <div className="flex gap-2 ">
             <img className=" w-10 md:w-20 rounded-full" src={photoURL} alt="ss" />
            <div className="flex flex-col gap-2">
            <h5 className="font-bold text-xs">{email}</h5>
            <div>
            <button onClick={ handlelogoutbtn} className="btn btn-xs btn-outline">Log Out</button>
            </div>
            </div>
            
             
           </div>
          ) : (
            <div>
              <NavLink to={"/login"} className="btn btn-outline">
                Login
              </NavLink>
              <NavLink to={"register"} className="btn btn-outline">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
