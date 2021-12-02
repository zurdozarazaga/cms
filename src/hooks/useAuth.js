import Cookies from 'universal-cookie';
const cookies = new Cookies();

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