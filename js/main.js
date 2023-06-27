

//Arrays productos

let productos = [
  {id: 1, nombre: "iphone SE", version: "2020", precio: 220, rutaImagen:"iphone-se.jpeg"},
  {id: 2, nombre: "iphone XS", version: "2019", precio: 320, rutaImagen:"iphone-xs.jpeg"},
  {id: 3, nombre: "iphone XR", version: "2019", precio: 420, rutaImagen:"iphone-xr.jpeg"},
  {id: 4, nombre: "iphone 11", version: "2020", precio: 520, rutaImagen:"iphone-11.jpeg"},
  {id: 5, nombre: "iphone 11 PRO", version: "2021", precio: 570, rutaImagen:"iphone-11-pro.jpeg"},
  {id: 6, nombre: "iphone 11 PRO MAX", version: "2021", precio: 600, rutaImagen:"iphone-11-pro-max.jpeg"},
  {id: 7, nombre: "iphone 12 PRO", version: "2022", precio: 620, rutaImagen:"iphone12-pro.jpeg"},
  {id: 8, nombre: "iphone 13 PRO MAX", version: "2022", precio: 670, rutaImagen:"iphone13-promax.jpeg"},
  {id: 9, nombre: "iphone 14", version: "2023", precio: 800, rutaImagen:"iphone14.jpeg"},
  {id: 10, nombre: "iphone 14 PRO MAX", version: "2023", precio: 1000, rutaImagen:"iphone14-promax.jpeg"}
]



let carrito = []

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
    <button class="btn" id="${producto.id}">Agregar al Carrito</button>
    `
    contenedor.append(cardProductos)

    let AgregarProductoCarrito = document.getElementById(producto.id)
    AgregarProductoCarrito.addEventListener("click", (e) => {
      e.preventDefault()
      carrito.push({
        rutaImagen: producto.rutaImagen,
        nombre: producto.nombre,
        precio: producto.precio,
      })
      let carritoContainer = document.getElementById("carritoContainer")
      let carritoHeader = document.createElement("div")
      carritoHeader.classList.add("header-carrito")
      carritoHeader.innerHTML=`
        <h3 class="title-carrito">carrito</h3>
      `
      carritoContainer.append(carritoHeader)

      
      let carritoContent = document.createElement("div")
      carritoContent.classList.add("carrito-content")
      carritoContent.innerHTML= `
      <img class="imagen-producto" src="../img/${producto.rutaImagen}">
      <h2 class="title">${producto.nombre}</h2>
      <p class="title-precio">$${producto.precio}</p>
      `
      
      carritoContainer.append(carritoContent)
      
      
        
      let total = carrito.reduce((acc, el) => acc + el.precio, 0)

      let carritoFooter = document.createElement("div")
      carritoFooter.classList.add("carrito-footer")
      carritoFooter.innerHTML=`
        <p class="title-precio">Su total a pagar es: ${total}</p>
      `

      carritoContainer.append(carritoFooter)

      
    })
  })
}






const abrirCarrito = document.getElementById("verCarrito")

  abrirCarrito.addEventListener("click", () => {
  carritoContainer.classList.toggle("oculto")
})





/* <div class="carrito-content">
</div>
  */




