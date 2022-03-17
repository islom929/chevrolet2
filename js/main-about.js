const AboutBtns = document.querySelectorAll('.about__color-btn')
const AboutImg = document.querySelector('.about__color-img')
const AboutColorName = document.querySelector('.about__color-name')
 
AboutBtns.forEach(btn => {
  btn.addEventListener('click', evt => {
    if (btn.classList.contains('about__color-btn--white')) {
      AboutImg.src = '../img/img-tracker-white.png'
      AboutColorName.textContent = 'White'
    }
    if (btn.classList.contains('about__color-btn--black')) {
      AboutImg.src = '../img/img-tracker-black.png'
      AboutColorName.textContent = 'Black'
    }
    if (btn.classList.contains('about__color-btn--red')) {
      AboutImg.src = '../img/img-tracker-red.png'
      AboutColorName.textContent = 'Red'
    }
    if (btn.classList.contains('about__color-btn--blue')) {
      AboutImg.src = '../img/img-tracker-blue.png'
      AboutColorName.textContent = 'Blue'
    }
  })
})