function calcularPagamento() {
  let valor = Number(document.getElementById("valor").value);
  let forma = document.getElementById("pagamento").value;

  let resultado = document.getElementById("resultado");
  let valorFinal = valor;

  if (forma === "1") {
    valorFinal = valor * 0.9; // 10% desconto
  } else if (forma === "2") {
    valorFinal = valor * 0.95; // 5% desconto
  } else if (forma === "3") {
    valorFinal = valor; // sem desconto
  } else {
    resultado.innerText = "Escolha uma forma de pagamento válida!";
    resultado.style.color = "red";
    return;
  }

  resultado.innerText = "Valor final: R$ " + valorFinal.toFixed(2);
  resultado.style.color = "green";
}
