import React, {useState} from 'react';


import './formulario2.style.css'
const Formulario2= (props) =>{
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
                    
                    value="c2"
                      onChange={(event)=>{
                        setId(event.target.value);
                      }}
                    /> Mall Plaza
                  
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
                       <span className="error">{nomerror}</span>
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
 /*const [local,setLocal]= useState('');
  const[nomproducto,setNomProducto]=useState('')
  const[marca,setMarca]=useState('');
  const[peso,setPeso]=useState('');
  const[color,setColor]=useState('');
  const[garantia,setGarantia]=useState('');
  const guardar=(event)=>{
    event.preventDefault();
  const newProducto={
        
       id: nomproducto,
       nomombreproducto:nomproducto,
        marca: marca,
        peso:peso,
        color:color,
        garantia:garantia,

};
props.onGuardar(newProducto,local);
  }
  return(
     <div className="formulario2-container">
       <form >
         <table>
           <tbody>
             <tr>
               <td>Local</td>
             </tr>
             <tr>
               
               <td>
                 <input
                  type="text" 
                  value={local}
                  onChange={(event)=>{
                    setLocal(event.target.value);
                  }}
                  />
               </td>
             </tr>
             <tr>
               <td>Nombre Producto</td>
              
             </tr>
             <tr>
             <td>
                 <input 
                 type="text"
                 value={nomproducto}
                  onChange={(event)=>{
                    setNomProducto(event.target.value);
                  }}
                  />
               </td>
             </tr>
             <tr>
               <td>Marca</td>
              
             </tr>
             <tr>
             <td>
                 <input 
                 type="text"
                 value={marca}
                  onChange={(event)=>{
                    setMarca(event.target.value);
                  }}
                  />
               </td>
             </tr>
             <tr>
               <td>peso</td>
             </tr>
             <tr>
               <td>
                 <input 
               type="number"
               value={peso}
                onChange={(event)=>{
                setPeso(event.target.value);
                  }}
               />
               </td>
               
             </tr>
             <tr>
               <td>Color</td>
             </tr>
             <tr>
               <td>
                 <input
                  type="text"
                  value={color}
                  onChange={(event)=>{
                    setColor(event.target.value);
                  }}
                  />
               </td>
             </tr>
             <tr>
               <td>Garantia</td>
             </tr>
              <tr>
                <td>SI
                
                  <input 
                  type="checkbox" 
                  value="si"
                  onChange={(event)=>{
                    setGarantia(event.target.value);
                  }}
                  />
                </td>
              </tr>
              <tr>
                <td>No
                <input 
                type="checkbox" 
                value="no"
                  onChange={(event)=>{
                    setGarantia(event.target.value);
                  }}
                 />
                 </td>
              </tr>
              <tr>
                <td>
                  <button
                  onClick={guardar}
                  >
                    Guardar
                  </button>
                </td>
              </tr>
           </tbody>
         </table>
       </form>
     
                      
               
                
           
             
         
     </div>
  );*/
}

export default Formulario2 ;