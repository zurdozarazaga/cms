import React from 'react'



const onSubmit = (data, e) => {
  e.target.reset();
  handlePost(data);
};

export default onSubmit;