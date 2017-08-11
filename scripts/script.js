$(function(){

    var carouselList = $('#js-myCarousel ul');
    setInterval(changeSlide, 3000);


  function changeSlide(){
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  }

  function moveFirstSlide(){
    var firstItem = $('#js-myCarousel').find('li:first');
    var lastItem = $('#js-myCarousel').find('li:last');

    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }
});