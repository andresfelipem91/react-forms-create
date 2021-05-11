import React from 'react';

import DatosComercial from '../Datoscomercial/Datoscomercial.comp';
import DatosProducto from '../Datosproducto/Datosproducto.comp';
import DatosLocal from '../Datoslocal/Datoslocal.comp';
import './centrocomercial.style.css'
const CentroComercial= (props) =>{
    //console.log({props.comercioList});
  return(
     <div className="centrocomercial-container">
         {props.comercioList.map((comercio, index) =>{
           return(
               <React.Fragment key={comercio.id}>
                            
                                {console.log(comercio.local)} 
                                <DatosComercial comercioName={comercio.name} />
                             
                             
                                
                                 {comercio.local.map((locals, indexLocal)=>{
                            return(
                                   <React.Fragment key={locals.id}>
                            
                                   
                                
                              
                                         
                                           <DatosLocal   
                                             local={locals}
                                           />
                                 
                                         
                                      
                                         
            
                              
                                
                                      
                                  
                      
                           </React.Fragment>
                           
                     );
                   })}
                                
                   
                            
                           
                  
               </React.Fragment>
           );
         })}
          
                                        
                                          
                                              
                                     
                                                 
                                                   
                                                   
                                                 
                                                   
                                                 
                                             
                                              
                                       
                                        
                                
                
           
            
         
         
     </div>
  );
}

export default CentroComercial ;