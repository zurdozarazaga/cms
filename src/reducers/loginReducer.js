// reducer for login
//obtendra los datos del login

const initialState = {
  nick: '',
  pass: '',
}
//es enviado al UserContext y debido a eso se comunica con el login por context. 
const loginReducer = (state , action) => {
  console.log(state, action);
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        nick: action.payload.nick,
        pass: action.payload.pass,
      };
      default:
        return state;
  };
};
export { initialState};
export default loginReducer;