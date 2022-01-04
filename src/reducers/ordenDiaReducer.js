//Reducer de ordenes
const initialStateOrdenes = {
  ordenes: {},
};

const ordenDiaReducer = (state = initialStateOrdenes, action) => {
  console.log('action',action);
  
  switch (action.type) {
    case 'SET_ORDENES':
      return {
        ...state,
        ordenes: action.payload,
      };
    case 'DELETE_ORDEN':
      return {
        ...state,
        ordenes: state.ordenes.filter(ord => ord.id !== action.payload),
      };
    case 'SUBMIT_MODAL':
      return {
        ...state,
        ordenes: [...state.ordenes, action.payload],
      };
    default:
      return state;
  }
};

console.log('initialStateOrdenes',initialStateOrdenes);
export {ordenDiaReducer, initialStateOrdenes};