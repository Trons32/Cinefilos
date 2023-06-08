class Pelicula {

    constructor(Codigo, NombreOriginal,NombreAsignado,Genero,IdiomaOriginal,IdiomasDisponibles,SubtitulosDisponibles,Duracion,ActoresPrincipales,ActoresSecundarios, NumerosAfiches, NumeroCopia, Productora) {

        this.Codigo = Codigo;
        this.NombreOriginal = NombreOriginal;
        this.NombreAsignado = NombreAsignado;
        this.Genero = Genero;
        this.IdiomaOriginal = IdiomaOriginal;
        this.IdiomasDisponibles = IdiomasDisponibles;
        this.SubtitulosDisponibles = SubtitulosDisponibles;
        this.Duracion = Duracion;
        this.ActoresPrincipales = ActoresPrincipales;
        this.ActoresSecundarios = ActoresSecundarios;
        this.NumerosAfiches = NumerosAfiches;
        this.NumeroCopia = NumeroCopia;
        this.Productora = Productora;
    }

    
    setCodigo(Codigo) {

        this.Codigo = Codigo;
    }

    
    setNombreOriginal(NombreOriginal) {

        this.NombreOriginal = NombreOriginal;
    }

    setNombreAsignado(NombreAsignado) {

        this.NombreAsignado = NombreAsignado;
    }

    setGenero(Genero) {

        this.Genero = Genero;
    }

    setIdiomaOriginal(IdiomaOriginal) {

        this.IdiomaOriginal = IdiomaOriginal;
    }

    setIdiomasDisponibles(IdiomasDisponibles){
        this.IdiomasDisponibles = IdiomasDisponibles;
    }

    setSubtitulosDisponibles(SubtitulosDisponibles){
        this.SubtitulosDisponibles =SubtitulosDisponibles;
    }

    setDuracion(Duracion){
        this.Duracion = Duracion;
    }

    setActoresPrincipales(ActoresPrincipales){
        this.ActoresPrincipales = ActoresPrincipales;
    }

    setActoresSecundarios(ActoresSecundarios){
        this.ActoresSecundarios = ActoresSecundarios;
    }

    setNumerosAfiches(NumerosAfiches){
        this.NumerosAfiches = NumerosAfiches;
    }

    setNumeroCopia(NumeroCopia){
        this.NumeroCopia =NumeroCopia;
    }

    setProductora(Productora){
        this.Productora = Productora;
    }

    getCodigo(){
        return this.Codigo;
    }

    getNombreOriginal(){
        return this.NombreOriginal;
    }

    getNombreAsignado(){
        return this.NombreAsignado;
    }

    getGenero(){
        return this.Genero;
    }

    getIdiomaOriginal(){
        return this.IdiomaOriginal;
    }

    getIdiomasDisponibles(){
        return this.IdiomasDisponibles;
    }

    getSubtitulosDisponibles(){
        return this.SubtitulosDisponibles;
    }

    getDuracion(){
        return this.Duracion;
    }

    getActoresPrincipales(){
        return this.ActoresPrincipales;
    }

    getActoresSecundarios(){
        return this.ActoresSecundarios;
    }

    getNumerosAfiches(){
        return this.NumerosAfiches;
    }

    getNumeroCopia(){
        return this.NumeroCopia;
    }

    getProductora(){
        return this.Productora;
    }

}