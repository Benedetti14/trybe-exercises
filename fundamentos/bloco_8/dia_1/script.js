//Exercicio 1

// const employee = (fullName) => {
//   const emailName = fullName.toLowerCase().replace(' ', '_');
//   return {nomecompleto: fullName, email: `${emailName}@trybe.com`
// }};

// const newEmployees = () => {
//   const employees = {
//     id1: employee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: employee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: employee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees());

//Exercicio 2

// const raffleCheck = (num1, num2) => num1 === num2; 

// const raffleResult = (number, check) => {
//   const raffleNumber = Math.ceil(Math.random() * 5);
//   console.log(raffleNumber);
//   return check(raffleNumber, number) ? "Parabéns você ganhou" : "Tente novamente";
// };

// console.log(raffleResult(3, raffleCheck));

//Exercicio 3

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const correctAnswers = (rightAnswers, studentAnswers) => {
//   let count = 0.0;
//   for (let i = 0; i < rightAnswers.length; i += 1){
//     if (rightAnswers[i] === studentAnswers[i]){
//       count += 1;
//     } else if (studentAnswers[i] === 'N.A') {
//       count;
//     } else {
//       count -= 0.5;
//     } 
//   }
//   return count;
// }

// const grade = (rightAnswers, studentAnswers, correct) => {
//   return correct(rightAnswers, studentAnswers);
// }

// console.log(grade(RIGHT_ANSWERS, STUDENT_ANSWERS, correctAnswers));

//Bonus 

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damage = (minDamage, maxDamage) => (minDamage + Math.ceil(Math.random() * (maxDamage - minDamage)));

const dragonDamage = () => damage(battleMembers.warrior.strength, (warrior.strength * warrior.weaponDmg));
const warriorDamage = () => damage(battleMembers.warrior.strength, (warrior.strength * warrior.weaponDmg));
const mageDamage = () => damage(battleMembers.mage.intelligence, (mage.intelligence * 2));

const mageManaUsed = () => {
  let mana = battleMembers.mage.mana;  
  
  return mana < 15 ? 'Não possui mana suficiente' : 15;
}

const mageAttack = () => ({
  mana: mageManaUsed(),
  damage: mageDamage(),
});

let stopBattle = false;

const gameActions = {
  warriorTurn: (func) => {
    const damage = func();
    battleMembers.dragon.healthPoints -= damage;
    battleMembers.warrior.damage = damage;
  },
  mageTurn: (func) => {
    let mana = func().mana;
    let damage;
    if (mana === 'Não possui mana suficiente') {
      damage = 0;
      mana = 0;  
    } else {
      damage = func().damage;
    }

    battleMembers.dragon.healthPoints -= damage;
    battleMembers.mage.damage = damage;
    battleMembers.mage.mana -= mana;
  },
  dragonTurn: (func) => {
    const damage = func();
    battleMembers.dragon.damage = damage;
    battleMembers.mage.healthPoints -= damage;
    battleMembers.warrior.healthPoints -= damage;
  },
  finalBattle: () => {
    if (battleMembers.dragon.healthPoints <= 0) {
      battleMembers.dragon.healthPoints = 0;
      stopBattle = true;
      console.log('O dragão morreu, o mago e o guerreiro venceram a batalha!!');
    } if (battleMembers.mage.healthPoints <= 0) {
      battleMembers.mage.healthPoints = 0;
      stopBattle = true;
      console.log('O mago morreu :c');
    } if (battleMembers.warrior.healthPoints <= 0) {
      battleMembers.warrior.healthPoints = 0;
      stopBattle = true;
      ('O gurreiro moreu');
    } 
    console.log(battleMembers);
  },
};

do {
  gameActions.warriorTurn(warriorDamage);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonDamage);
  gameActions.finalBattle();
} while (stopBattle === false);
