//variables
const cardNum = document.querySelector('#cardNum');
const heart = document.querySelector('.heart');
const cub = document.querySelector('.cub');
const spade = document.querySelector('.spade');
const diamond = document.querySelector('.diamond');
const cardUp = document.querySelector('.cardUp');
const cardDown = document.querySelector('.cardDown')
const card = document.querySelector('.card')
const mybtn = document.querySelector('.mybtn');
//dataset
const cardType = ['♦', '♥', '♠', '♣'];
const cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

//Generamos Index aleatorio 
const RandomIndex = (arr) => Math.floor(Math.random()*arr.length);
//Usamos el Index aleatorio para sacar un valor del array
const GetNumber = (i,arr) => arr[i];
//Usamos el Index aleatorio para sacar un valor del array
const GetType = (i, arr) => arr[i];
console.log(GetType(RandomIndex(cardType), cardType))


window.onload = function() {
 cardNum.innerHTML = GetNumber(RandomIndex(cardNumber), cardNumber);
 cardUp.innerHTML = GetType(RandomIndex(cardType), cardType);
 cardDown.innerHTML = cardUp.innerHTML;
 if (cardUp.innerHTML== '♥' || cardUp.innerHTML== '♦') {
    card.classList.add('card-red');
} else {
    card.classList.add('card-black');
}

mybtn.addEventListener('click', e => {
    cardNum.innerHTML = GetNumber(RandomIndex(cardNumber), cardNumber);
    cardUp.innerHTML = GetType(RandomIndex(cardType), cardType);
    cardDown.innerHTML = cardUp.innerHTML;
    if (cardUp.innerHTML== '♥' || cardUp.innerHTML== '♦') {
       card.classList.replace('card-black','card-red');
   } else {
       card.classList.replace('card-red', 'card-black');
   }
})
}

