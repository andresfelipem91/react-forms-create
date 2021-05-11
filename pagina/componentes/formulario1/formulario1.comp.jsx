import React, { useState } from 'react';

import './formulario1.style.css'
const Formulario1= (props) =>{
  const [id,setId]= useState('');
    //const [nombre,setNombre]= useState('');
    const [nomLocal,setNomLocal]=useState('');
    const [precio,setPrecio]=useState(0);
    const[dueño,setDueño]=useState('');
    const[estado,setEstado]=useState('abierto');
    const[nomerror,setNomError]=useState('');
    const[nomfallo, setNomFallo]=useState(false);
    const[Precioerror,setPrecioError]=useState('');
    const[Preciofallo, setPrecioFallo]=useState(false);
    const[dueñoerror,setDueñoError]=useState('');
    const[dueñofallo, setDueñoFallo]=useState(false);

      const expresiones = {
      nomLocal: /^[a-zA-Z0-9_-]{4,16}$/, // Letras
      precio:  /^[0-9]{4,16}$/, // numeros
      dueños: /^[a-z]$/, // Letras y espacios, pueden llevar acentos.
      estado:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    }
    const guardar=(event)=>{
      event.preventDefault();
      if(!nomLocal.trim()){
        setNomFallo(true)
          setNomError('Lo siento introduce un nombre')
          return
      }
      if(precio <= 0 ){
        setPrecioFallo(true)
        setPrecioError('lo siento introduce el precio no puede ser cero ni menor de cero')
        return
      }
      if(!dueño.trim()){
        setDueñoFallo(true)
          setDueñoError('Lo siento introduce el nombre del dueño')
          return
      }
     
     
      
      
      const newComercio={
        
          id: nomLocal,
          nomlocal: nomLocal,
              precio:precio,
              dueño:dueño,
              estado:estado,
      
      };
      props.onGuardar(newComercio, id);
      
    }
    

    
  return(
     <div className="formulario1-container">
        <form >
          <table>
            <tbody>
                <tr>
                  <td>centrocomercial</td>
                </tr>
                <tr>
                  <td>
                    
                    <input 
                    type="checkbox"
                    
                    value="c1"
                      onChange={(event)=>{
                        setId(event.target.value);
                      }}
                    /> Cable Plaza
                  
                  </td>
                </tr>
                <tr>
                  <td>Nombre local</td>
                </tr>
                <tr>
                  <td>
                     <input 
                       type="text"
                        value={nomLocal}
                        onChange={(event)=>{
                          setNomLocal(event.target.value);
                          setNomFallo(false)
                        }}
                      /> <br />
                      {
                     nomfallo ?(
                       <span  className="error">{nomerror}</span>
                     ):
                     (
                       <span></span>
                     )
                   }
                  </td>
                </tr>
                <tr>
                  <td>Precio </td>
                </tr>
                <tr>
                  <td>$
                  <input 
                  type="number"
                  value={precio}
                  onChange={(event)=>{
                    setPrecio(event.target.value);
                    setPrecioFallo(false)
                  }}
                  /> <br />
                  {
                     Preciofallo ?(
                       <span className="error">{Precioerror}</span>
                     ):
                     (
                       <span></span>
                     )
                   }
                  </td>
                </tr>
                <tr>
                    <td>Dueño</td> 
                </tr>
                <tr>
                  <td>
                  <input
                   
                  type="text"
                  value={dueño}
                  onChange={(event)=>{
                    setDueño(event.target.value);
                    setDueñoFallo(false)
                    
                  }}
                  />
                    <br />
                      {
                     dueñofallo ?(
                       <span className="error">{dueñoerror}</span>
                     ):
                     (
                       <span></span>
                     )
                   }
                  </td>
                  
                  
                </tr>
                <tr>
                  <td>Estado</td>
                </tr>
                <tr>
                    <td>
                      <select
                          type="text"
                          value={estado}
                          onChange={(event)=>{
                          setEstado(event.target.value);
                          }}
                      >
                        <option value="abierto">Abierto</option>
                        <option value="cerrado">Cerrado</option>
                      </select>
                    </td>
                  </tr>
                <tr>
                  <td>
                    <button
                     onClick={guardar}
                    >Guardar</button>
                  </td>
                </tr>
            </tbody>
          </table>
             
            
           
            
           
             
            
        </form>
           
                
           
            
         
         
     </div>
  );
}

export default Formulario1 ;