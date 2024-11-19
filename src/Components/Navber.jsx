import { NavLink } from "react-router-dom";


const Navber = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/brands'}>Brands</NavLink></li>
        <li><NavLink to={'/my-profile'}>my-profile</NavLink></li>
        <li><NavLink to={'/about'}>About Dev</NavLink></li>
    
    </>
    return (
        <div className="p-5">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Discount PRO</a>
  </div>
  <div className="navbar-center hidden lg:flex gap-20">
    <div>
      <h1>welcome massage</h1>
    </div>
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end  gap-4">
    <NavLink to={'/login'} className="btn btn-outline">Login</NavLink>
    <NavLink to={'register'} className="btn btn-outline">Register</NavLink>
  </div>
</div>
            
        </div>
    );
};

export default Navber;