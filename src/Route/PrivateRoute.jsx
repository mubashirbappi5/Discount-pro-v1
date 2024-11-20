import React, { useContext } from 'react';
import { AuthnContext } from './../Provider/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthnContext)
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to={'/login'}></Navigate>
            
        </div>
    );
};

export default PrivateRoute;