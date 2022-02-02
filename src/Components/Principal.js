import React,{ useState } from 'react';
import { Elements } from './Elements';
import { Form } from './Form';

export const Principal = () => {
  const [Estado, setEstado] = useState([]);

  return<div className='allscreen back'>
      <div className='center tittle'>
        <h3>Creador de formularios.</h3>
      </div> 
      <div className='Home'>
        <Elements Estado={Estado} setEstado={setEstado} />
        <Form Estado={Estado} setEstado={setEstado}/>
      </div>
  </div>
};
 

