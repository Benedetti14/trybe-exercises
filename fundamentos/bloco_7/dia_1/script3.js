const btn = document.querySelector('button');
let text = document.querySelector('span');
let clickCount = 0;
text.innerText = `Quantidade de clicks: ${clickCount}`;

btn.addEventListener('click', (event) => {
  event.preventDefault();
  clickCount += 1; 
  text.innerText = `Quantidade de clicks: ${clickCount}`;
});