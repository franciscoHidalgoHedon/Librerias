


function iniciarElemSesion() {
  formulario2 = document.getElementById("formSesion");
  inputUser = document.getElementById("inputUser");
  inputContraseña = document.getElementById("inputContraseña");
  botonVolverS = document.getElementById("botonVolverS");
}

function EventosSesión() {
  formulario2.onsubmit = (event) => validarFormSesion(event);
}

function validarFormSesion(event) { 
  event.preventDefault();
  let User = inputUser.value;
  let Contraseña = inputContraseña.value;

  function DatosNoVacios(){
    return (User != "" && Contraseña != "")
  }

  function funcx(){
    if(User.toUpperCase() == UsuarioAdmin && Contraseña == ContraseñaAdmin){
      sessionStorage.setItem("sesion", 1)
      MenuInventario()
    }else{
      alert("Datos Incorrectos")
    }
  }
  DatosNoVacios()? funcx() : alert("complete todos los datos")
}

//==================================== Comenzar programa ====================================

function Main(){
  const sestnull = sessionStorage.getItem("array_articulos") === null || sessionStorage.getItem("array_carrito") === null
  sestnull? saveData() : loadData()
  MainMenuStart()
}

Main()