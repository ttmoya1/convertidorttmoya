function convertir() {
  const input = document.getElementById("input").value.trim();
  const conversion = document.getElementById("conversion").value;
  const resultado = document.getElementById("resultado");

  if (conversion === "bin-dec") {
  
    if (!/^[01]+$/.test(input)) {
      resultado.textContent = "¡Número binario inválido!";
      return;
    }
    resultado.textContent = parseInt(input, 2);
  } else {
    
    const decimal = parseInt(input);
    if (isNaN(decimal)) {
      resultado.textContent = "¡Número decimal inválido!";
      return;
    }
    resultado.textContent = decimal.toString(2);
  }
 }

 
  function resetear() {
  document.getElementById("input").value = "";
  document.getElementById("conversion").selectedIndex = 0;
  document.getElementById("resultado").textContent = "";


}