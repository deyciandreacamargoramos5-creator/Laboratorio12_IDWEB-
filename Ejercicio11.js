function procesarTexto(texto) {
    function limpiarEspacios(texto) {
        let resultado = " ";
        let enEspacio = true;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] !== " ") {
                resultado += texto[i];
                enEspacio = false;
            } else if (!enEspacio) {
                resultado += " ";
                enEspacio = true;
            }
        }
        if (resultado.length > 0 && resultado[resultado.length - 1] === " ") {
            resultado = resultado.slice(0, -1);
        }
        return resultado;
    }
    function contarPalabras(texto) {
        const textoLimpio = limpiarEspacios(texto);
        if (textoLimpio === " ") return 0;
        let contador = 0;
        let enPalabra = false;
        for (let i = 0; i < textoLimpio.length; i++) {
            if (textoLimpio[i] !== " ") {
                if (!enPalabra) {
                    contador++;
                    enPalabra = true;
                }
            } else {
                enPalabra = false;
            }
        }
        return contador;
    }
    const textoLimpio = limpiarEspacios(texto);
    const cantidadPalabras = contarPalabras(texto);
    
    return {
        textoOriginal: texto,
        textoLimpio: textoLimpio,
        totalPalabras: cantidadPalabras
    };
}
console.log(procesarTexto("  Hola   mundo  desde  JavaScript  "));