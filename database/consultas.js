function obtenerProductosServicios(categoria = "") {
    //      let lista_filtrada = [];
    //     for (let int i = 0; i < lista_productos.length; i++) {
    //         if(lista_productos[i].codigo_categoria == categoria){
    //             lista_filtrada.push(lista_productos[i]);
    //         }
    //     }
    // }
    //Si no se elige una categoria en especifico se obtiene la lista de todos los productos
    if (categoria == null || categoria == "") {
        return lista_productos;
    } else {

        let lista_filtrada = lista_productos.filter(producto => producto.codigo_categoria === categoria);
        return lista_filtrada;
    }
}

//Funcion que devuelve la informacion de un producto o servicio dado su codigo.
function obtenerProductoServicioPorCodigo(codigo) {
    /*
    for (let index = 0; lista_cursos < lista_cursos.length; index++) {
        if( lista_cursos[index].cidigo === codigo ) {
            return lista_cursos[index];
        }
    }
    return null;
    */
    return lista_productos.find(producto => producto.codigo === codigo);
}


//Funcion relacionada al carrito de compras
function mostrarCarrito() {
     let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let costoTotal = 0;
    let etiqueta_carrito = document.getElementById("etiqueta_carrito");
    etiqueta_carrito.innerHTML = "";

    carrito = obtenerCarrito();

    carrito.forEach((elemento, posicion) => {
        let li = document.createElement("li");
        li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
                    <div class="row">
                        <p class="my-0">${elemento.nombre}</p>
                        <small>$${elemento.precio.toLocaleString("es-CO")}</small>
                    </div>
                    <a class="btn bg-warning text-decoration-none text-dark" href="#" 
                        onclick="eliminarProductoServicio('${posicion}')" >
                        <i class="fa fa-times"></i>
                    </a>
                </div>`;
        etiqueta_carrito.appendChild(li);
        costoTotal = costoTotal + elemento.precio;
    });
    let etiqueta_total = document.getElementById("etiqueta_total");
        //etiqueta_total.innerText = carrito.reduce((total, producto) => total + producto.precio, 0).toLocaleString("es-CO");
        etiqueta_total.innerText = costoTotal.toLocaleString("es-CO");
}

let diccionario = {
    nombre: "carrito",
    items: []
};  


function obtenerCarrito() {
    const str = localStorage.getItem("carrito");
    if (!str) {
        carrito = [];
    } else {
        carrito = JSON.parse(str);
    }
    return carrito;
}

function agregarProductoServicio(producto, mostrar = true) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    if (mostrar == true){
    mostrarCarrito();
    }
}

function eliminarProductoServicio(indice) {
 let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Verificamos que el índice exista
  if (indice >= 0 && indice < carrito.length) {
    carrito.splice(indice, 1); // 👈 Elimina 1 elemento en esa posición
  }

  // Guardamos el nuevo carrito sin ese elemento
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Volvemos a mostrar
  mostrarCarrito();
}


function vaciarCarrito() {
localStorage.removeItem("carrito");
  mostrarCarrito();
}

