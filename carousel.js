car = document.getElementById('carousel');

bgcolor = "linear-gradient(0deg, rgba(17, 17, 17, .7) 0%, rgba(51, 51, 51, .5) 100%)";
list = ["img/carousel1.png", "img/carousel2.png", "img/carousel3.png", "img/carousel4.png"];

function carousel() {
    car.style.background = `${bgcolor}, url("${list[0]}")`;
    car.style.backgroundSize = 'cover';
    car.style.backgroundPosition = 'center center';}

var i = 0;

function changeCarousel(name) {
    if (name == 'left') {
        if (i == 0) {
            i = list.length - 1;
        } else {
            i--;
        }

        car.style.background = `${bgcolor}, url("${list[i]}")`;
        car.style.backgroundSize = 'cover';
        car.style.backgroundPosition = 'center center';

        clearInterval(timer);
        timer = setInterval(function () {
            changeCarousel('right');
        }, 5000);

    } else if (name == 'right') {
        if (i == list.length - 1) {
            i = 0;
        } else {
            i++;
        }

        car.style.background = `${bgcolor}, url("${list[i]}")`;
        car.style.backgroundSize = 'cover';
        car.style.backgroundPosition = 'center center';

        clearInterval(timer);
        timer = setInterval(function () {
            changeCarousel('right');
        }, 5000);

    }
}

setInterval(function () {
    changeCarousel('right');
}, 5000);
