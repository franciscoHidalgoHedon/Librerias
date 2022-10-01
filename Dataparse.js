

function saveData(){
    let carritoJSON = JSON.stringify(carrito)
    let articulosJSON = JSON.stringify(articulos)
    sessionStorage.setItem("array_articulos", articulosJSON)
    sessionStorage.setItem("array_carrito", carritoJSON)
}

function loadData(){
    let dataCarrito = sessionStorage.getItem("array_carrito")
    let dataArticulos = sessionStorage.getItem("array_articulos")
    let carritoDEJASON = JSON.parse(dataCarrito)
    let articulosDEJASON = JSON.parse(dataArticulos)
    carrito = carritoDEJASON
    articulos = articulosDEJASON
}
