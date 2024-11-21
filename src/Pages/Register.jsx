import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialBtn from "../Components/SocialBtn";
import { AuthnContext } from "../Provider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const {registerUser,updateuser,messageErorr,setmessageErorr,showpass,setshowpass}=useContext(AuthnContext)
   const navigate = useNavigate()
    const HandleRegister = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const url = form.url.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,url,email,password)

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
          if(!passwordRegex.test(password)) {
           
            setmessageErorr("invalid password")
            return
          }
        
        registerUser(email,password)
        .then((res)=>{
          console.log(res.user)
          const profile ={
            displayName:name,
            photoURL:url
          }
          updateuser(profile)
          .then(()=>{
            console.log('profile update')

          })
          .catch((error)=>{
            console.log(error.message)
          })
          navigate('/')
        })
        .catch((error)=>{
          alert(error.message)
        })

    }
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-3xl my-7">Registration </h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto border pb-5">
          <form onSubmit={HandleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="Your Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
                
              </label>
              <input
                type={showpass?'text':"password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button onClick={()=>setshowpass(!showpass)} className=" absolute right-12 top-[359px]  ">{showpass?<FaEyeSlash />:<FaEye />}</button>
              {
                messageErorr && <p>{messageErorr}</p>
              }
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-500 text-white font-semibold">
                Register{" "}
              </button>
            </div>
            <p className="text-center text-xs">
              Already have an account?{" "}
              <Link to={"/login"} className="font-bold text-green-400">
                Login
              </Link>
            </p>
          </form>
          <div className="mx-auto">
            <div className="divider w-52 mx-auto">OR</div>
            <div className="flex justify-center">
              <SocialBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
