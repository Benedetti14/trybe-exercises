//Exercicio 1

const employee = (fullName) => {
  const emailName = fullName.toLowerCase().replace(' ', '_');
  return {nomecompleto: fullName, email: `${emailName}@trybe.com`
}};

const newEmployees = () => {
  const employees = {
    id1: employee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());