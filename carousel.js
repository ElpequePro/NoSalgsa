car = document.getElementById('carousel');

bgcolor = "linear-gradient(0deg, rgba(17, 17, 17, .7) 0%, rgba(51, 51, 51, .5) 100%)";
url = ["img/carousel1.png", "img/carousel2.png", "img/carousel3.png"];

function carousel() {
    changeCarousel();
}

i = 0;

function changeCarousel() {
    // background: [background-color] [background-image] [background-repeat] [background-position] [background-size] [background-attachment] [background-clip] [background-origin] [background-composite];
    car.style.background = bgcolor + ", url('" + url[i] + "')";
    car.style.backgroundSize = "cover";
    car.style.backgroundPosition = "center center";


    i++;

    if (i >= url.length) {
        i = 0;
    }
}

setInterval(changeCarousel, 5000);
