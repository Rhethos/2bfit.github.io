// Header
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// Sliders
var swiper = new Swiper(".bigbanner-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  }
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// BMI calculator
window.addEventListener('DOMContentLoaded', () => {
  const calculateForm = document.getElementById('calculate-form');
  const calculateCm = document.getElementById('calculate-cm');
  const calculateKg = document.getElementById('calculate-kg');
  const calculateMessage = document.getElementById('calculate-message');

  const calculateBmi = (e) => {
    e.preventDefault();

    // check if the fields are filled
    if (calculateCm.value === '' || calculateKg.value === '') {
      // show error with colors
      calculateMessage.classList.remove('color-green');
      calculateMessage.classList.add('color-red');

      // show message
      calculateMessage.textContent = 'Please fill in all fields';

      // remove message after 3 seconds
      setTimeout(() => {
        calculateMessage.textContent = '';
      }, 3000);
    } else {
      // BMI formula
      const cm = calculateCm.value / 100;
      const kg = calculateKg.value;
      const bmi = Math.round(kg / (cm * cm));

      // How healthy are you?
      if (bmi < 18.5) {
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');
        calculateMessage.textContent = `Your BMI is ${bmi}, you are underweight`;
      } else if (bmi < 25) {
        calculateMessage.classList.remove('color-red');
        calculateMessage.classList.add('color-green');
        calculateMessage.textContent = `Your BMI is ${bmi}, you are healthy`;
      } else {
        calculateMessage.classList.remove('color-red');
        calculateMessage.classList.add('color-orange');
        calculateMessage.textContent = `Your BMI is ${bmi}, you are overweight`;
      }

      // clear input field
      calculateCm.value = '';
      calculateKg.value = '';

      // remove message after 4 seconds
      setTimeout(() => {
        calculateMessage.textContent = '';
      }, 4000);
    }
  };

  calculateForm.addEventListener('submit', calculateBmi);
});