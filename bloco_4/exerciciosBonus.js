let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i, j;

for(i=1; i < numbers.length; i+=1){
  for(j=0; j < numbers.length; j+=1){
    if(numbers[i] < numbers[j]){
      let aux = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = aux;
    }
  }
}

console.log(numbers);

for(i=1; i < numbers.length; i+=1){
  for(j=0; j < numbers.length; j+=1){
    if(numbers[i] > numbers[j]){
      let aux = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = aux;
    }
  }
}

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersM = [];

for(i=0;i<numbers.length; i+=1){
  if(i==numbers.length - 1){
    numbersM.push(numbers[i]*2);
  }
  else{
    numbersM.push(numbers[i]*numbers[i+1]);
  }
}

console.log(numbersM)