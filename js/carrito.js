




let carrito = []


const abrirCarrito = document.getElementById("verCarrito")

  abrirCarrito.addEventListener("click", () => {
  carritoContainer.classList.toggle("oculto")
})



let carritoContainer = document.getElementById("carritoContainer")

renderizar(productos)
function renderizar(ArrayDeProductos){
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


function AgregarAlCarrito(id){

  if (!carrito.some((producto) => producto.id === id)){

    const producto = productos.find((producto) => producto.id === id)

    carrito.push(producto)
  }

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
    <img class="imagen-carrito" src="../img/${producto.rutaImagen}">
    <h2 class="title">${producto.nombre}</h2>
    <p class="title-precio">$${producto.precio}</p>
    <button id="eliminar-${producto.id}" class="boton-eliminar">Eliminar</button>
  ` 
  carritoContent.append(li)

  const botonEliminar = document.getElementById(`eliminar-${producto.id}`)
  botonEliminar.addEventListener("click", () =>{
    eliminarProducto(producto.id)
    })
  })
}
else {
  // Si el carrito está vacío, muestro un texto
  contenedorCarrito.innerHTML = '<p class="title">No hay productos</p>';
}
}







const eliminarProducto = (id) => {
  carrito = carrito.filter((producto) => producto.id != id)

  mostrarCarrito()
}





const mostrarTotal = (contenedor) => {
  const total = carrito.reduce((acc, el) => acc + el.precio, 0)
  contenedor.textContent = `Total: $ ${total}`
}























  /* BtnCarrito.addEventListener("click", (e) => {
    e.preventDefault()
    carrito.push({
      rutaImagen: producto.rutaImagen,
      nombre: producto.nombre,
      precio: producto.precio,
    })

    let total = carrito.reduce((acc, el) => acc + el.precio, 0)

    

    let carritoContent = document.createElement("div")
    carritoContent.classList.add("carrito-content")
    carritoContent.innerHTML= `
    <img class="imagen-carrito" src="../img/${producto.rutaImagen}">
    <h2 class="title">${producto.nombre}</h2>
    <p class="title-precio">$${producto.precio}</p>
    `
    
    carritoContainer.append(carritoContent)
    
    let eliminar = document.createElement("span")
    eliminar.innerText ="❌"
    eliminar.classList.add("eliminar-producto")
    carritoContent.append(eliminar)

    eliminar.addEventListener("click", eliminarProducto)



    let mostrarTotal = document.getElementById("total")
    mostrarTotal.innerHTML=`
    El total de tu carrito es: $${total}
    `

    carritoContainer.append(mostrarTotal)


  }) */