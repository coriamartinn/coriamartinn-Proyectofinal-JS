let carrito = JSON.parse(localStorage.getItem("carrito"))

const abrirCarrito = document.getElementById("verCarrito")

  abrirCarrito.addEventListener("click", () => {
  carritoContainer.classList.toggle("oculto")
})

const cantidadContador = () => {
  let contadorCarrito = document.getElementById('cantidadContador')
  contadorCarrito.innerText = `${carrito.length}`
}

cantidadContador()

let carritoContainer = document.getElementById("carritoContainer")


const renderizar = (ArrayDeProductos) => {
  let contenedor = document.getElementById("container")
  contenedor.innerHTML = ""

  ArrayDeProductos.forEach(producto => {
    let cardProductos = document.createElement("div")

    cardProductos.classList.add("card")
    
    cardProductos.innerHTML = `
    <h2 class="title">${producto.nombre}</h2>
    <img class="imagen-producto" src="../img/${producto.rutaImagen}">
    <p class="title-precio">$${producto.precio}</p>
    <button id="agregar-${producto.id}" class="btn">Agregar al Carrito</button>
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

  carrito.forEach((producto) => {
    const li = document.createElement("li")
    li.classList.add("li-content")
    li.innerHTML= `
    <div class="carrito-content-div">
    <img class="imagen-carrito" src="../img/${producto.rutaImagen}">
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






renderizar(productos)
mostrarCarrito()
















