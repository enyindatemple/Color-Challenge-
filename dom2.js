console.log('Connected!!!');

const body = document.querySelector('.body');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const purple = document.querySelector('.purple');
const defualt = document.querySelector('.default');
const h1 = document.querySelector('h1');


red.addEventListener('click', () => {
    h1.innerHTML = 'This is a Red BackGround!!!';
    body.setAttribute('style', 'background: red;');
});

green.addEventListener('click', () => {
    h1.innerHTML = 'This is a Green BackGround!!!';
    body.setAttribute('style', 'background: green;');
});

yellow.addEventListener('click', () => {
    h1.innerHTML = 'This is a Yellow BackGround!!!';
    body.setAttribute('style', 'background: yellow;');
});

purple.addEventListener('click', () => {
    h1.innerHTML = 'This is a Purple BackGround!!!';
    h1.setAttribute('style', 'color: white;');
    body.setAttribute('style', 'background: purple;')
});
defualt.addEventListener('click', () => {
    h1.innerHTML = 'This is the Deafult BackGround!!!';
    body.setAttribute('style', 'background: white;');
});
