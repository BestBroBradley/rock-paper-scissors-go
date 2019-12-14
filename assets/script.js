var images = ["assets/rock.png", "assets/paper.png", "assets/scissors.png"];
var nextBtn =  document.querySelector(".next")
var prevBtn = document.querySelector(".prev")
var carousel = document.querySelector(".carouselbox")
var imgIndex = 0
var img = document.querySelector("#currentImg")

// How to use setAttribute instead: carousel.setAttribute("style", "background-image: url('https://via.placeholder.com/300x200.png?text=First')"
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