const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => {
    const nameLC = curr.toLowerCase();

    acc += nameLC.split('').reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0);

    return acc;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);