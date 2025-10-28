function calcularDescuento(){
    let precio = parseFloat(prompt("Ingresa el precio"));
    let porcentaje = parseFloat(prompt("Ingrese el descuento en procentaje"));
    let descuento = (precio * porcentaje) / 100;
    console.log("El descuento es:" + descuento);
}