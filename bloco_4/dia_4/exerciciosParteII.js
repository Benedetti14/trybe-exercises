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

// function maior(vet){
//   let maior = 0;
//   let maiorI = 0;
//   for(let i = 0; i<vet.length; i+=1){
//     if (vet[i] > maior){
//       maior = vet[i];
//       maiorI = i;
//     }
//   }
//   return maiorI;
// }
// let teste = [2, 3, 6, 7, 10, 1]
// console.log(maior(teste));

/***************************************************/

// Exercicio 3 

function maior(vet){
  let menor = vet[0];
  let menorI = 0;
  for(let i = 0; i<vet.length; i+=1){
    if (vet[i] < menor){
      menor = vet[i];
      menorI = i;
    }
  }
  return menorI;
}
let teste = [2, 4, 6, 7, 10, 0, -3];
console.log(maior(teste));
