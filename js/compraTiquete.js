class CompraTiquetes {

    constructor(Sala, Horario,NumeroTiquetes,Posiciones,FormaPago,FechaVenta) {

        this.Sala = Sala;
        this.Horario = Horario;
        this.NumeroTiquetes = NumeroTiquetes;
        this.Posiciones = Posiciones;
        this.FormaPago = FormaPago;
        this.FechaVenta = FechaVenta;

    }

    
    setSala(Sala) {

        this.Sala = Sala;
    }

    
    setHorario(Horario) {

        this.Horario = Horario;
    }

    setNumeroTiquetes(NumeroTiquetes) {

        this.NumeroTiquetes = NumeroTiquetes;
    }

    setPosiciones(Posiciones) {

        this.Posiciones = Posiciones;
    }

    setFormaPago(FormaPago) {

        this.FormaPago = FormaPago;
    }

    setFechaVenta(FechaVenta){
        this.FechaVenta = FechaVenta;
    }


   
    getSala(){
        return this.Sala;
    }

    getHorario(){
        return this.Horario;
    }

    getNumeroTiquetes(){
        return this.NumeroTiquetes;
    }

    getPosiciones(){
        return this.Posiciones;
    }

    getFormaPago(){
        return this.FormaPago;
    }

    getFechaVenta(){
        return this.FechaVenta;
    }

 

}