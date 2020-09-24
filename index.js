var randomValue1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomValue1 + ".png";
//var randomImgSrc = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);

var randomValue2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomValue2 + ".png";
//var randomImgSrc2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if (randomValue1 > randomValue2) {
  document.querySelector("h1").innerHTML = "Ruhan Win";
} else if (randomValue1 < randomValue2) {
  document.querySelector("h1").innerHTML = "Rivaan Win";
} else {
  document.querySelector("h1").innerHTML = "Draw.Try again!!";
}
