let menuopenbtn = document.querySelector("#menu-open-button");
let menuclosebtn = document.querySelector("#menu-close-button");
let navlinks = document.querySelectorAll(".nav-menu .nav-link");

menuopenbtn.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
    }
);
menuclosebtn.addEventListener("click" ,()=> menuopenbtn.click());

navlinks.forEach(link => {
  link.addEventListener("click" ,() => menuopenbtn.click());
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }

  }
  
});