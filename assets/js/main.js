$(document).ready(function () {
  $(".hamburger-btn").click(function () {
    $(this).toggleClass("change");
    $(".nav-links").toggleClass("active");
  });
});

function scrollToSection(sectionId) {
  $("html, body").animate(
    { scrollTop: $(`#${sectionId}`).offset().top - 95 },
    1000
  );
  $(".nav-links").removeClass("active");
}
