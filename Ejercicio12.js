function operacionesMatematicas(a, b) {
  const sumar = (a, b) => a + b;
  const restar = (a, b) => a - b;
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => a / b;
  return { sumar, restar, multiplicar, dividir };
}
const operaciones = operacionesMatematicas(10, 5);
console.log("Suma:", operaciones.sumar(10, 5));
console.log("Resta:", operaciones.restar(10, 5));
console.log("Multiplicación:", operaciones.multiplicar(10, 5));
console.log("División:", operaciones.dividir(10, 5));