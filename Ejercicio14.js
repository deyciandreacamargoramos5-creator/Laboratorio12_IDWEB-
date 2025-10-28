function acumulador(valorInicial) {
  let total = valorInicial;
  return (nuevo) => total += nuevo;
}
const acumular = acumulador(10);

console.log(acumular(5));
console.log(acumular(3));
console.log(acumular(7));
console.log(acumular(2));