/*ENTREGABLE 2 consiste en un control de stock para una tienda de velas */

// CREAR ARRAY VACIO//
const listaProductos = [ ];

//DEFINIR   FUNCION CONSTRUCTORA
function Producto (nombre, precio, cantidad){
this.nombre=nombre;
this.precio=precio;
this.cantidad=cantidad;
}

//DEFINIR VARIABRES PARA LAS RESPUESTAS DEL FORMULARIO//
let nombreFormulario = "a";
let precioFormulario = 0;
let cantidadFormulario = 0;

// OBTENER NOMBRE PRODUCTO INGRESADO EN FORMULARIO//
let nomPrd = document.getElementById ("input-nombre");

nomPrd.addEventListener("input", function(e){
    nombreFormulario = e.target.value;
    console.log(nombreFormulario);
})

// OBTENER PRECIO PRODUCTO INGRESADO EN FORMULARIO//
let prePrd = document.getElementById ("input-precio");

prePrd.addEventListener("input", function(e){
    precioFormulario = e.target.value;
    console.log(precioFormulario);
})

// OBTENER CANTIDAD PRODUCTO INGRESADO EN FORMULARIO//
let cantPrd = document.getElementById ("input-cantidad");

cantPrd.addEventListener("input", function(e){
    cantidadFormulario = e.target.value;
    console.log(cantidadFormulario);
})


//FUNCION QUE AGREGA LA MUESTRA EL STOCK DE PRODUCTOS EN EL HTML

let listaHTLML = document.getElementById ("stock-actual"); 
const listaDisplay = [ ];

function displayStock() {
    listaDisplay.splice(0, listaDisplay.length);
    listaProductos.forEach(prod =>{
        const prodHTML = document.createElement('li');
        prodHTML.innerText = ('- Nombre producto: ' + prod.nombre+ '   Precio: ' + prod.precio+ '   Stock Disponible: ' + prod.cantidad);
        listaDisplay.push(prodHTML);
    })
    listaHTLML.append(...listaDisplay);
}

//FUNCION QUE CREA EL PRODUCTO SEGUN DATOS DEL FORMULARIO Y LO AGREGA A LA LISTA DE PRODUCTOS
function agregarProducto() {
    const nuevoProd = new Producto (nombreFormulario, precioFormulario, cantidadFormulario);
    listaProductos.push(nuevoProd);
    const listaJSON = JSON.stringify(listaProductos); //ALMACENAR LISTA DE STOCK EN LOCAL STORAGE
    localStorage.setItem("listsStock", listaJSON);
    console.table(listaProductos);
    displayStock();

}




// ACTIVAR FUNCION AGREGARPRODUCTO AL HACER CLICK EN EL BOTON
let boton = document.getElementById ("btn-agregar");
boton.addEventListener("click", agregarProducto);


