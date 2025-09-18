// let darkModeToggler = document.querySelector('.header__dark-mode__checkbox'),
//     header = document.querySelector('.header'),
//     headerMenuOpen = document.querySelectorAll('.js__header-menu-open'),
//     headerMenuClose = document.querySelectorAll('.js__header-menu-close'),

/**
 * Start Dark & Light Mode Toggle
 */
// darkModeToggler?.addEventListener('click', () => {
//     darkModeToggler.checked ? document.body.classList.remove('light-mode-active') : document.body.classList.add('light-mode-active');
//     document.cookie = "lightMode=" + !darkModeToggler.checked + ";path=/";
// });

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }
// let lightMode = getCookie("lightMode") == 'true';
// lightMode ? document.body.classList.add('light-mode-active') : document.body.classList.remove('light-mode-active');
// darkModeToggler.checked = !lightMode;
/* End Dark & Light Mode Toggle */

/**
 * Start Mobile Header Menu (OPEN & CLOSE)
 */
// headerMenuOpen.forEach(el => {
//     el.addEventListener('click', () => {
//         header.classList.add('active');
//     });
// });

// headerMenuClose.forEach(el => {
//     el.addEventListener('click', () => {
//         header.classList.remove('active');
//     });
// });
/* End Mobile Header Menu (OPEN & CLOSE) */

/**
 * Start Progress Circle
 */
function progress(m) {
  m.forEach((item) => {
    new ProgressBar.Circle(item, {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 500,
      color: '#4DBD95',
      trailColor: 'translate',
      trailWidth: 3,
      svgStyle: null,
    }).animate(item.dataset.progress);
  });
}
/* End Progress Circle */

/**
 * Start Dark & Light Mode Toggle
 */
let darkModeToggler = document.querySelector('.header__dark-mode__checkbox');
darkModeToggler?.addEventListener('click', () => {
  darkModeToggler.checked
    ? document.body.classList.remove('light-mode-active')
    : document.body.classList.add('light-mode-active');
  document.cookie = 'lightMode=' + !darkModeToggler.checked + ';path=/';
});

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
let lightMode = getCookie('lightMode') == 'true';
lightMode ? document.body.classList.add('light-mode-active') : document.body.classList.remove('light-mode-active');
darkModeToggler.checked = !lightMode;
/* End Dark & Light Mode Toggle */

/**
 * Start Mobile Header Menu (OPEN & CLOSE)
 */

let header = document.querySelector('.header'),
  headerMenuOpen = document.querySelectorAll('.js__header-menu-open'),
  headerMenuClose = document.querySelectorAll('.js__header-menu-close');
headerMenuOpen.forEach((el) => {
  el.addEventListener('click', () => {
    header.classList.add('active');
  });
});

headerMenuClose.forEach((el) => {
  el.addEventListener('click', () => {
    header.classList.remove('active');
  });
});
/* End Mobile Header Menu (OPEN & CLOSE) */

/**
 * Start toggle Search dropdown
 */
let searchDropdownLink = document.querySelector('.search__dropdown-link'),
  searchDropdown = document.querySelector('.search__dropdown'),
  searchDropdownWrapper = document.querySelector('.search__wrapper');
searchDropdownLink?.addEventListener('click', function (e) {
  e.stopPropagation();
  this.parentElement.classList.toggle('active');
});
document.addEventListener('click', function (e) {
  searchDropdownWrapper.classList.remove('active');
});
searchDropdown.addEventListener('click', function (e) {
  e.stopPropagation();
});
/* End toggle Search dropdown */

/**
 * Start Progress Circle
 */
progressCircle = document.querySelectorAll('.eligibility-questions__progress');
progressCircle.forEach((item) => {
  new ProgressBar.Circle(item, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#4DBD95',
    trailColor: 'translate',
    trailWidth: 3,
    svgStyle: null,
  }).animate(item.dataset.progress);
});

/* End Progress Circle */

/**
 * Start OTP Inputs
 */
let otpInput = document.querySelectorAll('.js__otp .otp__control');
for (var i = 0; i < otpInput.length; i++) {
  // Set Max Lenth for the input
  otpInput[i].setAttribute('maxlength', 1);
  // Select content of input on focus
  otpInput[i].addEventListener('focus', function () {
    this.select();
  });
  otpInput[i].addEventListener('keyup', function (e) {
    if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
      if (this.previousElementSibling) {
        this.previousElementSibling.focus();
        this.previousElementSibling.select();
      }
    } else if ((e.key != ' ' && e.key >= 0 && e.key <= 9) || e.key === 'ArrowRight') {
      if (this.nextElementSibling) {
        this.nextElementSibling.focus();
        this.nextElementSibling.select();
      } else {
        this.blur();
        // PUT Your Submit Form Function Here
      }
    }
  });
  otpInput[i].addEventListener('input', function (e) {
    if (isNaN(parseInt(this.value))) {
      this.value = '';
      this.classList.remove('has-value');
    } else {
      this.classList.add('has-value');
    }
  });
}
/* End OTP Inputs */

/**
 * Start Site Loader
 */
let siteLoader = document.querySelector('.site-loader');
if (siteLoader) {
  siteLoader.classList.add('active');
  window.addEventListener('load', () => {
    siteLoader.classList.remove('active');
  });
}
/* End Site Loader */
