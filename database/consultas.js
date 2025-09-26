function obtenerProductosServicios(categoria = ""){
//      let lista_filtrada = [];
//     for (let int i = 0; i < lista_productos.length; i++) {
//         if(lista_productos[i].codigo_categoria == categoria){
//             lista_filtrada.push(lista_productos[i]);
//         }
//     }
// }

    let lista_filtrada = lista_productos.filter(producto => producto.codigo_categoria === categoria);
    return lista_filtrada;
}