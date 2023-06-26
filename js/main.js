//Arrays productos

let productos = [
  {id: 1, nombre: "iphone SE", version: "2020", precio: 220},
  {id: 2, nombre: "iphone XS", version: "2019", precio: 320},
  {id: 3, nombre: "iphone XR", version: "2019", precio: 420},
  {id: 4, nombre: "iphone 11", version: "2020", precio: 520},
  {id: 5, nombre: "iphone 11 PRO", version: "2021", precio: 570},
  {id: 6, nombre: "iphone 11 PRO MAX", version: "2021", precio: 600},
  {id: 7, nombre: "iphone 12 PRO", version: "2022", precio: 620},
  {id: 8, nombre: "iphone 13 PRO MAX", version: "2022", precio: 670},
  {id: 9, nombre: "iphone 14", version: "2023", precio: 800},
  {id: 10, nombre: "iphone 14 PRO MAX", version: "2023", precio: 1000}
]



let carrito = []

/* function listado(){
  let listado = ""
  productos.forEach(producto => {
    listado += `Nombre: ${producto.nombre} - Precio: ${producto.precio}$ - ID: ${producto.id}\n`
  })

  alert(listado)
} */

function agregarAlCarrito(){
  elegirProducto = Number(prompt("indique el ID del producto a agregar!!!"))
  const productoElegido = productos.find(producto => producto.id === elegirProducto)
     if(productoElegido){
       carrito.push(productoElegido)
       alert(`${productoElegido.nombre} Se ha agregado correctamente!!`)
     }else{
       alert("no existe ese id")
     }
  }

  function totalProductos(){
    let total = 0
    carrito.forEach((producto) => total += producto.precio)
    alert(`Su precio total es: ${total}`)
   }




/*  function finalizarCompra(){
  alert(`Su carrito contiene: ${carrito.nombre} - ${carrito.precio}\n`)
 } */


/*  opciones() */

/*   function opciones(){
  while (true){
    let mensaje = "ELIJA SU OPCION\n1-Ver listado de productos\n2-agregar al carrito\n3-Ver total a pagar\n4-Finalizar compra\n5-salir"
    let numero = Number(prompt(`${mensaje}`))

    if (numero === 1){
      listado()
    }
    else if(numero === 2 ){
      agregarAlCarrito()
  }
    else if(numero === 3){
      totalProductos()
    }
    
    else if(numero === 4){
      finalizarCompra()
    }
        else if(numero === 5){
      break
    }
    
    else{
      alert("Porfavor elegi una opcion valida!!")
    }


}
} */





function renderizar(ArrayDeProductos){
  let contenedor = document.getElementById("container")
  contenedor.innerHTML = ""

  ArrayDeProductos.forEach(productos => {
  
    let cardProductos = document.createElement("div")

    cardProductos.classList.add("card")
    
    cardProductos.innerHTML = `
    <h2 class="title">${producto.nombre}</h2>
    <div class="imagen-producto"></div>
    <p class="title-precio">$${producto.precio}</p>
    <button id="${producto.id}" class="btn">Agregar al Carrito</button>
    `

    contenedor.appendChild(cardProductos)
    let botonAgregarAlCarrito = document.getElementById(producto.id)
    botonAgregarAlCarrito.addEventListener("click", (e) => console.log(e.target.id))
  })

 
}

renderizar(productos)