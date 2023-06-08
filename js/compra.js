class Compra {

    constructor(numero, fechaCompra,pelicula,cantidad,precio,subTotal,total) {

        this.numero = numero;
        this.fechaCompra = fechaCompra;
        this.pelicula = pelicula;
        this.cantidad = cantidad;
        this.precio = precio;
        this.subTotal = subTotal;
        this.total = total;
    }

    
    setNumero(numero) {

        this.numero = numero;
    }

    
    setFechaCompra(fechaCompra) {

        this.fechaCompra = fechaCompra;
    }

    setPelicula(pelicula) {

        this.pelicula = pelicula;
    }

    setCantidad(cantidad) {

        this.cantidad = cantidad;
    }

    setPrecio(precio) {

        this.precio = precio;
    }

    setSubtotal(subTotal) {

        this.subTotal = subTotal;
    }

    setTotal(total) {
        this.total = total;
    }

  
    getNumero(){
        return this.numero;
    }

    getFechaCompra(){
        return this.fechaCompra;
    }

    getPelicula(){
        return this.pelicula;
    }

    getCantidad(){
        return this.cantidad;
    }

    getPrecio(){
        return this.precio;
    }

    getSubTotal(){
        return this.subTotal;
    }

    getTotal(){
        return this.total;
    }

  
}