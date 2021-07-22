//Parte 1

//Exercicio 1

// const testingScope = (escopo)  => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope}. Ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(false);

//Exercicio 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!` ); // será necessário alterar essa linha 😉

//Parte 2

//Exercicio 1

// let fat = 1;

// const fatorial = (num) => num === 0 ? fat : fat *= num * fatorial(num - 1);

// console.log(fatorial(6));

//Exercicio 2

// const longestWord = (word) => {
//   let words = word.split(' ');
//   let maior = 0;
//   let w = ''
//   for (let i = 0; i < words.length; i += 1){
//     words[i].length > maior ?  maior = words[i].length : maior;

//     words[i].length === maior ? w = words[i] : w;
//   }
//   return w;
// }
// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

