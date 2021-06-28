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

// function maior(vet){
//   let menor = vet[0];
//   let menorI = 0;
//   for(let i = 0; i<vet.length; i+=1){
//     if (vet[i] < menor){
//       menor = vet[i];
//       menorI = i;
//     }
//   }
//   return menorI;
// }
// let teste = [2, 4, 6, 7, 10, 0, -3];
// console.log(maior(teste));

/***************************************************/

// Exercicio 4

// function maior(nomes){
//   let maior = 0;
//   let m = 0;
//   for(let i = 0; i<nomes.length; i+=1){
//     let aux = nomes[i].length;
//     if (aux > maior){
//       maior = nomes.length;
//       m = i;
//     }
//   }
//   return nomes[m];
// }
// let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// console.log(maior(teste));

/***************************************************/

// Ecercicio 5

// function maisSeRepete (numeros){
//   let repete = 0;
//   let SeRepete = 0;
//   let n = 0;
//   let nMais = 0;

//   for(let i = 0; i<numeros.length; i+=1){
//     for(let j = i+1; j<numeros.length; j+=1){
//       if(numeros[i] === numeros[j]){
//         repete += 1;
//         n = numeros[i];
//       }
//       }
//       if (repete > SeRepete){
//         SeRepete = repete;
//         nMais = n;
//       }
//   }
//   return nMais;
// }


// let teste = [2, 3, 2, 3, 3, 2, 3];
// console.log(maisSeRepete(teste));

/***************************************************/

// Exercicio 6
var total = 0;

function somatorio (n){
  if (n != 0){
    total = n + somatorio(n-1);
  }
  return total;
}

console.log(somatorio(5));