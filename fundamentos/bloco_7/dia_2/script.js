//Parte 1

// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// //"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

// const customerInfo = (order) => {
//   const address = 'address';
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const name = order.name;
//   const phoneNumber = order.phoneNumber;
//   const street = order[address].street;
//   const number = order[address].number;
//   const apartment = order[address].apartment;
  
//   console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP:${apartment}`);
// }

// customerInfo(order);

// const orderModifier = (order) => {
//   order.name = 'Luiz Silva';
//   order.payment.total = 50;
//   const pizzaTypes = Object.keys(order.order.pizza);
//   const drink = order.order.drinks.coke.type;

//   console.log(`Olá ${order.name}, o total do seu pedido de ${pizzaTypes[0]}, ${pizzaTypes[1]} e ${drink} é R$ ${order.payment.total},00.`)
// }

// orderModifier(order);

//Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.

//Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (obj, key, value) => obj[key] = value;

addKey(lesson2, 'turno', 'manhã');

console.log(lesson2);

const listKeys = (obj) => {
  const keys = Object.keys(obj);
  let list = ''
  for(let i of keys){
    if (list === '') {
      list = `- ${i}`;
    } else { 
      list = `${list}; 
- ${i}`
    }
  }
  console.log(list);
}

listKeys(lesson2);

const objLength = (obj) => Object.keys(obj).length;

console.log(objLength(lesson2));

const listValues = (obj) => {
  const values = Object.values(obj);
  let list = ''
  for(let i of values){
    if (list === '') {
      list = `- ${i}`;
    } else { 
      list = `${list}; 
- ${i}`
    }
  }
  console.log(list);
}

listValues(lesson2);

const allLessons = {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3
};

console.log(allLessons);


const numberOfStudents = (obj) => {
  let students = 0;
  const lesson = Object.keys(obj);
  for (let i of lesson){
    const les = obj[i];
    let key = Object.keys(les);

    if (key.includes('numeroEstudantes')) {
      students += les.numeroEstudantes;
    }
  }

  console.log(students);
}

numberOfStudents(allLessons);

const getValueByNumber = (obj, index) => {
  const keys = Object.keys(obj);
  return obj[keys[index]];
} 

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  const pair = Object.entries(obj);
  let verify = false;
  for (let i of pair) {
    if (i[0] === key && i[1] === value) {
      verify = true;
    }
  }
  return verify;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false