let salario = 3000;
let inss = 0;
let salarioBase = 0;
let ir = 0;
let irCalculado = 0;
let parcela = 0;
let liquido = 0;

if (salario<=1556.94){
  inss = salario * 0.08;
}
else if(salario>1556.94 && salario<=2594.92){
  inss = salario * 0.09;
}
else if(salario>2594.92 && salario<=5189.82){
  inss = salario * 0.11;
}
else{
  inss = 570.88;
}
// console.log(inss);

salarioBase = salario - inss;
// console.log(salarioBase);

if (salarioBase<=1903.98){
  ir = 0;
  parcela = 0;
}
else if(salarioBase>1903.98 && salarioBase<=2826.65){
  ir = 0.075;
  parcela = 142.8;
}
else if(salarioBase>2826.65 && salarioBase<=3751.05){
  ir = 0.15;
  parcela = 354.8;
}
else if(salarioBase>3751.05 && salarioBase<=4664.68){
  ir = 0.225;
  parcela = 636.13;
}
else{
  ir = 0.275;
  parcela = 869.36;
}
// console.log(ir);
// console.log(parcela);

irCalculado = (salarioBase*ir) - parcela;
// console.log(irCalculado);

liquido = salarioBase - irCalculado;

console.log(liquido);


