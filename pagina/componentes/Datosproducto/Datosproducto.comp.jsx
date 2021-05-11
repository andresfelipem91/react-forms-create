import React from 'react';
import './Datosproducto.style.css'
const DatosProducto= (props) =>{
  return(
     <div className="Datosproducto-container">
       <table>
         <tbody>
         
            <tr >
              <td >{props.producto.nomproducto}</td>
              <td className="datos">{props.producto.marca}</td>
              <td className="datos">{props.producto.peso}</td>
              <td className="datos">{props.producto.color}</td>
              <td className="datos">{props.producto.garantia}</td>
              
            </tr>
         </tbody>
         
       </table>
           
         
     </div>
  );
}

export default DatosProducto ;