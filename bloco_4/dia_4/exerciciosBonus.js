// Exercicio 1

function Romanos(roma) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let arrayNumbers = [];
  let result = 0;

  for(let key in roma){
    arrayNumbers[key] = romanos[roma[key]];
  }

  for(let index = 0; index<arrayNumbers.length; index+=1){
    if(arrayNumbers[index] < arrayNumbers[index + 1]){
      arrayNumbers[index + 1] -= arrayNumbers[index];
    }else{
      result += arrayNumbers[index];
    }
  }

  return result;
}

console.log(Romanos('IV'));
/**************************************************/

// Exercicio 2

// function arrayOfNumbers (vector){
//   let pares = [];
//   for(let i = 0; i<vector.length; i+=1){
//     for(let j = 0; j<vector[i].length; j+=1){
//       //console.log(vector[i][j]);
//       if(vector[i][j]%2 === 0){
//         pares.push(vector[i][j]);
//       }
//     }
//   }
//   return pares;
// }


// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// let vetorPar = arrayOfNumbers(vector);

// console.log(vetorPar);

/**************************************************/

// Exercicio 3


// const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];

// let cesta = {}
// var aux = 1;
// var key = '';

// for(let i = 0; i<basket.length; i+=1){
//   for(let j = i+1; j<basket.length; j+=1){
//     if((basket[i] === basket[j]) && (basket[i] != 'nulo') && (basket[j] != 'nulo')){
//       aux += 1;
//       basket[j] = 'nulo';
//     }
//   }
//   if(basket[i] != 'nulo'){
//     cesta[basket[i]] = aux;
//     aux = 1;
//   }
// }

// console.log(cesta);