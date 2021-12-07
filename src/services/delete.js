import '../util/constants';


//post reutilizable
const deleteElement = async (url, id) => {
  try{
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      
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
      console.log(resp);
    }else{
      throw(resp.message);
    }
  }
  catch (error) {
    console.log('fetch failed', error);
  }
};


export default deleteElement;