class Sucursal {

    constructor(Codigo, Direccion,Departamento,Ciudad,GerenteEncargado,NumeroSalas,NumeroTrabajadores,Cafeteria) {

        this.Codigo = Codigo;
        this.Direccion = Direccion;
        this.Departamento = Departamento;
        this.Ciudad = Ciudad;
        this.GerenteEncargado = GerenteEncargado;
        this.NumeroSalas = NumeroSalas;
        this.NumeroTrabajadores = NumeroTrabajadores;
        this.Cafeteria = Cafeteria;

    }

    
    setCodigo(Codigo) {

        this.Codigo = Codigo;
    }

    
    setDireccion(Direccion) {

        this.Direccion = Direccion;
    }

    setDepartamento(Departamento) {

        this.Departamento = Departamento;
    }

    setCiudad(Ciudad) {

        this.Ciudad = Ciudad;
    }

    setGerenteEncargado(GerenteEncargado) {

        this.GerenteEncargado = GerenteEncargado;
    }

    setNumeroSalas(NumeroSalas){
        this.NumeroSalas = NumeroSalas;
    }

    setNumeroTrabajadores(NumeroTrabajadores){
        this.NumeroTrabajadores =NumeroTrabajadores;
    }

    setCafeteria(Cafeteria){
        this.Cafeteria = Cafeteria;
    }

   

    getCodigo(){
        return this.Codigo;
    }

    getDireccion(){
        return this.Direccion;
    }

    getDepartamento(){
        return this.Departamento;
    }

    getCiudad(){
        return this.Ciudad;
    }

    getGerenteEncargado(){
        return this.GerenteEncargado;
    }

    getNumeroSalas(){
        return this.NumeroSalas;
    }

    getNumeroTrabajadores(){
        return this.NumeroTrabajadores;
    }

    getCafeteria(){
        return this.Cafeteria;
    }

    
}