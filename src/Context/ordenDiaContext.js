// context for OrdenDia
import react from 'react';
import { useReducer } from 'react';
import { initialState, modalReducer } from '../reducers/modalReducer';
import {ordenDiaReducer, initialStateOrdenes} from '../reducers/ordenDiaReducer';



 const OrdenDiaContext = react.createContext({});

 const OrdenDiaProvider = ({ children }) => {
  const [submit, dispatch] = useReducer(modalReducer,  initialState);
  const [ordenes, dispatchOrdenes] = useReducer(ordenDiaReducer,  initialStateOrdenes);
  console.log('ordenes',ordenes);
  
  
  return (
    <OrdenDiaContext.Provider value={[ ordenes, dispatchOrdenes, submit, dispatch]}>
      { children }
    </OrdenDiaContext.Provider>
  );
};

  export { OrdenDiaProvider, OrdenDiaContext };