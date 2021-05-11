import React from 'react';
import './Datoscomercial.style.css'
const DatosComercial= (props) =>{
  return(
     <div className="Datoscomercial-container">
       <table>
         <tbody>
         
            <tr >
              <td >{props.comercioName}</td>
              
              
              
            </tr>
          
         </tbody>
         
       </table>
           
         
     </div>
  );
}

export default DatosComercial ;