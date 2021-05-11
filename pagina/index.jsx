import React, {useState} from 'react';
import CentroComercial from './componentes/centrocomercial/centrocomercial.comp';
import Formulario1 from './componentes/formulario1/formulario1.comp';
import Formulario2 from './componentes/formulario2/formulario2.comp';

const ComercioPage= () =>{
    let comercioList=[
            {
            id:"c1",
              name:'Cable Plaza',
              local:[
                {
                  id:"1",
                  nomlocal:"pequeñin",
                  precio:"500000",
                  dueño:"carlos",
                  estado:"abierto",
                  /*producto:[
                    {
                      id:"pp1",
                      nomproducto:"pañales",
                      marca:"pequeñil",
                      peso:"10g",
                      color:"blanco",
                      garantia:"si",
                    },
                  ]*/

                },
                  
              ]
            },
            {
              id:"c2",
                name:'Mall Plaza',
                local:[
                  {
                    id:"12",
                    nomlocal:"kfc",
                    precio:"1500000",
                    dueño:"roberto",
                    estado:"cerrado",
                    /*producto:[
                      {
                        id:"p102",
                        nomproducto:"pollo",
                        marca:"kfc",
                        peso:"10",
                        color:"cafe",
                        garantia:"no",
                      },
                    ]*/
  
                  },
                    
                ]
              },
           
        ];
      
        const [comercion, setComercio]= useState(comercioList);
       
  return(
     <div className="centrar">
        <Formulario2
        onGuardar={(ComercioObj,comercioId)=>{
          const newComercio=[];
          for(let i=0; i< comercion.length;i++){
            if(comercion[i].id !== comercioId){
              newComercio.push(comercion[i])
            }else{
             newComercio.push(
               {
                 ...comercion[i],
                 local:[...comercion[i].local,ComercioObj]
                });
            }
          }
          
         
         setComercio(newComercio);

          console.log(newComercio);
         
       }}
           /*onGuardar={(productoObj,LocalId)=>{
             //1.crear nuevo arreglo de "local"
             const newProducto=[];
            for(let i=0; i<comercion.length; i++){
              if(comercion[i].id !== LocalId)
              {
                newProducto.push(comercion[i]);
              }else
              {
                  newProducto.push(
                    {
                      ...comercion[i],
                      producto:[...comercion[i].producto, productoObj]
                    }
                    );
              }
            }
           console.log({newProducto});
         }}*/
        />
         <CentroComercial 
         comercioList={comercion} 
         
         />
         
           <Formulario1  
             onGuardar={(ComercioObj,comercioId)=>{
               const newComercio=[];
               for(let i=0; i< comercion.length;i++){
                 if(comercion[i].id !== comercioId){
                   newComercio.push(comercion[i])
                 }else{
                  newComercio.push(
                    {
                      ...comercion[i],
                      local:[...comercion[i].local,ComercioObj]
                     });
                 }
               }
               
              
              setComercio(newComercio);

               console.log(newComercio);
              
            }}
           />
         
         
         
    
     </div>
  );
}

export default ComercioPage;