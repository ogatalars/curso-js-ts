const array1 = [
  "sempre em colchete",
  "posso colocar qulquer coisa aqui",
  1,
  2,
  3,
  "batata",
  "charlinho",
  "plantas",
  "vscode",
];
// os arrays tbm sao indexados pelos seus elementos.
console.log(array1[0]); // "sempre em colchete"

let array2 = [1, 2, 3, 4, 1000, -2, 3.2, "ovo", "alah", "elefante", 1];
array2[0] = 0;
console.log(array2);
console.log(array2.length);
array2.push("joia"); // vai pro fim
console.log(array2);
array2.unshift("luiza");
console.log(array2);
