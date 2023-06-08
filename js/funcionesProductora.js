let telefonos = [];
var listaTelefonos = document.getElementById("listaTelefonos");

let celulares = [];
var listaCelulares = document.getElementById("listaCelulares");


document.getElementById("agregarTelefono").addEventListener("click", function() {
  var telefonosInput = document.getElementById("telefonos");
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
        telefonosInput.value = "";
      
      listaTelefonos.appendChild(li);
      telefonosInput.value = "";
  }


});

document.getElementById("agregarCelular").addEventListener("click", function() {
  var CelularInput = document.getElementById("celular");
  var celular = CelularInput.value;

  if (celular !== "") {
    celulares.push(celular);
    var li = document.createElement("li");
    var input = document.createElement("input");
    input.classList.add("form-control")
    input.disabled = true;
    input.value = celular;

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
      deleteButton.textContent = "Eliminar";
      deleteButton.addEventListener("click", function() {
        var index = celulares.indexOf(celular);
        if (index !== -1) {
          celulares.splice(index, 1);
        }
        listaCelulares.removeChild(li);
      });
  

      li.appendChild(input);
      li.appendChild(deleteButton);
      listaCelulares.appendChild(li);
      CelularInput.value = "";


      listaCelulares.appendChild(li);
      CelularInput.value = "";
  }


});

  
const guardarProductora = () => {
    let productoras = JSON.parse(localStorage.getItem("productora") || "[]");
  
    const CodigoInput = document.getElementById("codigo");
    const NombreInput = document.getElementById("nombre");
    const PaisInput = document.getElementById("pais");
    const CorreoInput = document.getElementById("correo");
    const RepresentanteInput = document.getElementById("representante");
  
  
   
  
    const productora = new Productora(
      CodigoInput.value,
      NombreInput.value,
      PaisInput.value,
      telefonos,
      celulares,
      CorreoInput.value,
      RepresentanteInput.value
    );
  
    productoras.push(productora);
    localStorage.setItem("productora", JSON.stringify(productoras));
  
    CodigoInput.value = "";
    NombreInput.value = "";
    PaisInput.value = "";
    telefonos = [""];
    celulares = [""];
    while (listaTelefonos.firstChild) {
      listaTelefonos.removeChild(listaTelefonos.firstChild);
    }
    while (listaCelulares.firstChild) {
      listaCelulares.removeChild(listaCelulares.firstChild);
    }
    CorreoInput.value = "";
    RepresentanteInput.value = "";
  
    CodigoInput.focus();
  
    mostrarProductoras();

  };
  
  const mostrarProductoras = () => {
    const tabla = document.getElementById("tablaProductora").getElementsByTagName('tbody')[0];
    tabla.innerHTML = "";
  
    const productoras = JSON.parse(localStorage.getItem("productora") || "[]");
  
    productoras.forEach((productora) => {
      const fila = document.createElement("tr");
  
      const codigo = document.createElement("th");
      codigo.setAttribute("scope", "row");
      codigo.innerText = productora.Codigo;
      fila.appendChild(codigo);
  
      const nombre = document.createElement("td");
      nombre.innerText = productora.Nombre;
      fila.appendChild(nombre);
  
      const paisReside = document.createElement("td");
      paisReside.innerText = productora.PaisReside;
      fila.appendChild(paisReside);
  
      const telefonos = document.createElement("td");
      telefonos.innerText = productora.Telefono
      fila.appendChild(telefonos);
  
      const celulares = document.createElement("td");
      celulares.innerText = productora.celular//.join(", ");
      fila.appendChild(celulares);
  
      const correo = document.createElement("td");
      correo.innerText = productora.CorreoElectronico;
      fila.appendChild(correo);
  
      const representante = document.createElement("td");
      representante.innerText = productora.Representante;
      fila.appendChild(representante);
  
      tabla.appendChild(fila);
    });
  };
  

  mostrarProductoras();