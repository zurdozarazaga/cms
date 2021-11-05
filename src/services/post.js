import '../util/constants';

const post = async (URL_LOGIN, data) => {
  console.log(URL_LOGIN);
  console.log(data);
  try{
    const response = await fetch(URL_LOGIN, {
      method: 'POST',
      
      body: JSON.stringify(data),
      // body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resp = await response.json();
    console.log(resp) 
  }
  catch (error) {
    console.log('fetch failed', error);
  }
};


export default post;