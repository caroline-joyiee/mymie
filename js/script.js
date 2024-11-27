var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Menu toggle script
const menuBar = document.querySelector('.menu-bar');
const navLinks = document.getElementById('nav-links');

menuBar.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
