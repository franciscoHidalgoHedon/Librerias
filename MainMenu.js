
//MainCointainer html
MainContainer = document.getElementById("MainContainer")


function MainMenuStart(){
    MainContainer.innerHTML = `
    <button class="btn btn-primary" id="botonMenuInventario">
    Agregar cosas al stock
    </button>
    <button class="btn btn-primary" id="botonMenuComprar">
    Comprar Cosas
    </button>`
    inicializarMainMenu()
}

function inicializarMainMenu(){
    botonMenuInventario = document.getElementById("botonMenuInventario")
    botonMenuComprar = document.getElementById("botonMenuComprar")
    botonMenuInventario.onclick = () => {
        ValidarSesion()
    }
    botonMenuComprar.onclick = () => {
        MenuComprar()
    }
}

function ValidarSesion(){
  let sesion = sessionStorage.getItem("sesion")
  const htmlprot = `
  <div class="col-md-6">
    <h3>Ingresar Sesión</h3>
    <form id="formSesion">
      <div class="mb-3">
        <label class="form-label">Usuario</label>
        <input type="text" class="form-control" id="inputUser" />
      </div>
      <div class="mb-3">
        <label class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="inputContraseña"
        />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
    <button class="btn btn-primary" id="botonVolverS">Volver</button>
    <div><h3>(usuario: admin, contraseña: originalidad)</h3></div>
  </div>`
  
sesion === null? initSec() : MenuInventario()

function initSec(){
  MainContainer.innerHTML = htmlprot
  iniciarElemSesion()
  EventosSesión()
  botonVolverS.onclick = () => MainMenuStart()
}
}


function MenuInventario(){
    MainContainer.innerHTML = `
    <div class="row">
    <div class="col-md-6">
      <div id="contenedorProductos" class="row"></div>
    </div>
    <div class="col-md-6">
      <h3>Nuevo Item</h3>
      <form id="formulario">
        <div class="mb-3">
          <label class="form-label">ID</label>
          <input type="text" class="form-control" id="inputId" />
        </div>
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="inputNombreProducto"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Precio</label>
          <input
            type="number"
            class="form-control"
            id="inputPrecio"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Cantidad</label>
          <input type="number" class="form-control" id="inputCantidad" />
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-primary">Registrar</button>
        </div>
      </form>
      <button class="btn btn-primary" id="botonVolver1">Volver</button>
    </div>
  </div>`
  inicializarElementos()
  inicializarEventos()
  pintarProductos()
  botonVolver1.onclick = () => MainMenuStart()
}

function MenuComprar(){
  MainContainer.innerHTML = `
<div class="row">
  <div class="col-md-6">
    <div id="contenedorProductos" class="row"></div>
  </div>
  <div class="col-md-6">
    <h3> Carrito
    </h3>
    <ul class= p-5 id="listaCarrito">
    </ul>
    <div id="pieCarrito">
    <button class="btn btn-primary" id="botonVolver2"> Volver
    </button>
    <button class="btn btn-warning" id="botonComprarFinal"> Comprar Carrito
    </button>
    </div>
  </div>
</div>`
  IniciarMenuCompra()
  pintarProductosCarrito()
  botonVolver2.onclick = () => {
    carrito["length"] != 0 && alert("Se Guardará el carrito"), MainMenuStart()
  }
  botonComprarFinal.onclick = () => Presupuesto()
}