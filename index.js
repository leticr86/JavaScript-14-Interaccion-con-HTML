const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  alert("click en el botón");
});

$("#boton").click(() => {
  console.log("Hola, estoy utilizando jQuery");
});
