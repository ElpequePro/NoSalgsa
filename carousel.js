car = document.getElementById('carousel');

color = "linear-gradient(0deg, rgba(17, 17, 17, .7) 0%, rgba(51, 51, 51, .5) 100%)";
url = ["img/carousel1.png", "img/carousel2.png", "img/carousel3.png"];

function carousel() {
    car.style.background = color + ", url('" + url[1] + "');";
}