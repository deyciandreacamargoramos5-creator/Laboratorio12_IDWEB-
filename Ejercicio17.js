function mostrarDatos(nombre, edad, ...hobbies) {
  console.log("Nombre: " + nombre);
  console.log("Edad: " + edad);
  console.log("Hobbies: " + hobbies.join(", "));
}
console.log("Ejecución");
mostrarDatos("Juan", 25, "lectura", "deporte", "música");
