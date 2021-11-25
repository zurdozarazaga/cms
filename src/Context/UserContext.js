import React from 'react'
import { URL_LOGIN } from '../util/constants';
import post from '../services/post';


const UserContext = React.createContext({});

const initalUser = {id: 1, nick: 'admin', pass: '1234' }

  // const dataLogueado = post(URL_LOGIN, data);
   
  
  

function UserProvider ({ children }) {
  const [user, setUser] = React.useState(initalUser);
  
  const login = () => {
    setUser(initalUser);
  }

  const data = { user, login};
  
  return (
    <UserContext.Provider value={{data}}>
      { children }
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext};