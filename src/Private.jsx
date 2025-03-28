import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, NavLink } from 'react-router-dom';

const Private = ({children}) => {
    const {user} = useContext(AuthContext);
   if(user && user?.email) 
    {return (children)}
   return <Navigate to={'/login'}></Navigate>
};

export default Private;