//variables global
const formularioUI = document.querySelector(`#formulario`);
const listaDeInscritosUI = document.getElementById(`#listaDeInscritos`);
let arrayInscritos = [];
//funciones
const CrearItem = (inscritos) => {
    let Item ={
        inscritos: inscritos,
        estado: falso
    }
    arrayInscritos.push(Item);
    
    return Item;

}
const GuardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayInscritos));
    
    PintarDB();

}

const PintarDB= () => {
    listaDeInscritosUI.innerHTML = '';

    arrayInscritos = JSON.parse(localStorage.getItem('rutina'))

    if(arrayInscritos === null){
      arrayInscritos = [];
    }else{
      arrayInscritos.array.forEach(element => {
        
      });
    }

}
//eventos

formularioUI.addEventListener('submit', (e) => {

    e.preventDefault();
    let inscritosUI = document.querySelector('#inscritos').value;
  
    CrearItem(inscritosUI);
    GuardarDB();
  
    formularioUI.reset();
  
  });
  
  document.addEventListener('DOMContentLoaded', PintarDB);
  
  listaDeInscritosUI.addEventListener('click', (e) => {
  
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