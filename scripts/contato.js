// INICIANDO A ROLAGEM DE CARDS

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function width () {
  
  const tamanho = getEle
}

// INICIANDO A ROLAGEM DE CARDS - MOBILE

var swiper = new Swiper(".mySwiperMobile", {
  slidesPerView: 1,
  spaceBetween: 1,
  grabCursor: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function width () {

const tamanho = getEle
}