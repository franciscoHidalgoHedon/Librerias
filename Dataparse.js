

function saveData(){
    let carritoJSON = JSON.stringify(carrito)
    let articulosJSON = JSON.stringify(articulos)
    sessionStorage.setItem("array_articulos", articulosJSON)
    sessionStorage.setItem("array_carrito", carritoJSON)
    Toastify({
        text: "Datos Guardados!",
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
}

function loadData(){
    let dataCarrito = sessionStorage.getItem("array_carrito")
    let dataArticulos = sessionStorage.getItem("array_articulos")
    let carritoDEJASON = JSON.parse(dataCarrito)
    let articulosDEJASON = JSON.parse(dataArticulos)
    carrito = carritoDEJASON
    articulos = articulosDEJASON
    Toastify({
        text: "Datos Cargados!",
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
}

    
