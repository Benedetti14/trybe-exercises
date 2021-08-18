function techList (arr, name) {
return arr.length === 0 ? 'Vazio!' :  arr.sort().map((element) => ({ tech: element, name }));
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;