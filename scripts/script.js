$(function () {

    var carouselList = $('#js-myCarousel ul');
    var interval = setInterval(changeSlideLeft, 1000);
    var i = 0;

//start karuzeli//

    function changeSlideLeft() {
        if (i === 4) {
            clearInterval(interval);
            interval = setInterval(changeSlideRight, 1000);
            return;
        }
        carouselList.animate({'margin-left': -400}, 500, moveFirstSlide);
        i++;
        setActiveSlide(i);
    }

    function moveFirstSlide(skipSlides) {
        var firstItem = $('#js-myCarousel').find('li').slice(0, skipSlides);
        // var firstItem = $('#js-myCarousel').find('li:first');
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
        if (i === 0) {
            clearInterval(interval);
            interval = setInterval(changeSlideLeft, 1000);
            return;
        }
        moveLastSlide();
        carouselList.animate({'margin-left': 0}, 500);
        i--;
        setActiveSlide(i);
    }

    function arrowClickRight() {
        moveLastSlide();
        carouselList.animate({'margin-left': 0}, 500);
        clearInterval(interval);
    }

    // function arrowClickLeft() {
    //     carouselList.animate({'margin-left': -400 * skipSlides}, 500, moveFirstSlide);
    //     clearInterval(interval);
    // }

    function arrowClickLeft(skipSlides) {
        carouselList.animate({'margin-left': -400 * skipSlides}, 500, function () {
            moveFirstSlide(skipSlides);
        });
          clearInterval(interval);
    }

//strzałki przełaczające slajdy//

    var arrowLeft = $('.arrow-left');
    var arrowRight = $('.arrow-right');

    arrowLeft.on('click', arrowClickRight);
    // arrowRight.on('click', arrowClickLeft);
    arrowRight.on('click', function () {
        skipSlides = 2;
        arrowClickLeft(skipSlides);
    });

    //Restart karuzeli po wciśnięciu strzałki//

    function restart() {
        interval = setInterval(changeSlideLeft, 1000);
    }

    var start = $('.start');
    start.on('click', restart);

    //kontrolki

    function setActiveSlide(j) {
        var $activeSlide = $('.indicators .item');
        $activeSlide.removeClass('active');
        $('.indicators .item').eq(j).addClass('active');
    }

});

