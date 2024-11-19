import React, { useContext } from 'react';
import { AuthnContext } from '../Provider/AuthContext';

const SocialBtn = () => {
    const {googlesigninUser} = useContext(AuthnContext)
    const handlegooglebtn = ()=>{
        googlesigninUser()
        .then((res)=>{
            console.log(res)
        })

    }
    return (
        <div>
            <button onClick={handlegooglebtn} className='btn rounded-lg'>Continue with Google</button>
            
        </div>
    );
};

export default SocialBtn;