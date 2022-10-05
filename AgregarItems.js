
function inicializarElementos() {
  formulario = document.getElementById("formulario");
  inputId = document.getElementById("inputId");
  inputNombre = document.getElementById("inputNombreProducto");
  inputPrecio = document.getElementById("inputPrecio");
  inputCantidad = document.getElementById("inputCantidad");
  contenedorProductos = document.getElementById("contenedorProductos");
  botonVolver1 = document.getElementById("botonVolver1");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
  }

  function validarFormulario(event) {
    event.preventDefault();
    let idProducto = inputId.value;
    let nombre = inputNombre.value;
    let precio = inputPrecio.value;
    let cantidad = inputCantidad.value;

    const idExiste = articulos.some((producto) => producto.id === idProducto);

    function DatosNoVacios(){
      const arrx = [idProducto, nombre, precio, cantidad]
      const empt = (x) => x == ""
      res= !(arrx.some(empt))
      return (res)
    }
    function newp(){
      let producto = new Producto(
        idProducto,
        nombre,
        parseFloat(precio),
        parseInt(cantidad)
      );
      articulos.push(producto);
      formulario.reset();
      saveData();
      pintarProductos();
    }
    DatosNoVacios()? newpX() : Swal.fire({icon: "error", title: "Error", text: "Complete todos los datos"})
    
    function newpX(){
      !idExiste? newpZ() : Swal.fire({icon: "error", title: "Error", text: "El id ya existe"});
    }

    function newpZ(){
      Swal.fire({
        icon: "question",
        title: "Crear producto?",
        showCancelButton: true,
      }).then((result)=>{
        result.isConfirmed && newp()
      })
    }
}

function eliminarProducto(idProducto) {
  Swal.fire({
    icon: "warning",
    title: "Eliminar Producto?",
    showCancelButton: true
  }).then((result)=>{
    result.isConfirmed && borrp()
  })
  function borrp(){
    let columnaBorrar = document.getElementById(`columna-${idProducto}`);
    let indiceBorrar = articulos.findIndex(
      (producto) => Number(producto.id) === Number(idProducto)
    );
    articulos.splice(indiceBorrar, 1);
    columnaBorrar.remove();
    Swal.fire({
      icon: "success", title: "Articulo Eliminado"
    })
    saveData()
  }
}

function SumarCantidad(idProducto) {
  let indice = articulos.findIndex(
    (producto) => Number(producto.id) === Number(idProducto)
  );
  articulos[indice]["cantidad"] ++
  pintarProductos()
  saveData()
}

function RestarCantidad(idProducto) {
  let indice = articulos.findIndex(
    (producto) => Number(producto.id) === Number(idProducto)
  ); 

  articulos[indice]["cantidad"] == 0? Swal.fire({icon: "error", title: "Error", text: "No hay stock que remover"}) : restc()

  function restc(){
    articulos[indice]["cantidad"] --
    pintarProductos()
    saveData()
  }  
}

function pintarProductos() {
  contenedorProductos.innerHTML = "";
  articulos.forEach((producto) => {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
      <div class="card">
        <div class="card-body">
          <p class="card-text">ID:
            <b>${producto.id}</b>
          </p>
          <p class="card-text">Nombre:
            <b>${producto.nombre}</b>
          </p>
          <p class="card-text">Precio:
            <b>${producto.precio}</b>
          </p>
          <p class="card-text">Cantidad:
            <b>${producto.cantidad}</b>
          </p>
        </div>
        <div class="card-footer">
          <div>
            <button class="btn btn-primary p-3" id="botonMas-${producto.id}" >+</button>
            <button class="btn btn-primary p-3" id="botonMenos-${producto.id}" >-</button>
          </div>
          <button class="btn btn-danger" id="botonEliminar-${producto.id}" >Eliminar</button>
        </div>
      </div>`
    contenedorProductos.append(column);
  
    const botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
    botonEliminar.onclick = () => eliminarProducto(producto.id);

    const botonMas = document.getElementById(`botonMas-${producto.id}`);
    botonMas.onclick = () => SumarCantidad(producto.id);

    const botonMenos = document.getElementById(`botonMenos-${producto.id}`);
    botonMenos.onclick = () => RestarCantidad(producto.id);
  })
}