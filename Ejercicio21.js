function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
  }
  if (exponente < 0) {
    return 1 / potencia(base, -exponente);
  }
  return base * potencia(base, exponente - 1);
}
console.log("3 elevado a 4 es: " + potencia(3, 4));
