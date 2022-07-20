//variables global
const formularioUI = document.querySelector(`#formulario`);
const InscritosUI = document.getElementById(`#Inscritos`);
let arrayInscritos = [];
//funciones
const CrearItem = (Inscritos) => {
    let Item ={
      Inscritos: Inscritos,
        estado: false
    }
    arrayInscritos.push(Item);
    
    return Item;

}
const GuardarDB = () => {
    localStorage.setItem('', JSON.stringify(arrayInscritos));
    
    PintarDB();

}

const PintarDB= () => {
  InscritosUI.innerHTML = '';

    arrayInscritos = JSON.parse(localStorage.getItem('rutina'))

    if(arrayInscritos === null){
      arrayInscritos = [];
    }else{
      arrayInscritos.array.forEach(element => {
        InscritosUI.innerHTML += `<div class="alert alert-secondary" role="alert">
        <span class="material-symbols-outlined  mr-3">
            sports_motorsports
        </span>
        <b>${element.Inscritos}</b> - ${element.estado}
        <span class="float-right">
            <span class="material-symbols-outlined">
                done
            </span>
            <span class="material-symbols-outlined">
                delete
            </span>
        </span>
    </div>`
      });
    }

}
//eventos

formularioUI.addEventListener('submit', (e) => {

    e.preventDefault();
    let InscritosUI = document.querySelector('#Inscritos').value;
  
    CrearItem(InscritosUI);
    GuardarDB();
  
    formularioUI.reset();
  
  });
  
  document.addEventListener('DOMContentLoaded', PintarDB);
  
  InscritosUI.addEventListener('click', (e) => {
  
    e.preventDefault();
  
    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
      let texto = e.path[2].childNodes[1].innerHTML;
      if(e.target.innerHTML === 'delete'){
        // Accción de eliminar
        EliminarDB(texto);
      }
      if(e.target.innerHTML === 'done'){
        // Accción de editar
        EditarDB(texto);
      }
    }
  
  });