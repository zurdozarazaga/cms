import React from 'react';

import Cookies from 'universal-cookie';
import checkOrder from '../services/check';

const cookies = new Cookies();
export const Checkbox = ({idCheck}) => {
  const idCookie = cookies.get('id');
  const handleCheck = async() => {
    const checkbox = {
      order_id: idCheck,
      user_id: idCookie
    };
    await checkOrder(checkbox) 
  };

  return (
  <div>
    <input 
      type='checkbox'
      onClick={handleCheck}
      >

    </input>
  </div>);
};

export default Checkbox;
