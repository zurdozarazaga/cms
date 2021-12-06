import Cookies from 'universal-cookie';
const cookies = new Cookies();

//con la dependencia npm universal-cookie se obtiene el token de la cookie

//en la funcion Auth() se valida si existe el usuario logueado 

const Auth = () => {
  const token = cookies.get('role');
  const idCookie = cookies.get('id');
  const roleCookie = cookies.get('role');
  if(token && idCookie && roleCookie){
    return true;
  }else{
    return false;
  }
  
};

export default Auth;