function filtrarArreglo(arr, callback) {
  return arr.filter(callback);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtrarArreglo(numeros, (num) => num % 2 === 0));
console.log(filtrarArreglo(numeros, (num) => num > 5));