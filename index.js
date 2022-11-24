var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.getElementsByClassName('img1')[0].src = 'images/dice'+randomNumber1+'.png';
document.getElementsByClassName('img2')[0].src = 'images/dice'+randomNumber2+'.png';
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Pkayer2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
};
