$(document).ready(function () {
  $(".hamburger-btn").click(function () {
    $(this).toggleClass("change");
    $(".nav-links").toggleClass("active");
  });
});
