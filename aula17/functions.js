// function nome() {
//   console.log("faz algo");
// }

// function saudacao() {
//   console.log("bom dia");
// }
// saudacao(); // estou chamando a funcao
// function exemplo(parametros) {
//   console.log(`Bom dia ${parametros}`);
//   return 123456;
// }

// const variavel = exemplo("Ogata");
// console.log(variavel);

function soma(x = 2, y = 4) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(1, 24));
console.log(soma(1));
// return encerra a function

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

// arrow function

const raizArrow = (n) => {
  return n ** 0.5;
};

const raizArrow2 = (n) => n ** 0.5;
