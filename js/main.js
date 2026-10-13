window.addEventListener("scroll", function () {
  let mainNav = document.getElementById("mainNav");
  if (window.scrollY >= 120) {
    mainNav.classList.add("navbar-scrolled");  
  } else {
    mainNav.classList.remove("navbar-scrolled"); 
  }
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  rtl: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 1.5 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  }
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.main-nav').classList.toggle('active');
});