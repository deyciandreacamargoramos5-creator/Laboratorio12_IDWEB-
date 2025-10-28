function CrearSecuencia(inicio, paso) {
  let actual = inicio;
  
  return function() {
    const valorADevolver = actual;
    actual += paso;
    return valorADevolver;
  };
}
const secuencia = CrearSecuencia(2, 3);

console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia()); 
