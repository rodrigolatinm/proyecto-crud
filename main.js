//variables global
const formularioUI = document.querySelector(`#formulario`);
const InscritosUI = document.getElementById(`#Inscritos`);
const inputVacio = document.querySelector('#inscrito')
let arrayInscritos = [];
//funciones
const CrearItem = (Inscrito) => {
  if (inputVacio.value === '') {
    window.alert('Ingrese informacion')
  } else {
    let item =
    {
      Inscrito: Inscrito,
    }
    let elementoYaExiste = arrayDeInscritos.find((element) => element.Inscrito === Inscrito)
    if (elementoYaExiste !== undefined) {
      //  window.alert('Esta Inscrito ya se encuentra en esta lista')
    } else {
      arrayDeInscritos.push(item);
    }
  }
}


const GuardarDB = () => {
  localStorage.setItem('', JSON.stringify(arrayInscritos));




  InscritosUI.innerHTML = '';

  arrayInscritos = JSON.parse(localStorage.getItem('persona'))

  if (arrayInscritos === null) {
    arrayInscritos = [];
  } else {
    arrayInscritos.array.forEach(Inscrito => {
      InscritosUI.innerHTML += `<div class="alert alert-secondary" role="alert">
        <i class="icono-texto-alerta material-icons">home_repair_service</i>
        <b class="texto-Inscrito">${Inscrito.Inscrito}</b>
        <span class="contenedor-icono-editar-borrar"><i class="material-icons" id=${Inscrito.Inscrito}>drive_file_rename_outline</i>
        <i class="material-icons" id=${Inscrito.Inscrito}>delete_sweep</i></span></div>`
    });
  }
}
//función eliminar 
const EliminarDB = Inscrito => {
  let indiceArray = arrayDeInscritos.findIndex((element) => element.Inscrito === Inscrito)
  arrayDeInscritos.splice(indiceArray, 1);
  GuardarDB();


  //editar 
  const EditarDB = Inscrito => {
    modoEdicion = true;
    document.getElementById("boton-multi-funcion").innerText = 'Confirmar'
    let InscritoEscritaUsuario = document.getElementById("Inscrito");
    InscritoEscritaUsuario.value = Inscrito
    InscritoEscritaUsuario.setAttribute('data-antiguo', Inscrito)


    //función guardar cambios
    const guardarCambios = () => {
      let CorreoDeUsuario = document.getElementById("Inscritos");
      let indexArray = arrayDeInscritos.findIndex((element) => element.Inscritos === CorreoDeUsuario.getAttribute('data-antiguo'));
      arrayDeInscritos[indexArray].Inscritos = CorreoDeUsuario.value
      GuardarDB();
      modoEdicion = false
      document.getElementById("boton-multi-funcion").innerText = 'Agregar'
    }

    //eventos

    formularioUI.addEventListener('submit', (evento) => {
      evento.preventDefault();
      let InscritoEscritaUsuario = document.getElementById("Inscritos").value;
      if (modoEdicion === true) {
        guardarCambios();
      } else {
        crearInscritos(InscritoEscritaUsuario);
      }
      GuardarDB();
      formularioUI.reset();
    })
    document.addEventListener('DOMContentLoaded', TrasladarDatosAlmacenadosEnLSaSitioWeb);
    ListaDeIntegrantes.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.innerHTML === 'drive_file_rename_outline' || event.target.innerHTML === 'delete_sweep') {
        let rutaIconos = event.target.id;
        if (event.target.innerHTML === 'delete_sweep') {
          eliminarInscritos(rutaIconos);
        }
        if (event.target.innerHTML === 'drive_file_rename_outline') {
          editarInscritos(rutaIconos);
        }
      }
    });
  }
}
