$(function () {

    var carouselList = $('#js-myCarousel ul');
    var interval = setInterval(changeSlideLeft, 1000);
    var i = 0;

//start karuzeli//

    function changeSlideLeft() {
        carouselList.animate({'margin-left': -400}, 500, moveFirstSlide);
        if (i === 3) {
            clearInterval(interval);
            interval = setInterval(changeSlideRight, 1000);
            return;
        }
        i++;
    }

    function moveFirstSlide() {
        var firstItem = $('#js-myCarousel').find('li:first');
        var lastItem = $('#js-myCarousel').find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }

//odwrócona kolejnośc przewijania//

    function moveLastSlide() {
        var firstItem = $('#js-myCarousel').find('li:first');
        var lastItem = $('#js-myCarousel').find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginLeft: -400});
    }

    function changeSlideRight() {
        moveLastSlide();
        carouselList.animate({'margin-left': 0}, 500);
        if (i === 0) {
            clearInterval(interval);
            interval = setInterval(changeSlideLeft, 1000);
            return;
        }
        i--;
    }

    function arrowClickRight() {
        moveLastSlide();
        carouselList.animate({'margin-left': 0}, 500);
        clearInterval(interval);
    }

    function arrowClickLeft() {
        carouselList.animate({'margin-left': -400}, 500, moveFirstSlide);
        clearInterval(interval);
    }

//strzałki przełaczające slajdy//

    var arrowLeft = $('.arrow-left');
    var arrowRight = $('.arrow-right');

    arrowLeft.on('click', arrowClickRight);
    arrowRight.on('click', arrowClickLeft);

    //Restart karuzeli po wciśnięciu strzałki//

    function restart() {
        interval = setInterval(changeSlideLeft, 1000);
    }

    var start = $('.start');
    start.on('click', restart);

});

