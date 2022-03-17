const btnNavBurger = document.querySelector('.nav__btn-burger')
const btnNavModel = document.querySelector('#nav-model')
const btnNavCustomer = document.querySelector('#nav-customer')
const btnNavOwner = document.querySelector('#nav-owner')
const btnNavChevrolet = document.querySelector('#nav-chevrolet-uz')
const navBtnForm = document.querySelector('#nav-form')
const navBtns = document.querySelectorAll('.nav__dropdown-btn')
const navModelBtns = document.querySelectorAll('.model-modal__btn')

const modelSliderList = document.querySelector('.model-slider__list')

let modalModelCount = 0

btnNavModel.addEventListener('click', evt => {

  if(!document.querySelector('.form-modal').classList.contains('d-none')) {
    document.querySelector('.form-modal').classList.add('d-none')
  }

  modalCustomerCount = 0
  modalOwnerCount = 0
  modalChevroletCount = 0
  modalFormCount = 0

  dropdownActiveClass(btnNavModel)
  document.querySelector('.header').classList.add('header-mobile--active')
  document.querySelector('.form-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.remove('d-none')
  document.querySelector('.customer-modal').classList.add('d-none')
  document.querySelector('.owner-modal').classList.add('d-none')
  document.querySelector('.chevrolet-modal').classList.add('d-none')
  document.querySelector('.header-more__box').classList.remove('d-none')

  document.querySelector('.model-modal').classList.toggle('d-none')

  modalModelCount += 1

  if (modalModelCount > 1) {
    document.querySelector('.header-modal').classList.add('d-none')
    btnNavModel.classList.remove('nav__dropdown-btn--active')
    modalModelCount = 0
  }

  carsObj.forEach(car => {
    const li = document.createElement('li')
    li.className = 'model-slider__item d-none'
    li.innerHTML = `
        <div class="model-slider__box">
          <img class="model-slider__img" src="${car.img}" alt="img of ${car.nameCar.toLowerCase()}">
          <div class="model-slider__more-box">
          <div class="model-slider__text-box">
          <h3 class="model-slider__title" >Chevrolet ${car.nameCar}</h3>
          <p class="model-slider__price">От <span>${car.price}</span> сум</p>
          </div>
            <a class="model-slider__link"></a>
          </div>
      </div>
    `
    modelSliderList.append(li)
    })

  const sliderItems = document.querySelectorAll('.model-slider__item')

  let contFrom = 0
  let countTo = 5;

  for (let i = contFrom;i < countTo;i++) {
    sliderItems[i].classList.remove('d-none')
  }

navModelBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (e.target == navModelBtns[0]) {
      navModelBtns.forEach(b => {
        b.classList.remove('model-modal__btn--active')
      })
      navModelBtns[0].classList.add('model-modal__btn--active')

    for (let i = contFrom;i < countTo;i++) {
      sliderItems[i].classList.add('d-none')
    }

      contFrom = 0;
      countTo = 8;

      for (let i = contFrom;i < countTo;i++) {
        sliderItems[i].classList.remove('d-none')
      }
    }
    if (e.target == navModelBtns[1]) {
      navModelBtns.forEach(b => {
        b.classList.remove('model-modal__btn--active')
      })
      navModelBtns[1].classList.add('model-modal__btn--active')

      for (let i = contFrom;i < countTo;i++) {
        sliderItems[i].classList.add('d-none')
      }

        contFrom = 0
        countTo = 5;

        for (let i = contFrom;i < countTo;i++) {
          sliderItems[i].classList.remove('d-none')
        }
      }
      if (e.target == navModelBtns[2]) {
        navModelBtns.forEach(b => {
          b.classList.remove('model-modal__btn--active')
        })
        navModelBtns[2].classList.add('model-modal__btn--active')


        for (let i = contFrom;i < countTo;i++) {
          sliderItems[i].classList.add('d-none')
        }

          contFrom = 3
          countTo = 6;

          for (let i = contFrom;i < countTo;i++) {
            sliderItems[i].classList.remove('d-none')
        }
      }
      if (e.target == navModelBtns[3]) {
        navModelBtns.forEach(b => {
          b.classList.remove('model-modal__btn--active')
        })
        navModelBtns[3].classList.add('model-modal__btn--active')


        for (let i = contFrom;i < countTo;i++) {
          sliderItems[i].classList.add('d-none')
        }

          contFrom = 4
          countTo = 7;

          for (let i = contFrom;i < countTo;i++) {
            sliderItems[i].classList.remove('d-none')
        }
      }
    })
  })
})

let modalCustomerCount = 0

btnNavCustomer.addEventListener('click', evt => {

  if(!document.querySelector('.form-modal').classList.contains('d-none')) {
    document.querySelector('.form-modal').classList.add('d-none')
  }

  modalModelCount = 0
  modalOwnerCount = 0
  modalChevroletCount = 0
  modalFormCount = 0

  dropdownActiveClass(btnNavCustomer)
  document.querySelector('.header').classList.add('header-mobile--active')
  document.querySelector('.form-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.remove('d-none')
  document.querySelector('.model-modal').classList.add('d-none')
  document.querySelector('.owner-modal').classList.add('d-none')
  document.querySelector('.chevrolet-modal').classList.add('d-none')
  document.querySelector('.header-more__box').classList.add('d-none')

  document.querySelector('.customer-modal').classList.toggle('d-none')

  modalCustomerCount += 1

  if (modalCustomerCount > 1) {
    document.querySelector('.header-modal').classList.add('d-none')
    btnNavCustomer.classList.remove('nav__dropdown-btn--active')
    modalCustomerCount = 0
  }
})

let modalOwnerCount = 0

btnNavOwner.addEventListener('click', evt => {

  if(!document.querySelector('.form-modal').classList.contains('d-none')) {
    document.querySelector('.form-modal').classList.add('d-none')
  }

  modalModelCount = 0
  modalCustomerCount = 0
  modalChevroletCount = 0
  modalFormCount = 0

  dropdownActiveClass(btnNavOwner)
  document.querySelector('.header').classList.add('header-mobile--active')
  document.querySelector('.form-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.remove('d-none')
  document.querySelector('.model-modal').classList.add('d-none')
  document.querySelector('.customer-modal').classList.add('d-none')
  document.querySelector('.chevrolet-modal').classList.add('d-none')
  document.querySelector('.header-more__box').classList.add('d-none')

  document.querySelector('.owner-modal').classList.toggle('d-none')

  modalOwnerCount += 1

  if (modalOwnerCount > 1) {
    document.querySelector('.header-modal').classList.add('d-none')
    btnNavOwner.classList.remove('nav__dropdown-btn--active')
    modalOwnerCount = 0
  }
})

let modalChevroletCount = 0

btnNavChevrolet.addEventListener('click', evt => {

  if(!document.querySelector('.form-modal').classList.contains('d-none')) {
    document.querySelector('.form-modal').classList.add('d-none')
  }

  modalOwnerCount = 0
  modalModelCount = 0
  modalCustomerCount = 0
  modalFormCount = 0

  dropdownActiveClass(btnNavChevrolet)
  document.querySelector('.header').classList.add('header-mobile--active')
  document.querySelector('.header-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.remove('d-none')
  document.querySelector('.model-modal').classList.add('d-none')
  document.querySelector('.customer-modal').classList.add('d-none')
  document.querySelector('.owner-modal').classList.add('d-none')
  document.querySelector('.header-more__box').classList.add('d-none')
  document.querySelector('.form-modal').classList.add('d-none')

  document.querySelector('.chevrolet-modal').classList.toggle('d-none')

  modalChevroletCount += 1

  if (modalChevroletCount > 1) {
    document.querySelector('.header-modal').classList.add('d-none')
    btnNavChevrolet.classList.remove('nav__dropdown-btn--active')
    modalChevroletCount = 0
  }
})

let modalFormCount = 0

navBtnForm.addEventListener('click', evt => {

  if(!document.querySelector('.form-modal').classList.contains('d-none')) {
    document.querySelector('.form-modal').classList.add('d-none')
  }

  modalModelCount = 0
  modalCustomerCount = 0
  modalChevroletCount = 0

  dropdownActiveClass(navBtnForm)
  document.querySelector('.header-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.remove('d-none')
  document.querySelector('.model-modal').classList.add('d-none')
  document.querySelector('.customer-modal').classList.add('d-none')
  document.querySelector('.chevrolet-modal').classList.add('d-none')
  document.querySelector('.header-more__box').classList.add('d-none')
  document.querySelector('.owner-modal').classList.add('d-none')

  document.querySelector('.form-modal').classList.toggle('d-none')

  modalFormCount += 1

  if (modalFormCount > 1) {
    document.querySelector('.header-modal').classList.add('d-none')
    navBtnForm.classList.remove('nav__dropdown-btn--active')
    modalFormCount = 0
  }
})

function dropdownActiveClass(className) {
  btnNavModel.classList.remove('nav__dropdown-btn--active')
  btnNavCustomer.classList.remove('nav__dropdown-btn--active')
  btnNavOwner.classList.remove('nav__dropdown-btn--active')
  btnNavChevrolet.classList.remove('nav__dropdown-btn--active')
  navBtnForm.classList.remove('nav__dropdown-btn--active')

  className.classList.add('nav__dropdown-btn--active')
}

btnNavBurger.addEventListener('click', evt => {

  document.querySelector('.header-modal').classList.toggle('d-none')
  document.querySelector('.header').classList.toggle('header-mobile')

  if (document.querySelector('.header-mobile')) {

    if(document.querySelector('.form-modal').classList.contains('d-none')) {
      document.querySelector('.form-modal').classList.remove('d-none')
    }
  }

  document.querySelectorAll('.back').forEach(btn => {
    btn.addEventListener('click', e => {
      document.querySelector('.header').classList.remove('header-mobile--active')
      document.querySelector('.model-modal').classList.add('d-none')
      document.querySelector('.customer-modal').classList.add('d-none')
      document.querySelector('.owner-modal').classList.add('d-none')
      document.querySelector('.chevrolet-modal').classList.add('d-none')
      document.querySelector('.header-more__box').classList.add('d-none')
      document.querySelector('.form-modal').classList.remove('d-none')


      btnNavModel.classList.remove('nav__dropdown-btn--active')
      btnNavCustomer.classList.remove('nav__dropdown-btn--active')
      btnNavOwner.classList.remove('nav__dropdown-btn--active')
      btnNavChevrolet.classList.remove('nav__dropdown-btn--active')
    })
  })
})

document.querySelector('.language-modal__btn--checked').addEventListener('click', evt => {
  document.querySelector('.language-modal').classList.toggle('language-modal--active')
})