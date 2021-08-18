function hydrate(str) {
  const r = /\d+/g;
  const numbers = (str.match(r));

  const count = numbers.reduce((acc, curr) => acc + Number(curr), 0);
  return count > 1 ? `${count} copos de água` : `${count} copo de água`;
}

module.exports = hydrate;