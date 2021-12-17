import React, { useReducer } from 'react';
import loginReducer, { initialState } from '../reducers/loginReducer';
// import { URL_LOGIN } from '../util/constants';
// import post from '../services/post';


const UserContext = React.createContext({});


function UserProvider ({ children }) {
//viene del loginreducer y se envia mediante el provider al privateRoute
const [storeUser, dispatch] = useReducer(loginReducer, initialState);
const [openModal, setOpenModal] = React.useState(false);
  return (
    //se envia el estado y la funcion de dispatch
    <UserContext.Provider value={[storeUser,
      dispatch,
      openModal,
      setOpenModal
     ]}>
      { children }
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext};