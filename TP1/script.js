function calcular_imc(event) {
    event.preventDefault();
    var altura = document.getElementById("altura").value / 100; // Convertir cm a m
    var peso = document.getElementById("peso").value;
    var imc = peso / (altura * altura);
    document.getElementById("resu").innerText = `Tu IMC es: ${imc.toFixed(2)}`;
  }
  