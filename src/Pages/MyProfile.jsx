import React, { useContext } from 'react';
import { AuthnContext } from './../Provider/AuthContext';

const MyProfile = () => {
    const {user} = useContext(AuthnContext)
    const {displayName, photoURL, email } = user || {}
    return (
        <div className='w-10/12 mx-auto min-h-screen'>
           <div className='p-10 pb-20 text-center border-2 rounded-lg border-green-600'>
            <h1 className='text-4xl font-bold'>Hay {displayName}!</h1>
            <h1 className='text-xl font-semibold'>welcome your Profile</h1>
           </div>
          <div className='flex flex-col items-center justify-center'>
            <img className='rounded-full border-2 border-green-500 absolute top-72 ' src={photoURL} alt="" />
           <div className=' my-8 h-40 border-2 shadow-xl p-10 rounded-lg flex flex-col items-center justify-center '>
            <h1 className='text-center font-bold text-3xl'>{displayName}</h1>
            <h2 className='text-center font-semibold mt-2'>{email}</h2>
            <button className="btn bg-green-600 text-white font-bold mt-4">update </button>

           </div>
 
          </div>

        </div>
    );
};

export default MyProfile;