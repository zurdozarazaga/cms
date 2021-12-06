import React from 'react'
import { Navigate } from 'react-router'
import Auth from '../hooks/useAuth';


function PrivateRoute({children}) {
//recibe la funcion Auth() que validara si el usuario esta autenticado meditante las cookies

//si el usuario esta autenticado, entonces renderiza el componente hijo
  return (
    Auth() ? 

          children
    
          :
      
            <Navigate to="/login" />

    
  )
};

export default PrivateRoute;
