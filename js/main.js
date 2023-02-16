// для стрелок в слайдере. Скрыла родные стрелки, создала кастомные
$(".slider__box").slick({
  arrows: false,
  slidesToShow: 4,
  infinite: true,
  draggable: true,
  waitForAnimate: false,
  dots: false,
  appendArrows: $(".slider__box"),
});

$(".heading__arrows-prev").on("click", function (e) {
  e.preventDefault();
  $(".slider__box").slick("slickPrev");
});
$(".heading__arrows-next").on("click", function (e) {
  e.preventDefault();
  $(".slider__box").slick("slickNext");
});
//для блока с миниатюрами картинок
function myFunction(smallImg) {
  var fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}
