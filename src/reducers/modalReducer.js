//reducer for ordenDiaReducer
 const initialState = {submit: false};
console.log('initialState',initialState);

const modalReducer = (state = initialState, action) => {
  console.log('action',action);

  switch (action.type) {
    case 'SUBMIT_MODAL':
      return {
        ...state,
        submit : action.payload,
      } 
    default:
      return state;
  }
};
console.log('initialState after reducer',initialState);

export {modalReducer, initialState};
