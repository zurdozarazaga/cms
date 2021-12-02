import React, { useState, useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router'
import useAuth from '../auth/useAuth';
import Auth from '../hooks/useAuth';
import { UserContext } from '../Context/UserContext';
import post from '../services/post';
import { URL_LOGIN } from '../util/constants';






function PrivateRoute({children}) {

  
  

  
  return (
    Auth() ? 

          children
    
          :
      
            <Navigate to="/login" />

    
  )
};

export default PrivateRoute;
