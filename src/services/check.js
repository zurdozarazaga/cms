import '../util/constants';
import { URL_CHECKBOX } from '../util/constants';


//post reutilizable
const checkOrder = async (data) => {
  debugger;
  console.log(data);
  try{
    const response = await fetch(URL_CHECKBOX, {
      method: 'POST',
      body: JSON.stringify(data),
      
      headers: {
        // 'Content-Type': 'application/json',
        // 'mode' : 'no-cors'
      },
    });
    //respuesta
    debugger;
        const resp = await response.json();
    console.log(resp);
    if(response.status === 200){
      console.log('status 200');
      return resp;
    }else{
      throw(resp.message);
      
    }
  }
  catch (error) {
    debugger;
    console.log('fetch failed', error);
  }
};


export default checkOrder;