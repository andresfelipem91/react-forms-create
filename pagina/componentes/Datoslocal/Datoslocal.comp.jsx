import React from 'react';
import './Datoslocal.style.css'

const DatosLocal= (props) =>{
  return(
     <div className="Datoslocal-container">
       <table>
         <tbody>
         <tr>
                                  <th>Nombre local</th> 
                                  <th>Precio</th> 
                                  <th>Dueño</th> 
                                  <th>Estado</th> 
                                </tr>
            <tr >
              <td >{props.local.nomlocal}</td>
              <td className="datos">${props.local.precio}</td>
              <td className="datos">{props.local.dueño}</td>
              {props.local.estado === "cerrado"
               ?
               <td className="estado-comercio">{props.local.estado}</td>
               :
              <td className="datos">{props.local.estado}</td>
              }
              
            </tr>
         </tbody>
         
       </table>
           
         
     </div>
  );
}

export default DatosLocal ;