// La clave con la que guardaremos el listado en el localStorage
const ITEMS_KEY = "items"

let listaElementos = JSON.parse(localStorage.getItem(ITEMS_KEY)) || [];

let botonAgregar = document.getElementById("agregar");
let botonLimpiar = document.getElementById("limpiar");
let cuadroDeTexto = document.getElementById("item")
let contenedor = document.getElementById("contenedor"); // Acá se van colocando los elementos al darle click en "Agregar"

botonAgregar.addEventListener("click", function agregarElemento(){
    listaElementos.push(cuadroDeTexto.value); // Agrega el elemento del cuadro de texto a la lista
    guardarLista(); 
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = cuadroDeTexto.value;
    contenedor.appendChild(nuevoElemento);
    cuadroDeTexto.value = ""; // Borra lo escrito en el cuadro de texto
    console.log(listaElementos);
})

//funcion para guardar la lista en localStorage
function guardarLista(){
    localStorage.setItem(ITEMS_KEY, JSON.stringify(listaElementos));
}

function cargarLista() {
    renderList();
}

function renderList() {
    contenedor.innerHTML = ""; // limpiar lista visual
    listaElementos.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    contenedor.appendChild(li);
    });
}

//boton limpiar
botonLimpiar.addEventListener("click",()=>{
    localStorage.removeItem(ITEMS_KEY);
    listaElementos = [];
    contenedor.innerHTML = "";
    guardarLista();
    renderList();
});

document.addEventListener("DOMContentLoaded",()=>{
    cargarLista();
});