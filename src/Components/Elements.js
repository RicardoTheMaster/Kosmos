import React from 'react';

export const Elements = ({Estado,setEstado}) => {

 const fields=[{component:'Text',label:'Nombre',type:'Text',_uid:'987-789',}
 ,{component:'Text',label:'Edad',type:'Number',_uid:'741-147',}
 ,{component:'Options',label:'Parentesco',type:'radio',opts:['Madre','Padre','Hijo','Hermano','Primo','Otro'],_uid:'654-456',}
 ,{component:'Select',label:'Lugar de nacimiento',type:'select',opts:['Durango','CD MX.','Chihuahua','Nayarit','Jalisco','Otro'],_uid:'321-123',}]
 

 const AddElement=(element)=>{
  setEstado([...Estado, element])
 }
 const getElement=(Elemento)=>{
  const {component, label,type,_uid, opts}=Elemento

  switch(component){
      case 'Text': return <div className='align padding-y' key={_uid}>
                              <label className='padding-x'>{label}:</label>
                              <input placeholder={type} disabled></input>
                              <button className='margin-x btn-add' onClick={()=>{AddElement(Elemento)}} >+</button>
                          </div>
      case 'Options': return <div className='align padding-y' key={_uid}>
                                  <label className='padding-x'>{label}:</label>
                                  <button className='margin-x btn-add' onClick={()=>{AddElement(Elemento)}}>+</button>
                                  <div className='row'>
                                  {opts.map((opt)=><>
                                     <div>
                    
                                      <input type={type} name='opt' key={opt} disabled value={opt}/>
                                      <label>{opt}</label>
                                      </div>
                                      </>)}
                                  </div>
                              </div>
      case 'Select': return <div className='align padding-y' key={_uid}>
                              <label className='padding-x'>{label}:</label>
                              <select name='opts' className='center' disabled>
                              {opts.map((opt)=><>
                                  <option type={type} name='opt' key={opt}  value={opt} selected >{opt}</option>
                                  </>)}
                              </select>
                              <button className='margin-x btn-add' onClick={()=>{AddElement(Elemento)}}>+</button>
                          </div>

      default: return <></>
  }
}

  return <div className='border'>
    <h4 className='center subtittle'> Selecciona los elementos de tu formulario </h4>   
    <div className='column text'>
    {Object.values(fields).map((field)=>getElement(field)
        )

        }
    </div>
  </div>;
};
