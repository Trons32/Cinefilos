class Cartelera {

    constructor(Sala, Horario,Pelicula,FechaInicio,FechaFinalizacion) {

        this.Sala = Sala;
        this.Horario = Horario;
        this.Pelicula = Pelicula;
        this.FechaInicio = FechaInicio;
        this.FechaFinalizacion = FechaFinalizacion;
    }

    
    setSala(Sala) {

        this.Sala = Sala;
    }

    
    setHorario(Horario) {

        this.Horario = Horario;
    }

    setPelicula(Pelicula) {

        this.Pelicula = Pelicula;
    }

    setFechaInicio(FechaInicio) {

        this.FechaInicio = FechaInicio;
    }

    setFechaFinalizacion(FechaFinalizacion) {

        this.FechaFinalizacion = FechaFinalizacion;
    }

  
    getSala(){
        return this.Sala;
    }

    getHorario(){
        return this.Horario;
    }

    getPelicula(){
        return this.Pelicula;
    }

    getFechaInicio(){
        return this.FechaInicio;
    }

    getFechaFinalizacion(){
        return this.FechaFinalizacion;
    }

  
}