function descargarArchivo(url, callback) {
  console.log("Descargando...");
  setTimeout(() => {
    callback("Descarga completa de " + url);
  }, 1000);
}
descargarArchivo("https://cvc.cervantes.es/literatura/lee/coleccion/pdf/quijote.pdf", function(mensaje) {
  console.log(mensaje);
});