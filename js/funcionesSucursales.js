const guardarSucursal = () => {
     sucursales = JSON.parse(localStorage.getItem("sucursal") || "[]");
  
    const CodigoInput = document.getElementById("codigo");
    const CalleInput = document.getElementById("calle");
    const CarreraInput = document.getElementById("carrera");
    const EtapaInput = document.getElementById("etapa");
    const ManzanaInput = document.getElementById("manzana");
    const BarrioInput = document.getElementById("barrio");
    const DepartamentoInput = document.getElementById("departamento");
    const CiudadInput = document.getElementById("ciudad");
    const GerenteInput = document.getElementById("gerente");
    const NumerosalaInput = document.getElementById("numerosala");
    const NumerotrabajadoresInput = document.getElementById("numerotrabajadores");

    const CafeteriaSiInput = document.getElementById("si");
    if(CafeteriaSiInput){
        cafeteria = "si"
    }else{
        cafeteria = "no"
    }

    direccion = " calle: " + CalleInput.value + ",carrera : " + CarreraInput.value + ",etapa: " +  EtapaInput.value + ", manzana: " +  ManzanaInput.value +  ", barrio: " +BarrioInput.value;
  
    

     sucursal = new Sucursal(
      CodigoInput.value,
      direccion,
      DepartamentoInput.value,
      CiudadInput.value,
      GerenteInput.value,
      NumerosalaInput.value,
      NumerotrabajadoresInput.value,
      cafeteria
    );
  
    sucursales.push(sucursal);
    localStorage.setItem("sucursal", JSON.stringify(sucursales));
  
     CodigoInput.value = "";
     CalleInput.value = "";
     CarreraInput.value = "";
     EtapaInput.value = "";
     ManzanaInput.value = "";
     BarrioInput.value = "";
     GerenteInput.value = "";
     NumerosalaInput.value = "";
     NumerotrabajadoresInput.value = "";
  
    CodigoInput.focus();

     mostrarSucursal();
  };
  
   const mostrarSucursal = () => {
     const tabla = document.getElementById("tablaSucursales").getElementsByTagName('tbody')[0];
     tabla.innerHTML = "";
  
     const sucursales = JSON.parse(localStorage.getItem("sucursal") || "[]");
  
     sucursales.forEach((sucursal) => {
       const fila = document.createElement("tr");
  
       const codigo = document.createElement("th");
       codigo.setAttribute("scope", "row");
       codigo.innerText = sucursal.Codigo;
       fila.appendChild(codigo);
  
       const direccion = document.createElement("td");
       direccion.innerText = sucursal.Direccion;
       fila.appendChild(direccion);
  
       const documento = document.createElement("td");
       documento.innerText = sucursal.Departamento;
       fila.appendChild(documento);
  
       const ciudad = document.createElement("td");
       ciudad.innerText = sucursal.Ciudad;
       fila.appendChild(ciudad);
  
       const gerenteencargado = document.createElement("td");
       gerenteencargado.innerText = sucursal.GerenteEncargado;
       fila.appendChild(gerenteencargado);
  
       const numerosalas = document.createElement("td");
       numerosalas.innerText = sucursal.NumeroSalas;
       fila.appendChild(numerosalas);
  
       const numerotrabajadores = document.createElement("td");
       numerotrabajadores.innerText = sucursal.NumeroTrabajadores;
       fila.appendChild(numerotrabajadores);

       const cafeteria = document.createElement("td");
       cafeteria.innerText = sucursal.Cafeteria;
       fila.appendChild(cafeteria);
  
       tabla.appendChild(fila);
     });
   };
  
 
  mostrarSucursal();