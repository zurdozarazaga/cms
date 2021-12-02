import '../util/constants';
import {  useNavigate  } from 'react-router-dom';
import Cookies from 'universal-cookie'



const cookies = new Cookies();
const post = async (URL_LOGIN, data) => {
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
    const resp = await response.json();
    if (await resp.role.length > 0) {
      // const respuesta = resp[0];
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


export default post;