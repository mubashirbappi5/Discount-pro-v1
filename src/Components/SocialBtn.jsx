import React, { useContext } from 'react';
import { AuthnContext } from '../Provider/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialBtn = () => {
    const {googlesigninUser} = useContext(AuthnContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handlegooglebtn = ()=>{
        googlesigninUser()
        .then((res)=>{
            console.log(res)
            navigate(location?.state?location.state:'/')

        })
        .then((error)=>console.log(error))

    }
    return (
        <div>
            <button onClick={handlegooglebtn} className='btn rounded-lg'>Continue with Google</button>
            
        </div>
    );
};

export default SocialBtn;