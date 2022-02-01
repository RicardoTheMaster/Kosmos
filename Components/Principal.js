import React,{ useState } from 'react';
import { Elements } from './Elements';
import { Form } from './Form';

export const Principal = () => {
  const [Estado, setEstado] = useState([]);
  return <div className='Home'>
      <Elements Estado={Estado} setEstado={setEstado} />
      <Form Estado={Estado} setEstado={setEstado}/>
  </div>;
};
