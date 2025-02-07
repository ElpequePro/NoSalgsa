car = document.getElementById('carousel');

bgcolor = "linear-gradient(0deg, rgba(17, 17, 17, .7) 0%, rgba(51, 51, 51, .5) 100%)";
url = ["img/carousel1.png", "img/carousel2.png", "img/carousel3.png"];

function carousel() {
    // background: [background-color] [background-image] [background-repeat] [background-position] [background-size] [background-attachment] [background-clip] [background-origin] [background-composite];
    car.style.backgroundSize = "cover";
    car.style.backgroundPosition = "center center";

    changeCarousel();
}

function changeCarousel() {
    setInterval(function () {
        i = 0;
        while(i != 3) {
        car.style.background = bgcolor + ", url('" + url[i] + "')";
        i++;
        if (i == 2) {
            i = 0;
        }
    }
}, 1000);
}
