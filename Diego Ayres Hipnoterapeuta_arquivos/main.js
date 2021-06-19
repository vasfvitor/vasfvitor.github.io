/**
 * JavaScript Sample
 */
$(function () {
  if (window.ComponentsKlickpagesHeaderBinded) {
    return false;
  }
  console.log('olar')

  window.ComponentsKlickpagesHeaderBinded = true;

  $("body").on('click', ".navicon", function () {
    $(this).toggleClass("open");
    $(".header-social").toggleClass("open")
    $(".header-nav").toggleClass("open")
    $('.header-nav').slideToggle();
  });
});
