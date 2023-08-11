console.log("\n === Calculadora Lógica ===");

const comparar = () => {
  //Entrada
  const num1 = parseInt(document.getElementById("num1").value || 0);
  const num2 = parseInt(document.getElementById("num2").value || 0);
  const operador = document.getElementById("operador").value;
  console.log(num1, num2, operador);

  //Processamento e Saída
  switch (operador) {
    case "maior que":
      document.getElementById("resultado").value = num1 > num2;
      break;
    case "menor que":
      document.getElementById("resultado").value = num1 < num2;
      break;
    case "maior ou igual":
      document.getElementById("resultado").value = num1 >= num2;
      break;
    case "menor ou igual":
      document.getElementById("resultado").value = num1 <= num2;
      break;
    case "diferente":
      document.getElementById("resultado").value = num1 != num2;
      break;
    case "igual":
      document.getElementById("resultado").value = num1 == num2;
      break;
  }
};
