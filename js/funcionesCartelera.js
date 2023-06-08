var peliculas = JSON.parse(localStorage.getItem("pelicula") || "[]");

//Codigo para select dinamico
var selectPelicula = document.getElementById("selectPelicula");

for (var i = 0; i < peliculas.length; i++) {

var option = document.createElement("option");
option.value = peliculas[i].NombreAsignado;
option.text = peliculas[i].NombreAsignado;
selectPelicula.appendChild(option);
}
//Codigo para select dinamico


const guardarCartelera = () => {
    var carteleras = JSON.parse(localStorage.getItem("cartelera") || "[]");
  
    const SalaInput = document.getElementById("sala");
    const HorarioInput = document.getElementById("horario");
    const PeliculaInput = document.getElementById("selectPelicula");
    const FechaInicioInput = document.getElementById("fechaInicio");
    const FechaFinalizacionInput = document.getElementById("fechaFinalizacion");

  
     cartelera = new Cartelera(
      SalaInput.value,
      HorarioInput.value,
      PeliculaInput.value,
      FechaInicioInput.value,
      FechaFinalizacionInput.value
    );
  
    carteleras.push(cartelera);
    localStorage.setItem("cartelera", JSON.stringify(carteleras));
  
    SalaInput.value  = "";
    HorarioInput.value  = "";
    PeliculaInput.value  = "";
    FechaInicioInput.value  = "";
    FechaFinalizacionInput.value  = "";
  
  
    mostrarCartelera();
  };
  
  const mostrarCartelera = () => {
    const tabla = document.getElementById("tablaCartelera").getElementsByTagName('tbody')[0];
    tabla.innerHTML = "";
  
    const carteleras = JSON.parse(localStorage.getItem("cartelera") || "[]");
  
    carteleras.forEach((cartelera) => {
      const fila = document.createElement("tr");
  
      const sala = document.createElement("th");
      sala.setAttribute("scope", "row");
      sala.innerText = cartelera.Sala;
      fila.appendChild(sala);
  
      const horario = document.createElement("td");
      horario.innerText = cartelera.Horario;
      fila.appendChild(horario);
  
      const pelicula = document.createElement("td");
      pelicula.innerText = cartelera.Pelicula;
      fila.appendChild(pelicula);
  
      const fechainicio = document.createElement("td");
      fechainicio.innerText = cartelera.FechaInicio
      fila.appendChild(fechainicio);
  
      const fechafin = document.createElement("td");
      fechafin.innerText = cartelera.FechaFinalizacion
      fila.appendChild(fechafin);
  
  
      tabla.appendChild(fila);
    });
  };
  
  document.getElementById("guardar").addEventListener("click", guardarCartelera);
  mostrarCartelera();