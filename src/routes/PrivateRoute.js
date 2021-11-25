import React from 'react'
import { Navigate, Route } from 'react-router'


function useAuth() {
  return true;
}

function PrivateRoute({children}) {
  
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  
};

export default PrivateRoute;
