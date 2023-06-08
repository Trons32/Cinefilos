   
    let peliculas = JSON.parse(localStorage.getItem("pelicula") || "[]");


   const urlParams = new URLSearchParams(window.location.search);
   const PeliculaId = urlParams.get('id');
   
   var PeliculaEncontrado = peliculas.find(function(p) {
    return p.Codigo == PeliculaId
  });
 

  var pelicula = document.getElementById("pelicula");
   
  pelicula.innerHTML = PeliculaEncontrado.NombreAsignado

  let carteleras = JSON.parse(localStorage.getItem("cartelera") || "[]");

  var cartelera = carteleras.filter(function(c) {
    return c.Pelicula == PeliculaEncontrado.NombreAsignado
  });
 

  var selectSala = document.getElementById("selectSala");


  for (var i = 0; i < cartelera.length; i++) {
  
  var option = document.createElement("option");
  option.value = cartelera[i].Sala;
  option.text = cartelera[i].Sala;
  selectSala.appendChild(option);
  }



  var selectHorario = document.getElementById("selectHorario");


  for (var i = 0; i < cartelera.length; i++) {
  
  var option = document.createElement("option");
  option.value = cartelera[i].Horario;
  option.text = cartelera[i].Horario;
  selectHorario.appendChild(option);
  }


  const guardarCompraTiquete = () => {
    var compraTiquetes = JSON.parse(localStorage.getItem("CompraTiquete") || "[]");
  
   
    const numeroInput = document.getElementById("numero");
    const FormaPagoInput = document.getElementById("formaPago");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const posiciones = Array.from(checkboxes).map(checkbox => checkbox.value);

    vendedor = "daniel"
    fecha = new Date().toLocaleString();
  
     compraTiquete = new CompraTiquetes(
        selectSala.value,
        selectHorario.value,
        numeroInput.value,
        posiciones,
        FormaPagoInput.value,
        fecha,
        vendedor
    );
  
    compraTiquetes.push(compraTiquete);
    localStorage.setItem("CompraTiquete", JSON.stringify(compraTiquetes));
  

    numeroInput.value = "";

    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  
  
    mostrarCompraTiquetes();
  };
  
 const mostrarCompraTiquetes = () => {
   const tabla = document.getElementById("tablaCompra").getElementsByTagName('tbody')[0];
   tabla.innerHTML = "";
  
   const compraTiquetes = JSON.parse(localStorage.getItem("CompraTiquete") || "[]");
  
   compraTiquetes.forEach((compraTiquete) => {
     const fila = document.createElement("tr");
  
     const sala = document.createElement("th");
     sala.setAttribute("scope", "row");
     sala.innerText = compraTiquete.Sala;
     fila.appendChild(sala);
  
     const horario = document.createElement("td");
     horario.innerText = compraTiquete.Horario;
     fila.appendChild(horario);
  
     const numerotiquetes = document.createElement("td");
     numerotiquetes.innerText = compraTiquete.NumeroTiquetes;
     fila.appendChild(numerotiquetes);
  
     const posiciones = document.createElement("td");
     posiciones.innerText = compraTiquete.Posiciones
     fila.appendChild(posiciones);
  
     const formapago = document.createElement("td");
     formapago.innerText = compraTiquete.FormaPago
     fila.appendChild(formapago);

      const fechaventa = document.createElement("td");
      fechaventa.innerText = compraTiquete.FechaVenta
      fila.appendChild(fechaventa);

      const vendedor = document.createElement("td");
     vendedor.innerText = compraTiquete.vendedor
      fila.appendChild(vendedor);
  
  
     tabla.appendChild(fila);
   });
 };
  
 
 mostrarCompraTiquetes();