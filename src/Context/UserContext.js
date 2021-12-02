import React, { useReducer } from 'react'
import authReducer, { initialStateAuth } from '../reducers/authReducer';
import loginReducer, { initialState } from '../reducers/loginReducer';
// import { URL_LOGIN } from '../util/constants';
// import post from '../services/post';


const UserContext = React.createContext({});


  // const dataLogueado = post(URL_LOGIN, data);
   
  
  

function UserProvider ({ children }) {
//viene del loginreducer y se envia mediante el provider al privateRoute
const [storeUser, dispatch] = useReducer(loginReducer, initialState);

  return (
    //se envia el estado y la funcion de dispatch
    <UserContext.Provider value={[storeUser, dispatch]}>
      { children }
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext};