import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router'
import { UserContext } from '../Context/UserContext';



// function useAuth(context) {
//   const [auth, setAuth] = useState(false);

//   if (context) {
//     setAuth(true);
//   } else {
//   setAuth(false);
//   }
//   return (
//     auth
//   )
// }


function PrivateRoute({children}) {
  
  const { nick } = useContext(UserContext);
  
    // const auth = useAuth();
    return nick ? children : <Navigate to="/login" />;
  
};

export default PrivateRoute;
