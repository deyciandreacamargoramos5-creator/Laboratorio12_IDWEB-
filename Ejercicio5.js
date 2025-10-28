function Promedio(){
    let nota1 = parseFloat(prompt("Ingresa la nota 1"));
    let nota2 = parseFloat(prompt("Ingresa la nota 2"));
    let nota3 = parseFloat(prompt("Ingresa la nota 3"));
    let promedio = (nota1+nota2+nota3)/3;
    console.log("El promedio es:" + promedio);
}