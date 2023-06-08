
let peliculas = JSON.parse(localStorage.getItem("pelicula") || "[]");


let contenedor = document.getElementById("contenedor");

peliculas.forEach(pelicula => {

  let divCol = document.createElement("div");
  divCol.className = "col-md-3";
  let divCard = document.createElement("div");
  divCard.className = "card tarjeta";
  let divHeader = document.createElement("div");
  divHeader.className = "card-header";
  divHeader.textContent = pelicula.NombreAsignado;
  let divCardBody = document.createElement("div");
  divCardBody.className = "card-body";
  let h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.textContent = "Título Original";
  let pTituloOriginal = document.createElement("p");
  pTituloOriginal.className = "card-text";
  pTituloOriginal.textContent = pelicula.NombreOriginal;
  let pGenero = document.createElement("p");
  pGenero.textContent = "Género: " + pelicula.Genero;
  let pDuracion = document.createElement("p");
  pDuracion.textContent = "Duración: " + pelicula.Duracion;
  let divBotonTarjeta = document.createElement("div");
  divBotonTarjeta.className = "botontarjeta";
  let a = document.createElement("a");
  a.href = "login.html"
  a.style.width = "100%";
  a.className = "btn btn-primary boton";
  a.textContent = "Ver más";

  divCardBody.appendChild(h5);
  divCardBody.appendChild(pTituloOriginal);
  divCardBody.appendChild(pGenero);
  divCardBody.appendChild(pDuracion);
  divBotonTarjeta.appendChild(a);
  divCard.appendChild(divHeader);
  divCard.appendChild(divCardBody);
  divCard.appendChild(divBotonTarjeta);
  divCol.appendChild(divCard);
  contenedor.appendChild(divCol);
});
