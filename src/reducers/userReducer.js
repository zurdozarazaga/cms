// Store of users
// Aca se creara el reducer y el dispatch para el store de usuarios


//initial state
const initialState = {
  id: null,
  nick: null,
  pass: null,
};

//creaamos los action creators

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        id: action.id,
        nick: action.nick,
        pass: action.pass,
      };
    case 'UNSET_USER':
      return {
        id: null,
        nick: null,
        pass: null,
      };
    default:
      return state;
  }
};

export default userReducer;
export { initialState };
