

//Arrays productos

let productos = [
  {id: 1, nombre: "iphone SE", version: "2020", precio: 220, rutaImagen:"iphone-se.png"},
  {id: 2, nombre: "iphone XS", version: "2019", precio: 320, rutaImagen:"iphone-xs.png"},
  {id: 3, nombre: "iphone XR", version: "2019", precio: 420, rutaImagen:"iphone-xr.png"},
  {id: 4, nombre: "iphone 11", version: "2020", precio: 520, rutaImagen:"iphone-11.png"},
  {id: 5, nombre: "iphone 11 PRO", version: "2021", precio: 570, rutaImagen:"iphone-11-pro.png"},
  {id: 6, nombre: "iphone 11 PRO MAX", version: "2021", precio: 600, rutaImagen:"iphone-11-pro-max.png"},
  {id: 7, nombre: "iphone 12 PRO", version: "2022", precio: 620, rutaImagen:"iphone12-pro.png"},
  {id: 8, nombre: "iphone 13 PRO MAX", version: "2022", precio: 670, rutaImagen:"iphone13-promax.png"},
  {id: 9, nombre: "iphone 14", version: "2023", precio: 800, rutaImagen:"iphone14.png"},
  {id: 10, nombre: "iphone 14 PRO MAX", version: "2023", precio: 1000, rutaImagen:"iphone14-promax.png"}
]

let contenedor = document.getElementById("container")
let carritoContainer = document.getElementById("carritoContainer")




let carrito = []


renderizar(productos)

function renderizar(ArrayDeProductos){
  contenedor.innerHTML = ""

  ArrayDeProductos.forEach(producto => {
    let cardProductos = document.createElement("div")

    cardProductos.classList.add("card")
    
    cardProductos.innerHTML = `
    <h2 class="title">${producto.nombre}</h2>
    <img class="imagen-producto" src="../img/${producto.rutaImagen}">
    <p class="title-precio">$${producto.precio}</p>
    `
    contenedor.append(cardProductos)

    agregarAlCarrito()
  })
}


function agregarAlCarrito(){
  let AgregarProductoCarrito = document.createElement("button")
  AgregarProductoCarrito.classList.add("btn")
  AgregarProductoCarrito.innerText = "Agregar al Carrito"
  cardProductos.append(AgregarProductoCarrito)

  AgregarProductoCarrito.addEventListener("click", (e) => {
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
  })
}

const eliminarProducto = () => {
  const foundId = carrito.find(elemento => elemento.id)

  const carritoP = carrito.filter(carritoId => {
    return carritoId !== foundId
  })

  renderizar()
}




const abrirCarrito = document.getElementById("verCarrito")

  abrirCarrito.addEventListener("click", () => {
  carritoContainer.classList.toggle("oculto")
})