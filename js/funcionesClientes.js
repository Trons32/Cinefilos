let telefonos = [];
var listaTelefonos = document.getElementById("listaTelefonos");

let redes = [];
var listaRedes = document.getElementById("listaRedes");


document.getElementById("agregarTelefono").addEventListener("click", function() {
  var telefonosInput = document.getElementById("numeroTelefono");
  var telefono = telefonosInput.value;

  if (telefono !== "") {
      telefonos.push(telefono);
      var li = document.createElement("li");
      var input = document.createElement("input");
      input.classList.add("form-control")
      input.disabled = true;
      input.value = telefono;

      var deleteButton = document.createElement("button");
      deleteButton.classList.add("btn");
      deleteButton.classList.add("btn-danger");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function() {
          var index = telefonos.indexOf(telefono);
          if (index !== -1) {
            telefonos.splice(index, 1);
          }
          listaTelefonos.removeChild(li);
        });
    

        li.appendChild(input);
        li.appendChild(deleteButton);
        listaTelefonos.appendChild(li);
      
      listaTelefonos.appendChild(li);
      telefonosInput.value = "";
  }


});

document.getElementById("agregarR").addEventListener("click", function() {
  var RedesInput = document.getElementById("redes");
  var red = RedesInput.value;

  if (red !== "") {
    redes.push(red);
    var li = document.createElement("li");
    var input = document.createElement("input");
    input.classList.add("form-control")
    input.disabled = true;
    input.value = red;

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
      deleteButton.textContent = "Eliminar";
      deleteButton.addEventListener("click", function() {
        var index = redes.indexOf(red);
        if (index !== -1) {
            redes.splice(index, 1);
        }
        listaRedes.removeChild(li);
      });
  

      li.appendChild(input);
      li.appendChild(deleteButton);
      listaRedes.appendChild(li);
      RedesInput.value = "";


      listaRedes.appendChild(li);
      RedesInput.value = "";
  }


});

  
const guardarCliente = () => {
    let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
  
    const NombreInput = document.getElementById("nombres");
    const ApellidosInput = document.getElementById("apellidos");
    const TipoDocumentoInput = document.getElementById("tipoDocumento");
    const NumeroInput = document.getElementById("numero");
    const FechaInput = document.getElementById("fecha");
    const calle = document.getElementById("calle");
    const carrera = document.getElementById("carrera");
    const etapa = document.getElementById("etapa");
    const manzana = document.getElementById("manzana");
    const barrio = document.getElementById("barrio");

    const NombreUsuario = document.getElementById("nombreusuario");
    const Contraseña = document.getElementById("contraseña");

    direccion =  " calle: " + calle.value + ",carrera : " + carrera.value + ",etapa: " +  etapa.value + ", manzana: " +  manzana.value +  ", barrio: " + barrio.value;
  
     cliente = new Cliente(
         NombreInput.value,
         ApellidosInput.value,
         TipoDocumentoInput.value,
         NumeroInput.value,
         FechaInput.value,
         direccion,
         telefonos,
         redes,
         NombreUsuario.value,
         Contraseña.value,

    );
  
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));
  
    NombreInput.value = "";
    ApellidosInput.value = "";
    NumeroInput.value = "";
    FechaInput.value = "";
    direccion.value = "";
    telefonos = [""];
    redes = [""];
    NombreUsuario.value = "";
    Contraseña.value = "";
    while (listaTelefonos.firstChild) {
      listaTelefonos.removeChild(listaTelefonos.firstChild);
    }
    while (listaRedes.firstChild) {
        listaRedes.removeChild(listaRedes.firstChild);
    }

  
    NombreInput.focus();
  

  };
  
