function crearContador() {
  let contador = 0;
  return {
    incrementar: () => ++contador,
    resetear: () => contador = 0
  };
}
const contador = crearContador();

console.log(contador.incrementar()); 
console.log(contador.incrementar()); 
console.log(contador.incrementar()); 
console.log(contador.resetear());    
console.log(contador.incrementar());