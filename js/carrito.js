let carrito = JSON.parse(localStorage.getItem("carrito")) || []

const cantidadContador = () => {
  let contadorCarrito = document.getElementById('cantidadCarrito')
  contadorCarrito.innerText = `${carrito.length}`
}
cantidadContador()

const abrirYcerrarCarrito = () => {
  const abrirCarrito = document.getElementById("verCarrito")

  abrirCarrito.addEventListener("click", () => {
  carritoContainer.classList.toggle("oculto")
  })
}
abrirYcerrarCarrito()



let carritoContainer = document.getElementById("carritoContainer")


const renderizar = (ArrayDeProductos) => {
  let contenedor = document.getElementById("container")
  contenedor.innerHTML = ""

  ArrayDeProductos.forEach(producto => {
    let cardProductos = document.createElement("div")

    cardProductos.classList.add("card")
    
    cardProductos.innerHTML = `
    <h2 class="title">${producto.nombre}</h2>
    <img class="imagen-producto" src="${producto.rutaImagen}">
    <p class="title-precio">$${producto.precio}</p>
    <button id="agregar-${producto.id}" class="cartBtn"><svg class="cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  agregar al carrito
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="product"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path></svg>
</button>
    `
    contenedor.append(cardProductos)

    const botonAgregar = document.getElementById(`agregar-${producto.id}`)

    botonAgregar.addEventListener("click", () => {
      AgregarAlCarrito(producto.id)
    })
  })
}


const AgregarAlCarrito = (id) => {

  if (!carrito.some((producto) => producto.id === id)){

    const producto = productos.find((producto) => producto.id === id)

    carrito.push({...producto, cantidad: 1})
  }else{
    const producto = carrito.find((producto) => producto.id === id)
    producto.cantidad++
  }

  mostrarNotificacion()
  localStorage.setItem("carrito", JSON.stringify(carrito))

  cantidadContador()
  mostrarCarrito()
}


const mostrarCarrito = () => {
  let contenedorCarrito = document.getElementById("carritoContainer")
  contenedorCarrito.innerHTML = ""

  if(carrito.length > 0){
    const carritoContent = document.createElement("ul")
    carritoContent.classList.add("carrito-content")
  contenedorCarrito.appendChild(carritoContent)

  const contenedorDelTotal = document.createElement("p")
  contenedorDelTotal.classList.add("title-total")
  mostrarTotal(contenedorDelTotal)
  contenedorCarrito.append(contenedorDelTotal)

  const finalizarCompra = document.createElement("div")
  finalizarCompra.innerHTML= `
  <button class="btn-pay">
  Pay
  <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
</button>
  `
  contenedorCarrito.append(finalizarCompra)

  carrito.forEach((producto) => {
    const li = document.createElement("li")
    li.classList.add("li-content")
    li.innerHTML= `
    <div class="carrito-content-div">
    <img class="imagen-carrito" src="${producto.rutaImagen}">
    <h2 class="title">${producto.nombre}</h2>
    <p class="title-precio">$${producto.precio}</p>
    <button id="decrementar-${producto.id}" class="boton-decrementar">-</button>
    <p class="title-precio">${producto.cantidad}u.</p>
    <button id="incrementar-${producto.id}" class="boton-incrementar">+</button>
    </div>
    <button id="eliminar-${producto.id}" class="boton-eliminar">Eliminar</button>
  ` 
  carritoContent.append(li)

  const botonEliminar = document.getElementById(`eliminar-${producto.id}`)
  botonEliminar.addEventListener("click", () =>{
    eliminarProducto(producto.id)
    })

    const decrementar = document.getElementById(`decrementar-${producto.id}`)
    decrementar.addEventListener("click", () => {
      decrementarProducto(producto.id)
    })

    const incrementar = document.getElementById(`incrementar-${producto.id}`)
    incrementar.addEventListener("click", () => {
      incrementarProducto(producto.id)
    })
  })
}
else {
  
  contenedorCarrito.innerHTML = '<p class="title">No hay productos</p>'
}

cantidadContador()
}


const eliminarProducto = (id) => {
  carrito = carrito.filter((producto) => producto.id != id)

  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarNotificacionEliminar()
  mostrarCarrito()
}


const mostrarTotal = (contenedor) => {
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
  contenedor.textContent = `Total: $ ${total}`
}



const incrementarProducto = (id) => {
  const producto = carrito.find((elemento) => elemento.id === id)
  producto.cantidad++

  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarCarrito()
}


const decrementarProducto = (id) => {
  const producto = carrito.find((elemento) => elemento.id === id)

  if(producto.cantidad === 1){
    eliminarProducto(producto.id)
  }
  else{
    producto.cantidad--

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito()
  }
}


const mostrarNotificacion = () => {
  Toastify({

    text: "Se agrego exitosamente!!",
    
    duration: 3000,

    position: "center",
    
    style: {
      background: "rgb(195, 50, 200)",
    }
    }).showToast()
}


const mostrarNotificacionEliminar = () => {
  Toastify({

    text: "Se elimino correctamente!!",
    
    duration: 3000,

    position: "center"
    
    }).showToast()
}




mostrarCarrito()






fetch("./js/productos.json")
.then(response => response.json())
.then((productos) => {
  renderizar(productos)
  AgregarAlCarrito()
})









