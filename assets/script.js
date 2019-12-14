var images = ["assets/rock.png", "assets/paper.png", "assets/scissors.png"];
var nextBtn = document.querySelector(".next")
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
var yourImageBox = document.querySelector("#yourImageBox")
var compImageBox = document.querySelector("#compImageBox")

var p = "assets/papers.png"
var s = "assets/scissors.png"
var r = "assets/rock.png"

var winCount = 0
var tieCount = 0
var lossCount = 0

wins.textContent = `Wins:${winCount}`
losses.textContent = `Losses:${lossCount}`
ties.textContent = `Ties:${tieCount}`

img.src = images[0];

prevBtn.addEventListener("click", function (event) {
    event.preventDefault();
    imgIndex--
    if (imgIndex === -1) {
        imgIndex = images.length - 1;
    }
    img.src = images[imgIndex];
    // writing this as a template literal instead = carousel.style.backgroundImage = `url(${images[imgIndex]})`;
})

nextBtn.addEventListener("click", function (event) {
    event.preventDefault();
    imgIndex++
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    img.src = images[imgIndex];
    // writing this as a template literal instead = carousel.style.backgroundImage = `url(${images[imgIndex]})`;
})

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var userGuess = images[imgIndex]
    yourImage.src = userGuess
    yourImageBox.setAttribute("class", "imgDiv")
    compCounter.setAttribute("class", "show")
    compImageBox.setAttribute("class", "hidden")
    var secondsLeft = 3;
    compCounter.textContent = `...${secondsLeft}`;
    setTime();
    

    function setTime() {
        var waitFor = setInterval(function () {
            secondsLeft--;
            compCounter.textContent = `...${secondsLeft}`;

            if (secondsLeft === 0) {
                clearInterval(waitFor)
                compCounter.setAttribute("class", "hidden")
                secondsLeft = 4;
                showComp();

            }
        }, 1000);

        function showComp() {
            var compGuess = images[Math.floor(Math.random() * images.length)];
            compImageBox.setAttribute("class", "imgDiv")
            compImage.src = compGuess
            var showCompTime = 5;

            var waitAgain = setInterval(function () {
                showCompTime--;

                if (showCompTime === 0) {
                    clearInterval(waitAgain)
                    showCompTime = 5;
                    showResult();

                }
            }, 1000);

            // function showResult()
            // if (compGuess === userGuess) {
                
            // }
        }

    }
} )
