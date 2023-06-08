

var productoras = JSON.parse(localStorage.getItem("productora") || "[]");

var selectProductoras = document.getElementById("selectProductoras");

for (var i = 0; i < productoras.length; i++) {

var option = document.createElement("option");
option.value = productoras[i].Nombre;
option.text = productoras[i].Nombre;
selectProductoras.appendChild(option);
}

let actoresPrincipales = [];
var listaActoresPrincipales = document.getElementById("listaActoresPrincipales");

let actoresSecundarios = [];
var listaActoresSecundarios = document.getElementById("listaActoresSecundarios");

let idiomasDisponibles = [];
var listaIdiomas = document.getElementById("listaIdiomas");

let subtitulos = [];
var listaSubtitulos = document.getElementById("listaSubtitulos");

document.getElementById("agregarSubtitulosDisponibles").addEventListener("click", function() {
  var subtitulosDisponiblesInput = document.getElementById("subtitulosDisponibles");
  var suntituloDisponible = subtitulosDisponiblesInput.value;

  if (suntituloDisponible !== "") {
    subtitulos.push(suntituloDisponible);
      var li = document.createElement("li");
      var input = document.createElement("input");
      input.classList.add("form-control")
      input.disabled = true;
      input.value = suntituloDisponible;

      var deleteButton = document.createElement("button");
      deleteButton.classList.add("btn");
      deleteButton.classList.add("btn-danger");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function() {
          var index = subtitulos.indexOf(suntituloDisponible);
          if (index !== -1) {
            subtitulos.splice(index, 1);
          }
          listaSubtitulos.removeChild(li);
        });
    

        li.appendChild(input);
        li.appendChild(deleteButton);
        listaSubtitulos.appendChild(li);
        subtitulosDisponiblesInput.value = "";
      
        listaSubtitulos.appendChild(li);
        subtitulosDisponiblesInput.value = "";
  }


});

document.getElementById("agregarIdiomasDisponibles").addEventListener("click", function() {
  var idiomasDisponiblesInput = document.getElementById("idiomasDisponibles");
  var idiomaDisponible = idiomasDisponiblesInput.value;

  if (idiomaDisponible !== "") {
    idiomasDisponibles.push(idiomaDisponible);
      var li = document.createElement("li");
      var input = document.createElement("input");
      input.classList.add("form-control")
      input.disabled = true;
      input.value = idiomaDisponible;

      var deleteButton = document.createElement("button");
      deleteButton.classList.add("btn");
      deleteButton.classList.add("btn-danger");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function() {
          var index = idiomasDisponibles.indexOf(idiomaDisponible);
          if (index !== -1) {
            idiomasDisponibles.splice(index, 1);
          }
          listaIdiomas.removeChild(li);
        });
    

        li.appendChild(input);
        li.appendChild(deleteButton);
        listaIdiomas.appendChild(li);
        idiomasDisponiblesInput.value = "";
      
        listaIdiomas.appendChild(li);
        idiomasDisponiblesInput.value = "";
  }


});

document.getElementById("agregarActoresPrincipales").addEventListener("click", function() {
  var actoresPrincipalesInput = document.getElementById("actoresPrincipales");
  var actorPrincipal = actoresPrincipalesInput.value;

  if (actorPrincipal !== "") {
    actoresPrincipales.push(actorPrincipal);
      var li = document.createElement("li");
      var input = document.createElement("input");
      input.classList.add("form-control")
      input.disabled = true;
      input.value = actorPrincipal;

      var deleteButton = document.createElement("button");
      deleteButton.classList.add("btn");
      deleteButton.classList.add("btn-danger");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function() {
          var index = actoresPrincipales.indexOf(actorPrincipal);
          if (index !== -1) {
            actoresPrincipales.splice(index, 1);
          }
          listaActoresPrincipales.removeChild(li);
        });
    

        li.appendChild(input);
        li.appendChild(deleteButton);
        listaActoresPrincipales.appendChild(li);
        actoresPrincipalesInput.value = "";
      
        listaActoresPrincipales.appendChild(li);
      actoresPrincipalesInput.value = "";
  }


});

document.getElementById("agregarActoreSecundarios").addEventListener("click", function() {
  var actoresSecundarioInput = document.getElementById("actoresSecundarios");
  var actorSecundario = actoresSecundarioInput.value;

  if (actorSecundario !== "") {
    actoresSecundarios.push(actorSecundario);
      var li = document.createElement("li");
      var input = document.createElement("input");
      input.classList.add("form-control")
      input.disabled = true;
      input.value = actorSecundario;

      var deleteButton = document.createElement("button");
      deleteButton.classList.add("btn");
      deleteButton.classList.add("btn-danger");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function() {
          var index = actoresSecundarios.indexOf(actorSecundario);
          if (index !== -1) {
            actoresSecundarios.splice(index, 1);
          }
          listaActoresSecundarios.removeChild(li);
        });
    

        li.appendChild(input);
        li.appendChild(deleteButton);
        listaActoresSecundarios.appendChild(li);
        actoresSecundarioInput.value = "";
      
        listaActoresSecundarios.appendChild(li);
        actoresSecundarioInput.value = "";
  }


});

  
const guardarPelicula = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelicula") || "[]");
  
    const CodigoInput = document.getElementById("codigo");
    const nombreOriginalInput = document.getElementById("nombre");
    const nombreAsignadoInput = document.getElementById("nombreAsignado");
    const SexoInput = document.getElementById("sexo");
    const IdiomaOriginalInput = document.getElementById("idiomaOriginal");
    const DuracionHoraInput = document.getElementById("hora");
    const DuracionMinutoInput = document.getElementById("minuto");
    const DuracionSegundoInput = document.getElementById("segundo");
    const NumeroAficheInput = document.getElementById("numeroAfiche");
    const NumeroCopiaInput = document.getElementById("numeroCopia");
    const selectProductoras = document.getElementById("selectProductoras");
   
    duracion = "horas : " + DuracionHoraInput.value + ", Minutos : " + DuracionMinutoInput.value + ", segundos: " +  DuracionSegundoInput.value;
  
     pelicula = new Pelicula(
      CodigoInput.value,
      nombreOriginalInput.value,
      nombreAsignadoInput.value,
      SexoInput.value,
      IdiomaOriginalInput.value,
      idiomasDisponibles,
      subtitulos,
      duracion,
      actoresPrincipales,
      actoresSecundarios,
      NumeroAficheInput.value,
      NumeroCopiaInput.value,
      selectProductoras.value
    );
  
    peliculas.push(pelicula);
    localStorage.setItem("pelicula", JSON.stringify(peliculas));
  
      CodigoInput.value = "";
      nombreOriginalInput.value = "";
      nombreAsignadoInput.value = "";
      idiomasDisponibles = [""];
      subtitulos = [""];
      duracion = "";
      actoresPrincipales = [""];
      actoresSecundarios = [""];
      NumeroAficheInput.value = "";
      NumeroCopiaInput.value = "";

      while (listaActoresPrincipales.firstChild) {
        listaActoresPrincipales.removeChild(listaActoresPrincipales.firstChild);
      }

      while (listaActoresSecundarios.firstChild) {
        listaActoresSecundarios.removeChild(listaActoresSecundarios.firstChild);
      }

      while (listaIdiomas.firstChild) {
        listaIdiomas.removeChild(listaIdiomas.firstChild);
      }

      while (listaSubtitulos.firstChild) {
        listaSubtitulos.removeChild(listaSubtitulos.firstChild);
      }
  
    CodigoInput.focus();
  
     mostrarPeliculas();

  };

   const mostrarPeliculas = () => {
     const tabla = document.getElementById("tablaPeliculas").getElementsByTagName('tbody')[0];
     tabla.innerHTML = "";

     const peliculas = JSON.parse(localStorage.getItem("pelicula") || "[]");
     peliculas.forEach((pelicula) => {

       const fila = document.createElement("tr");
       
       const codigo = document.createElement("th");
       codigo.setAttribute("scope", "row");
       codigo.innerText = pelicula.Codigo;
       fila.appendChild(codigo);

       const nombreOriginal = document.createElement("td");
       nombreOriginal.innerText = pelicula.NombreOriginal;
       fila.appendChild(nombreOriginal);

       const nombreAsignado = document.createElement("td");
       nombreAsignado.innerText = pelicula.NombreAsignado;
       fila.appendChild(nombreAsignado);

       const genero = document.createElement("td");
       genero.innerText = pelicula.Genero;
       fila.appendChild(genero);

       const idiomaOriginal = document.createElement("td");
       idiomaOriginal.innerText = pelicula.IdiomaOriginal;
       fila.appendChild(idiomaOriginal);

       const idiomasDisponibles = document.createElement("td");
       idiomasDisponibles.innerText = pelicula.IdiomasDisponibles;
       fila.appendChild(idiomasDisponibles);

       const subtitulosDisponibles = document.createElement("td");
       subtitulosDisponibles.innerText = pelicula.SubtitulosDisponibles;
       fila.appendChild(subtitulosDisponibles);

       const duracion = document.createElement("td");
       duracion.innerText = pelicula.Duracion;
       fila.appendChild(duracion);


       const actoresPrincipales = document.createElement("td");
       actoresPrincipales.innerText = pelicula.ActoresPrincipales;
       fila.appendChild(actoresPrincipales);

       const actoresSecundarios = document.createElement("td");
       actoresSecundarios.innerText = pelicula.ActoresSecundarios;
       fila.appendChild(actoresSecundarios);

       const numerosAfiches = document.createElement("td");
       numerosAfiches.innerText = pelicula.NumerosAfiches;
       fila.appendChild(numerosAfiches);

       const numeroCopia = document.createElement("td");
       numeroCopia.innerText = pelicula.NumeroCopia;
       fila.appendChild(numeroCopia);

       const productora = document.createElement("td");
       productora.innerText = pelicula.Productora;
       fila.appendChild(productora);

       tabla.appendChild(fila);
     });
   };
  
   
  mostrarPeliculas();