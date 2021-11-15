const get = async (URL_LOGIN) => {
  try{
    const response = await fetch(URL_LOGIN, {
      method: 'GET',

      headers: {
        // 'Content-Type': 'application/json',
        // 'mode' : 'no-cors'
      },
    });
    const resp = await response.blob();
    console.log(resp) 
  }
  catch (error) {
    console.log('fetch failed', error);
  }
};

export default get;