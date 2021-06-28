function verificaPalindrome (str){
  let verifica = true;
  let aux = str.length -1;
  for(let i = 0; i<str.length; i+=1){
    if(str[i] != str[aux - i]){
      verifica = false;
      break;
    }
  }
  return verifica;
}

console.log(verificaPalindrome('arara'.toLocaleLowerCase()));