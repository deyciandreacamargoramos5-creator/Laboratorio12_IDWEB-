const componerTransformaciones = (primeraFunc, segundaFunc) => (texto) => segundaFunc(primeraFunc(texto));
const transformar = componerTransformaciones(
    texto => texto.toUpperCase(),
    texto => texto + "!"
);
console.log(transformar("hola"));  
