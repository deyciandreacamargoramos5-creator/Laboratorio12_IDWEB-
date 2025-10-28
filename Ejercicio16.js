function media(...numeros) {
  const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
  return suma / numeros.length;
}
console.log(media(10, 20, 30));           
console.log(media(5, 10, 15, 20));        
console.log(media(2, 4, 6, 8, 10));       
console.log(media(1));                    