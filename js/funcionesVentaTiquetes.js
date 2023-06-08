
var peliculas = JSON.parse(localStorage.getItem("pelicula") || "[]");
var selectPelicula = document.getElementById("selectPelicula");

for (var i = 0; i < peliculas.length; i++) {
  var option = document.createElement("option");
  option.value = peliculas[i].NombreAsignado;
  option.text = peliculas[i].NombreAsignado;
  selectPelicula.appendChild(option);
}

selectPelicula.addEventListener("change", function() {
  var selectedPelicula = selectPelicula.value;
  var carteleras = JSON.parse(localStorage.getItem("cartelera") || "[]");
  var cartelera = carteleras.filter(function(c) {
    return c.Pelicula == selectedPelicula;
  });

  var selectSala = document.getElementById("selectSala");
  selectSala.innerHTML = ""; 

  for (var i = 0; i < cartelera.length; i++) {
    var option = document.createElement("option");
    option.value = cartelera[i].Sala;
    option.text = cartelera[i].Sala;
    selectSala.appendChild(option);
  }

  var selectHorario = document.getElementById("selectHorario");
  selectHorario.innerHTML = ""; 
  
    for (var i = 0; i < cartelera.length; i++) {
      var option = document.createElement("option");
      option.value = cartelera[i].Horario;
      option.text = cartelera[i].Horario;
      selectHorario.appendChild(option);
    }

});





const guardarVentaTiquete = () => {
    var ventaTiquetes = JSON.parse(localStorage.getItem("ventaTiquete") || "[]");
  
  
    const NumeroTInput = document.getElementById("numeroT");
    const FormaPagoInput = document.getElementById("formaPago");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const posiciones = Array.from(checkboxes).map(checkbox => checkbox.value);

    vendedor = "daniel"
    fecha = new Date().toLocaleString();
  
     ventaTiquete = new VentaTiquetes(
       selectSala.value,
        selectHorario.value,
        NumeroTInput.value,
        posiciones,
        FormaPagoInput.value,
        fecha,
        vendedor
    );
  
    ventaTiquetes.push(ventaTiquete);
    localStorage.setItem("ventaTiquete", JSON.stringify(ventaTiquetes));
  

    NumeroTInput.value = "";

    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  
  
    mostrarVentaTiquetes();
  };
  
  const mostrarVentaTiquetes = () => {
    const tabla = document.getElementById("tablaVentaTiquetes").getElementsByTagName('tbody')[0];
    tabla.innerHTML = "";
  
    const ventaTiquetes = JSON.parse(localStorage.getItem("ventaTiquete") || "[]");
  
    ventaTiquetes.forEach((ventatiquete) => {
      const fila = document.createElement("tr");
  
      const sala = document.createElement("th");
      sala.setAttribute("scope", "row");
      sala.innerText = ventatiquete.Sala;
      fila.appendChild(sala);
  
      const horario = document.createElement("td");
      horario.innerText = ventatiquete.Horario;
      fila.appendChild(horario);
  
      const numerotiquetes = document.createElement("td");
      numerotiquetes.innerText = ventatiquete.NumeroTiquetes;
      fila.appendChild(numerotiquetes);
  
      const posiciones = document.createElement("td");
      posiciones.innerText = ventatiquete.Posiciones
      fila.appendChild(posiciones);
  
      const formapago = document.createElement("td");
      formapago.innerText = ventatiquete.FormaPago
      fila.appendChild(formapago);

      const fechaventa = document.createElement("td");
      fechaventa.innerText = ventatiquete.FechaVenta
      fila.appendChild(fechaventa);

      const vendedor = document.createElement("td");
      vendedor.innerText = ventatiquete.vendedor
      fila.appendChild(vendedor);
  
  
      tabla.appendChild(fila);
    });
  };
  
 
  mostrarVentaTiquetes();