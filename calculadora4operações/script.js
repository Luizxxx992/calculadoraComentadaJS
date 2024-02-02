




// Função para somar dois números
function somar(numeroA, numeroB) {
  return numeroA + numeroB;
}

// Função para subtrair dois números
function subtrair(numeroA, numeroB) {
  return numeroA - numeroB;
}

// Função para multiplicar dois números
function multiplicar(numeroA,numeroB) {
  return numeroA * numeroB;
}

// Função para dividir dois números
function dividir(numeroA, numeroB) {
  return numeroA / numeroB;
}
// Função para 
function calcularCubo(numeroA,numeroB){
  let soma = numeroA + numeroB;
  return soma * soma;
 
}
function calcularQuadrado(numeroA,numeroB) {
  let soma = numeroA + numeroB;
  return soma * soma;

}
function calcularMedia(numeroA,numeroB){
  let soma = numeroA + numeroB;
  return  soma /2;

}

// Função principal para realizar os cálculos e exibir os resultados na página
function calcular() {
  // Obter os valores dos campos de entrada
  const numeroA = parseFloat(document.getElementById("numeroA").value);
  const numeroB = parseFloat(document.getElementById("numeroB").value);

  // Exibir os resultados na página HTML
  document.getElementById("soma").innerHTML = "Soma: " + somar(numeroA, numeroB);
  document.getElementById("subtracao").innerHTML = "Subtração: " + subtrair(numeroA, numeroB);
  document.getElementById("multiplicacao").innerHTML = "Multiplicação: " + multiplicar(numeroA, numeroB);
  document.getElementById("divisao").innerHTML = "Divisão: " + dividir(numeroA, numeroB);
  document.getElementById("cubo").innerHTML = "Cubo: " + calcularCubo(numeroA, numeroB);
  document.getElementById("quadrado").innerHTML = "Quadrado: " + calcularQuadrado(numeroA, numeroB);
  document.getElementById("media").innerHTML = "Media: " + calcularMedia(numeroA, numeroB);
}



