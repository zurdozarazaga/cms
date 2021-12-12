import '../util/constants';


//post reutilizable
const deleteElement = async (url, id) => {
  try{
    const response = await fetch(`${url}/${id}`, {
      method: 'POST',
      
      body: JSON.stringify(id),
      // body: data,
      headers: {
        // 'Content-Type': 'application/json',
        // 'mode' : 'no-cors'
      },
    });
    //respuesta
    const resp = await response.json();
    if(response.status === 200){
      return resp;
    }else{
      throw(resp.message);
    }
  }
  catch (error) {
    console.log('fetch failed', error);
  }
};


export default deleteElement;