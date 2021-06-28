// Exercicio 1 
// function verificaPalindrome (str){
//   let verifica = true;
//   let aux = str.length -1;
//   for(let i = 0; i<str.length; i+=1){
//     if(str[i] != str[aux - i]){
//       verifica = false;
//       break;
//     }
//   }
//   return verifica;
// }

// console.log(verificaPalindrome('arara'.toLocaleLowerCase()));

/***************************************************/

// Exercicio 2

function maior(vet){
  let maior = 0;
  for(let i = 0; i<vet.length; i+=1){
    if (vet[i] > maior){
      maior = vet[i];
    }
  }
  return maior;
}
let teste = [2, 3, 6, 7, 10, 1]
console.log(maior(teste));