function esMultiplo(a, b) {
    if (b === 0){
        return false;
    }
    return a % b === 0;
}
console.log("12 es multiplo de de 4", esMultiplo(12, 4));