const background = document.getElementById('backgroud-color');

background.addEventListener('click', changeBgColor);

function changeBgColor(){
  let color = prompt('What color do you want for the background?');
  localStorage.setItem('background-color', color);
  document.body.style.backgroundColor = localStorage.getItem('background-color');
}
document.body.style.backgroundColor = localStorage.getItem('background-color');
/*-------------------------------------------------------------------------------*/
const textColor = document.getElementById('text-color');

textColor.addEventListener('click', changeTxColor);

function changeTxColor(){
  let color = prompt('What color do you want for the text?');
  localStorage.setItem('text-color', color);
  document.body.style.color = localStorage.getItem('text-color');
}
document.body.style.color = localStorage.getItem('text-color');
/*-------------------------------------------------------------------------------*/
const fontSize = document.getElementById('font-size');

fontSize.addEventListener('click', changeFontSize);

function changeFontSize(){
  let size = prompt('What font size do you want?');
  localStorage.setItem('font-size', size);
  document.body.style.fontSize = localStorage.getItem('font-size') + 'px';
}
document.body.style.fontSize = localStorage.getItem('font-size') + 'px';
/*-------------------------------------------------------------------------------*/
const lineSpacing = document.getElementById('line-spacing');

lineSpacing.addEventListener('click', changeLineSpacing);

function changeLineSpacing(){
  let spacing = prompt('What line spacing do you want?');
  localStorage.setItem('line-spacing', spacing);
  document.body.style.lineHeight = localStorage.getItem('line-spacing') + 'px';
}
document.body.style.fontSize = localStorage.getItem('line-spacing') + 'px';
/*-------------------------------------------------------------------------------*/
const fontFamily = document.getElementById('font-family');

fontFamily.addEventListener('click', changeFontFamily);

function changeFontFamily(){
  let family = prompt('What font family do you want?');
  localStorage.setItem('font-family', family);
  document.body.style.fontFamily = localStorage.getItem('font-family');
}
document.body.style.fontFamily = localStorage.getItem('font-family');
/*-------------------------------------------------------------------------------*/
