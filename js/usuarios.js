
const mostrarUsuarios = () =>{

    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    var tabla = document.getElementById("tabla-usuarios").getElementsByTagName('tbody')[0];
  
    tabla.innerHTML = '';
  
   

    for (var i = 0; i < usuarios.length; i++) {
      var usuario = usuarios[i];
  
  
      var fila = document.createElement('tr');
  

      var celdaNombreUsuario = document.createElement('td');
      celdaNombreUsuario.textContent = usuario.NombreUsuario;
      fila.appendChild(celdaNombreUsuario);
  
      var celdaRol = document.createElement('td');
      celdaRol.textContent = usuario.rol;
      fila.appendChild(celdaRol);
  
      var celdaAcciones = document.createElement('td');
  

      var botonActualizar = document.createElement('button');
      botonActualizar.textContent = 'Actualizar Rol';
      botonActualizar.classList.add("btn");
      botonActualizar.classList.add("btn-primary");
      botonActualizar.dataset.usuarioIndex = i; 
      botonActualizar.addEventListener('click', actualizarRolUsuario);
      celdaAcciones.appendChild(botonActualizar);
  
      fila.appendChild(celdaAcciones);
  
 
      tabla.appendChild(fila);
    }
  }

  function actualizarRolUsuario(event) {
    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    var usuarioIndex = event.target.dataset.usuarioIndex;
    var nuevoRol = prompt('Ingrese el nuevo rol para el usuario:');
  
 

    if(nuevoRol){
      
      console.log(nuevoRol);
      console.log(usuarios[usuarioIndex].rol);

      if(nuevoRol == "administrador" || nuevoRol == "cliente" || 
        nuevoRol == "gerente" || nuevoRol == "vendedor"){

        usuarios[usuarioIndex].rol = nuevoRol;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mostrarUsuarios();

      }else{
        alert("Solo puede ingrese los siguientes roles: administrador,cliente,gerente,vendedor");
      }
    
    }
    
  
  }
  