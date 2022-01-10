import '../util/constants';
import Cookies from 'universal-cookie'



const cookies = new Cookies();
//recibe la data del onSubmit del formulario en Login
const login = async (URL_LOGIN, data,) => {  
  try{
    const response = await fetch(URL_LOGIN, {
      method: 'POST',
      
      body: JSON.stringify(data),
      // body: data,
      headers: {
        // 'Content-Type': 'application/json',
        // 'mode' : 'no-cors'
      },
    });
    //respuesta
    const resp = await response.json();
     console.log(resp);
    //comporbacion si la respuesta es la correcta
    if (await resp.role.length > 0) {
      // const respuesta = resp[0];
      //se guarda en las cookies el token
      cookies.set('id', resp.id, { path: '/' });
      cookies.set('role', resp.role, { path: '/' });
      cookies.set('name', resp.name, { path: '/' });
    }else{
      console.log('no hay respuesta');
    }
  }
  catch (error) {
    console.log('fetch failed', error);
  }
};


export default login;