$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  $(".hamburger-btn").click(function () {
    $(this).toggleClass("change");
    $(".nav-links").toggleClass("active");
  });

  $(".fade-up").each(function () {
    $(this).css({
      opacity: 0,
      transform: "translateY(50px)",
    });

    ScrollTrigger.create({
      trigger: this,
      start: "top bottom",
      onEnter: () => {
        gsap.to(this, {
          y: 0,
          opacity: 1,
          duration: 2,
        });
      },
      once: true,
    });
  });

  $(".checkmark").click(function () {
    $(".checkbox").prop("checked", function (i, val) {
      return !val;
    });
  });
});

function scrollToSection(sectionId) {
  $("html, body").animate(
    { scrollTop: $(`#${sectionId}`).offset().top - 95 },
    1000
  );
  $(".nav-links").removeClass("active");
}
