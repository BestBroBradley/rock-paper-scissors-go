var images = ["assets/rock.png", "assets/paper.png", "assets/scissors.png"];
var nextBtn =  document.querySelector(".next")
var prevBtn = document.querySelector(".prev")
var carousel = document.querySelector(".carouselbox")
var imgIndex = 0
var img = document.querySelector("#currentImg")
var submitBtn = document.querySelector("#submitBtn")
var wins = document.querySelector("#wins")
var ties = document.querySelector("#ties")
var losses = document.querySelector("#losses")
var yourImage = document.querySelector("#yourImage")
var compImage = document.querySelector("#compImage")
var compCounter = document.querySelector("#compCounter")

var winCount = 0
var tieCount = 0
var lossCount = 0

wins.textContent = `Wins:${winCount}`
losses.textContent = `Losses:${lossCount}`
ties.textContent = `Ties:${tieCount}`

img.src = images[0];

prevBtn.addEventListener("click", function(event) {
    event.preventDefault();
    imgIndex--
    if (imgIndex === -1) {
        imgIndex = images.length - 1;
    }
    img.src = images[imgIndex];
    // writing this as a template literal instead = carousel.style.backgroundImage = `url(${images[imgIndex]})`;
} )

nextBtn.addEventListener("click", function(event) {
    event.preventDefault();
    imgIndex++
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    img.src = images[imgIndex];
    // writing this as a template literal instead = carousel.style.backgroundImage = `url(${images[imgIndex]})`;
} )

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var userGuess = images[imgIndex]
    console.log(userGuess)
    yourImage.src = userGuess
    compCounter.setAttribute ("class", "show")
    console.log(compCounter)

})