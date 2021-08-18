function letter(l) {
  let change = ['a', 'e', 'i', 'o', 'u'];
  const num = change.findIndex((le) => l === le);
  return num !== -1 ? num + 1 : l;
}
function encode(str) {
  const aEncode = Array.from(str).map((le) => letter(le));
  let strEncode = aEncode.join('');
  return strEncode;
}

function numberToLetter(n) {
  let change = ['a', 'e', 'i', 'o', 'u'];
  const lett = change.find((l, i) => Number(n) === i + 1);
  return lett ? lett : n;
}
function decode(str) {
  const aDecode = Array.from(str).map((n) => numberToLetter(n))
  let strDecode = aDecode.join('');
  return strDecode;
}

module.exports = {
  encode,
  decode
};