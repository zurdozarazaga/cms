const initialStateAuth = {
  auth: false,
}
//es enviado al UserContext y debido a eso se comunica con el login por context. 
const authReducer = (state , action) => {
  console.log(state, action);
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        
        auth: state,
      };
      default:
        return state;
  };
};
export { initialStateAuth};
export default authReducer;