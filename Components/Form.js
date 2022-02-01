import React from 'react';

export const Form = ({Estado,setEstado}) => {

    const RemElement=y=>{
        const arreglo=Object.values(Estado)
        let cont=0;
        let temp=[]
        arreglo.forEach(element => {
            if(cont!==y){
                temp=[...temp, element]
            }
            
            cont++;
        });
        setEstado(temp)
    }
    const getElement=(Elemento,y)=>{
        const {component, label,type,_uid, opts}=Elemento
        
        
        switch(component){
            case 'Text': return <div className='align padding-y' key={y}>
                                    <label className='padding-x'>{label}:</label>
                                    <input placeholder={type} ></input>
                                    <button className='margin-x btn-add' onClick={()=>{RemElement(y)}} >-</button>
                                </div>
            case 'Options': return <div className='align padding-y' key={y}>
                                        <label className='padding-x'>{label}:</label>
                                        <button className='margin-x btn-add' onClick={()=>{RemElement(y)}}>-</button>
                                        <div className='center'>
                                        {opts.map((opt)=><>
                                            <label>{opt}</label>
                                            <input type={type} name='opt' key={opt}  value={opt}/>
                                            </>)}
                                        </div>
                                    </div>
            case 'Select': return <div className='align padding-y' key={y}>
                                    <label className='padding-x'>{label}:</label>
                                    <select name='opts' className='center' >
                                    {opts.map((opt)=><>
                                        <option type={type} name='opt' key={opt}  value={opt} selected >{opt}</option>
                                        </>)}
                                    </select>
                                    <button className='margin-x btn-add' onClick={()=>{RemElement(y)}}>-</button>
                                </div>
      
            default: return <></>
        }
      }

  return <div className='border ' >
       <h4 className='center'> Asi va quedando tu formulario </h4>
       <div className='column'>
    {Object.values(Estado).map((field,y)=>getElement(field,y)
        )

        }
    </div>
  </div>;
};
