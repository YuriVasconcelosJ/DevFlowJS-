// String methods = allow you the manipulate and work with text (strings)

let userName = "BroCode";

let index = userName.charAt();
console.log(index);
// Retrona a primeira posição da letra
console.log(userName.indexOf("o"));
// Ele só vai retornar -1 caso não ache
console.log(userName.indexOf("y"));
// Ele vai retornar o ultima indice da string
console.log(userName.lastIndexOf("o"));
// Diz a quantidade de elementos na string
console.log(userName.length);
// Remove os espaços presente nas extremidades
console.log(userName.trim);
// Transforma todos as letras em maiusucula
console.log(userName.toUpperCase());
// Transforma todos as letras em minusuculas
console.log(userName.toLowerCase());
// Retorna true se a sequencia que estiver procurando existir
console.log(userName.startsWith());
// Retorna true se a sequencia que estiver no final procurando existir
console.log(userName.startsWith("e"));
//
console.log(userName.includes());
// Troca todos os caracteres por outro
console.log(userName.replaceAll("o", "x"));
// Adiciona o caractere que voce indicar e sua quantidade
console.log(userName.padStart(10, "p"));
// Adiciona o caractere que voce indicar e sua quantidade
console.log(userName.padEnd(10, "p"));
