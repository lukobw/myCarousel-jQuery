$(function () {

    var carouselList = $('#js-myCarousel ul');
    var interval = setInterval(changeSlideLeft, 1000);

//start karuzeli//

    function changeSlideLeft() {
        carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
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
        carouselList.animate({'marginLeft': 0}, 500);
    }
//strzałki przełaczające slajdy//

    var arrowLeft = $('.arrow-left');
    var arrowRight = $('.arrow-right');

    arrowLeft.on('click', changeSlideRight);
    arrowRight.on('click', changeSlideLeft);
});

