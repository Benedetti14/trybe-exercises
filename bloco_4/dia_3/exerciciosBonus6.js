let n = 7;
let divisores = 0;

for(let i = 1; i<=n; i+=1){
  if(n%i === 0){
    divisores+=1;
  }
}
// console.log(divisores);

if(divisores === 2){
  console.log("Esse número é primo!!");
}
else{
  console.log("Esse número não é primo!!");
}