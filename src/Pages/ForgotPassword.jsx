import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/Firebace.init';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const  [email,setemail] = useState('')
    const navigate = useNavigate()

   const handlereset = (e)=>{
    const form = e.target
    const email = form.name.value
    console.log(email)
    sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log(hi)
        toast.success('Password reset email sent!')
       
         
        })
         .catch((error) => {
            toast.error(error.message);
          });
        

   }
    
       

//         sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error) => {
  
//   });


   
    return (
        <div className='my-10'>
           <h1 className='text-center font-bold text-3xl'>Forget Password</h1>


           <div className='w-3/12 mx-auto flex mt-10'>
           <form onSubmit={handlereset} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter your email</span>
          </label>
          <input type="email" name='name' placeholder=" Name  " className="input input-bordered" required />
        </div>
       
        <div className="form-control mt-6">
          <button className="btn bg-green-400">Reset Password </button>
        </div>
      </form>
      </div>
        </div>
    );
};

export default ForgotPassword;