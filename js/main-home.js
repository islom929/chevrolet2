// BG IMG CONTENT CHANGING

let countBg = 0;

const MainBgBtns = document.querySelectorAll('.main-bg__btn')
const MainBgImgs = document.querySelectorAll('.main-bg__img')

bgImgs.forEach((img, ind) => {
  // if (btn.classList.contains('main-bg__btn--active')) {
  //   document.querySelector('.main-bg__img').src = bgImgs[btn.dataset.id].img
  // }
  MainBgImgs[ind].src = img.img
})

document.querySelector('.main-bg__left-btn').addEventListener('click', evt => {
  MainBgBtns.forEach(bt => bt.classList.remove('main-bg__btn--active'))

  countBg -= 1

  if (countBg < 0) {
    countBg = bgImgs.length - 1
  }

  MainBgBtns.forEach((b, ind) =>  {
    if (ind == countBg) {
      b.classList.add('main-bg__btn--active')
    }
  })

  if (countBg == 0) {
    MainBgImgs[0].style.left = '0'
    MainBgImgs[1].style.left = '100%'
    MainBgImgs[2].style.left = '200%'
    MainBgImgs[3].style.left = '300%'
  }
  if (countBg == 1) {
    MainBgImgs[0].style.left = '-100%'
    MainBgImgs[1].style.left = '0'
    MainBgImgs[2].style.left = '100%'
    MainBgImgs[3].style.left = '200%'
  }
  if (countBg == 2) {
    MainBgImgs[0].style.left = '-200%'
    MainBgImgs[1].style.left = '-100%'
    MainBgImgs[2].style.left = '0'
    MainBgImgs[3].style.left = '100%'
  }
  if (countBg == 3) {
    MainBgImgs[0].style.left = '-300%'
    MainBgImgs[1].style.left = '-200%'
    MainBgImgs[2].style.left = '-100%'
    MainBgImgs[3].style.left = '0'
  }
})

document.querySelector('.main-bg__right-btn').addEventListener('click', evt => {

  MainBgBtns.forEach(bt => bt.classList.remove('main-bg__btn--active'))

  countBg += 1

  if (countBg > bgImgs.length - 1) {
    countBg = 0
  }

  MainBgBtns.forEach((b, ind) =>  {
    if (ind == countBg) {
      b.classList.add('main-bg__btn--active')
    }
  })

  if (countBg == 0) {
    MainBgImgs[0].style.left = '0'
    MainBgImgs[1].style.left = '100%'
    MainBgImgs[2].style.left = '200%'
    MainBgImgs[3].style.left = '300%'
  }
  if (countBg == 1) {
    MainBgImgs[0].style.left = '-100%'
    MainBgImgs[1].style.left = '0'
    MainBgImgs[2].style.left = '100%'
    MainBgImgs[3].style.left = '200%'
  }
  if (countBg == 2) {
    MainBgImgs[0].style.left = '-200%'
    MainBgImgs[1].style.left = '-100%'
    MainBgImgs[2].style.left = '0'
    MainBgImgs[3].style.left = '100%'
  }
  if (countBg == 3) {
    MainBgImgs[0].style.left = '-300%'
    MainBgImgs[1].style.left = '-200%'
    MainBgImgs[2].style.left = '-100%'
    MainBgImgs[3].style.left = '0'
  }

})

// HOME ABOUT SLIDER

let countAbout = 0;
const aboutCarTop = document.querySelectorAll('.about-car__top')
const carsName = document.querySelectorAll('.about-car__car-name')

const HomeAboutBtns = document.querySelectorAll('.about-car__result-btn')

HomeAboutCar.forEach((car, ind) => {
  aboutCarTop[ind].innerHTML = `
  <div class="about-car__left">
    <p class="about-car__name">CHEVROLET<span class="about-car__car-name">${car.title}</span></p>

    <img class="about-car__img" src="${car.img}" alt="">
  </div>
  <div class="about-car__right">
    <h3 class="about-car__title">
      ПОИСТИНЕ, ВОСХИЩАЕТ САЛОН <span class="about-car__car-name">${car.title}</span>
    </h3>
    <p class="about-car__text">
      фирменный, удобный и мультифункциональный руль, ультрасовременная приборная панель с цветным табло бортового компьютера, изящные линии, интересная архитектура передней панели с эргономичной консолью по центру. Притягивает взгляды 8-дюймовый монитор мультимедийной системы Chevrolet infotainment 3, под которым расположен блок управления климат-контролем. Автомобиль не даст пропустить важный звонок, благодаря синхронизации со смартфонами на платформе Android, iOS.
    </p>
  </div>
  `
})

document.querySelector('.about-car__left-btn').addEventListener('click', evt => {
  HomeAboutBtns.forEach(bt => bt.classList.remove('about-car__result-btn--active'))

  countAbout -= 1

  if (countAbout < 0) {
    countAbout = HomeAboutCar.length - 1
  }

  HomeAboutBtns.forEach((b, ind) =>  {
    if (ind == countAbout) {
      b.classList.add('about-car__result-btn--active')
    }
  })

  if (countAbout == 0) {
    aboutCarTop[0].style.left = '0'
    aboutCarTop[1].style.left = '100%'
    aboutCarTop[2].style.left = '200%'
  }
  if (countAbout == 1) {
    aboutCarTop[0].style.left = '-100%'
    aboutCarTop[1].style.left = '0'
    aboutCarTop[2].style.left = '100%'
  }
  if (countAbout == 2) {
    aboutCarTop[0].style.left = '-200%'
    aboutCarTop[1].style.left = '-100%'
    aboutCarTop[2].style.left = '0'
  }
})

document.querySelector('.about-car__right-btn').addEventListener('click', evt => {

  HomeAboutBtns.forEach(bt => bt.classList.remove('about-car__result-btn--active'))

  countAbout += 1

  if (countAbout > HomeAboutCar.length - 1) {
    countAbout = 0
  }

  HomeAboutBtns.forEach((b, ind) =>  {
    if (ind == countAbout) {
      b.classList.add('about-car__result-btn--active')
    }
  })

  if (countAbout == 0) {
    aboutCarTop[0].style.left = '0'
    aboutCarTop[1].style.left = '100%'
    aboutCarTop[2].style.left = '200%'
  }
  if (countAbout == 1) {
    aboutCarTop[0].style.left = '-100%'
    aboutCarTop[1].style.left = '0'
    aboutCarTop[2].style.left = '100%'
  }
  if (countAbout == 2) {
    aboutCarTop[0].style.left = '-200%'
    aboutCarTop[1].style.left = '-100%'
    aboutCarTop[2].style.left = '0'
  }

})
