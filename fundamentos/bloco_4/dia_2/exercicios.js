let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i;
let sum = 0;
let med = 0;
let maior = 0;
let menor = 0;
let impares = 0;

for (i=0; i<numbers.length; i+=1){
  console.log(numbers[i]);
}

for (i=0; i<numbers.length; i+=1){
  sum+=numbers[i];
}

console.log(sum);

med = sum/numbers.length;

if(med>20){
  console.log('valor maior que 20');
}
else{
  console.log('valor menor que 20');
}

console.log(med);

for(i=0; i<numbers.length; i+=1){
  if(numbers[i]>maior){
    maior = numbers[i];
  }
}

console.log(maior);

for(i=0; i<numbers.length; i+=1){
  if(numbers[i]%2 != 0){
    impares+=1;
  }
}

if(impares == 0){
  console.log('nenhum valor ímpar encontrado');
}
else{
  console.log('Existem ' + impares + ' numeros impares');
}

menor = numbers[0];

for(i=0; i<numbers.length; i+=1){
  if(numbers[i]<menor){
    menor = numbers[i];
  }
}

console.log(menor);