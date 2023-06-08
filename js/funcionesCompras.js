var peliculas = JSON.parse(localStorage.getItem("pelicula") || "[]");


var selectPelicula = document.getElementById("selectPelicula");

for (var i = 0; i < peliculas.length; i++) {

var option = document.createElement("option");
option.value = peliculas[i].NombreAsignado;
option.text = peliculas[i].NombreAsignado;
selectPelicula.appendChild(option);
}

var fechaInput = document.getElementById('fecha');

var fecha = new Date().toLocaleString();

fechaInput.value = fecha;


const compraForm = document.getElementById('compraForm');
const tablaCompra = document.getElementById('tablaCompra').getElementsByTagName('tbody')[0];

 
let compras = [];

// Función para agregar una compra al array y actualizar la tabla
function agregarCompra() {
  // Obtenemos los valores del formulario
  const numero = document.getElementById('numero');
  const pelicula = document.getElementById('selectPelicula');
  const cantidad = document.getElementById('cantidad');
  const precio = document.getElementById('preciopelicula');
  const subTotal = cantidad.value * precio.value;

  // Creamos un objeto Compra
   compra = new Compra(
    numero.value, 
    fecha, 
    pelicula.value, 
    cantidad.value, 
    precio.value, 
    subTotal
    );

  // Agregamos la compra al array
  compras.push(compra);

 


  // Actualizamos la tabla
  actualizarTablaCompra();
}


 let total = 0;
 var totalCompra = document.getElementById("total");


function actualizarTablaCompra() {

  tablaCompra.innerHTML = '';

  // Recorremos el array de compras y generamos las filas de la tabla
  for (const compra of compras) {

    total = total + compra.getSubTotal();
    totalCompra.innerHTML = total;

    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${compra.getPelicula()}</td>
      <td>${compra.getCantidad()}</td>
      <td>${compra.getPrecio()}</td>
      <td>${compra.getSubTotal()}</td>
      <td><button class="btn btn-danger" onclick="eliminarCompra(${compra.getNumero()})">Eliminar</button></td>
    `;
    tablaCompra.appendChild(fila);
  }
}



function eliminarCompra(numeroCompra) {
  compras = compras.filter((compra) => compra.getNumero() !== numeroCompra);
  actualizarTablaCompra();
}


function realizarCompra() {
 localStorage.setItem('compras', JSON.stringify(compras));

 tablaCompra.innerHTML = "";
 total = 0;
}
 


document.getElementById('comprar').addEventListener('click', realizarCompra);

