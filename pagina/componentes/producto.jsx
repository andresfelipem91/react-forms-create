
                                {console.log(locals.producto)}
                                {locals.producto.map((productos, indexProducto)=>{
                                 return(
                                   <React.Fragment key={productos.id}>
                                     <DatosProducto producto={productos} />
                                   </React.Fragment>
                                 );
                               })} 