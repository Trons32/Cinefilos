const  agregarUsuario = () => {


    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");


    NombreUsuarioInput = document.getElementById("nombreusuario");
    ContrasenaInput = document.getElementById("contrasena");
    rol = document.getElementById("rol"); 

    fechaCreacion = new Date().toLocaleString();

    usuario = new Usuarios(NombreUsuarioInput.value,ContrasenaInput.value,rol.value,fechaCreacion);
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));


    NombreUsuarioInput.value = "";
    ContrasenaInput.value = "";


    NombreUsuarioInput.focus();

    mostrarUsuarios();
}


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
  
 
      tabla.appendChild(fila);
    }
  }

  
  mostrarUsuarios();