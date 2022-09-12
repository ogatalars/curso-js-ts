const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
let raizQuadrada = numero ** 0.5;
let notANumber = Number.isNaN(numero);
let inteiro = Number.isInteger(numero);
let arrendodadoCima = Math.ceil(numero);
let arrendondaBaixo = Math.floor(numero);

texto.innerHTML = "";
texto.innerHTML += `<p>Raiz quadrada: ${raizQuadrada}.</p>`;
texto.innerHTML += `<p>É NaN: ${notANumber}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${inteiro}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${arrendondaBaixo}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${arrendodadoCima}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
