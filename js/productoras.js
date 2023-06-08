class Productora {

    constructor(Codigo, Nombre,PaisReside,Telefono,celular,CorreoElectronico,Representante) {

        this.Codigo = Codigo;
        this.Nombre = Nombre;
        this.PaisReside = PaisReside;
        this.Telefono = Telefono;
        this.celular = celular;
        this.CorreoElectronico = CorreoElectronico;
        this.Representante = Representante;

    }

    
    setCodigo(Codigo) {

        this.Codigo = Codigo;
    }

    
    setNombre(Nombre) {

        this.Nombre = Nombre;
    }

    setPaisReside(PaisReside) {

        this.PaisReside = PaisReside;
    }

    setTelefono(Telefono) {

        this.Telefono = Telefono;
    }

    setcelular(celular) {

        this.celular = celular;
    }

    setCorreoElectronico(CorreoElectronico){
        this.CorreoElectronico = CorreoElectronico;
    }

    setRepresentante(Representante){
        this.Representante =Representante;
    }

   

    getCodigo(){
        return this.Codigo;
    }

    getNombre(){
        return this.Nombre;
    }

    getPaisReside(){
        return this.PaisReside;
    }

    getTelefono(){
        return this.Telefono;
    }

    getcelular(){
        return this.celular;
    }

    getCorreoElectronico(){
        return this.CorreoElectronico;
    }

    getRepresentante(){
        return this.Representante;
    }

   

}