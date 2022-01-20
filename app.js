//variables
const cardNum = document.querySelector('#cardNum');
const heart = document.querySelector('.heart');
const cub = document.querySelector('.cub');
const spade = document.querySelector('.spade');
const diamond = document.querySelector('.diamond');
//dataset
const cardType = ['♦', '♥', '♠', '♣'];
const cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

/// ♦ ♥ ♠ ♣

//Generamos Index aleatorio cardNumber
const RandomIndex = (arr) => Math.floor(Math.random()*arr.length);
//Usamos el Index aleatorio para sacar un valor del array
const GetNumber = (i,arr) => arr[i];

//generamos Index aleatorio para cardType
const RandomIndexCT = (arr) => Math.floor(Math.random()*arr.length);
console.log(RandomIndexCT(cardType));
//Usamos el Index aleatorio para sacar un valor del array
const GetType = (i, arr) => arr[i];
console.log(GetType(RandomIndexCT(cardType), cardType))




window.onload = function() {
 cardNum.innerHTML = GetNumber(RandomIndex(cardNumber), cardNumber);
}
