class Usuarios {

    constructor(NombreUsuario, Contraseña,rol,fechaCreacion,fechaModificacion) {

        this.NombreUsuario = NombreUsuario;
        this.Contraseña = Contraseña;
        this.rol = rol;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;

    }

    
    setNombreUsuario(NombreUsuario) {

        this.NombreUsuario = NombreUsuario;
    }

    
    setContraseña(Contraseña) {

        this.Contraseña = Contraseña;
    }

    setRol(rol) {

        this.rol = rol;
    }

    setFechaCreacion(fechaCreacion) {

        this.fechaCreacion = fechaCreacion;
    }

    setFechaModificacion(fechaModificacion) {

        this.fechaModificacion = fechaModificacion;
    }


    getNombreUsuario(){
        return this.NombreUsuario;
    }

    getContraseña(){
        return this.Contraseña;
    }

    getRol(){
        return this.rol;
    }

    getFechaCreacion(){
        return this.fechaCreacion;
    }

    getFechaModificacion(){
        return this.fechaModificacion;
    }
}