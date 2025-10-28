function ejecutarOperacion(funcion, x, y) {
  return funcion(x, y);
}
const suma = (a, b) => a + b;
const multiplicacion = (a, b) => a * b;

console.log(ejecutarOperacion(suma, 5, 3));
console.log(ejecutarOperacion(multiplicacion, 4, 6));