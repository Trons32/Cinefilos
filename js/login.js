
const Login = () => {
    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
     var clientes = JSON.parse(localStorage.getItem("clientes") || "[]");

    NombreUsuarioInput = document.getElementById("usuario");
    ContraseñaInput = document.getElementById("clave");
    var usuarioEncontrado = usuarios.find(function(u) {
        return u.NombreUsuario == NombreUsuarioInput.value && u.Contraseña == ContraseñaInput.value;
      });


       

      if (usuarioEncontrado) {
        console.log("usuarioEncontrado");
        if (usuarioEncontrado.rol === "administrador") {
          
          window.location.href = "html/administrador/index.html";
          
        } else if (usuarioEncontrado.rol === "vendedor") {
        
          window.location.href = "html/vendedor/index.html";
        } else if (usuarioEncontrado.rol === "gerente") {
        
            window.location.href = "html/gerente/index.html";
        }
  } else {
        

    var ClienteEncontrado = clientes.find(function(c) {
      return c.NombreUsuario == NombreUsuarioInput.value && c.Contraseña == ContraseñaInput.value;
    });

    if(ClienteEncontrado){
      window.location.href = "html/cliente/index.html";
    }else{
      alert("Usuario y/o contraseña incorrectos");
    }

    
  }
}