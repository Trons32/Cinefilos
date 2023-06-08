class Cliente {

    constructor(Nombre, Apellidos,TipoDocumento,NumeroDocumento,FechaNacimiento,DireccionResidencia,NumeroCelular,RedesSociales,NombreUsuario,Contraseña) {

        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.TipoDocumento = TipoDocumento;
        this.NumeroDocumento = NumeroDocumento;
        this.FechaNacimiento = FechaNacimiento;
        this.DireccionResidencia = DireccionResidencia;
        this.NumeroCelular = NumeroCelular;
        this.RedesSociales = RedesSociales;
        this.NombreUsuario = NombreUsuario;
        this.Contraseña = Contraseña;

    }

    
    setNombre(Nombre) {

        this.Nombre = Nombre;
    }

    
    setApellidos(Apellidos) {

        this.Apellidos = Apellidos;
    }

    setTipoDocumento(TipoDocumento) {

        this.TipoDocumento = TipoDocumento;
    }

    setNumeroDocumento(NumeroDocumento) {

        this.NumeroDocumento = NumeroDocumento;
    }

    setFechaNacimiento(FechaNacimiento) {

        this.FechaNacimiento = FechaNacimiento;
    }

    setDireccionResidencia(DireccionResidencia){
        this.DireccionResidencia = DireccionResidencia;
    }

    setNumeroCelular(NumeroCelular){
        this.NumeroCelular =NumeroCelular;
    }

    setRedesSociales(RedesSociales){
        this.RedesSociales = RedesSociales;
    }

    setNombreUsuario(NombreUsuario){
        this.NombreUsuario = NombreUsuario;
    }

    setContraseña(Contraseña){
        this.Contraseña = Contraseña;
    }

   
    getNombre(){
        return this.Nombre;
    }

    getApellidos(){
        return this.Apellidos;
    }

    getTipoDocumento(){
        return this.TipoDocumento;
    }

    getNumeroDocumento(){
        return this.NumeroDocumento;
    }

    getFechaNacimiento(){
        return this.FechaNacimiento;
    }

    getDireccionResidencia(){
        return this.DireccionResidencia;
    }

    getNumeroCelular(){
        return this.NumeroCelular;
    }

    getRedesSociales(){
        return this.RedesSociales;
    }

    getNombreUsuario(){
        return this.NombreUsuario;
    }

    getContraseña(){
        return this.Contraseña;
    }

  

}