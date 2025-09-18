// Init AOS
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    once: true,
    duration: 1100,
  });
});

/** Sticky Header // START
 *************************/
const stickyHeader = document.getElementById('sticky-header');
function stickyHeaderHandler() {
  if (!stickyHeader) return;
  if (window.scrollY > 0) {
    stickyHeader.classList.add('sticky');
  } else {
    stickyHeader.classList.remove('sticky');
  }
}
document.addEventListener('scroll', stickyHeaderHandler);
document.addEventListener('DOMContentLoaded', stickyHeaderHandler);
/** Sticky Header // END
 *************************/

/**
 * Start Show/Hide Password
 */
let passwordToggle = document.querySelectorAll('.form__control-passord-icon');
passwordToggle.forEach((passwordToggleEl) => {
  passwordToggleEl?.addEventListener('click', (e) => {
    let formControlWrapper = e.target.parentNode.closest('.form__control-wrapper');
    let inputPassword = formControlWrapper.querySelector('.form__control');
    inputPassword.setAttribute('type', inputPassword.getAttribute('type') == 'text' ? 'password' : 'text');
    formControlWrapper.classList.toggle('form__control-wrapper--show-password');
  });
});

/* End Show/Hide Password */

/**
 * Start Dark & Light Mode Toggle
 */
let darkModeToggler = document.querySelector('.header__dark-mode__checkbox');
if (darkModeToggler) {
  darkModeToggler?.addEventListener('click', () => {
    darkModeToggler.checked
      ? document.body.classList?.remove('light-mode-active')
      : document.body.classList?.add('light-mode-active');
    document.cookie = 'lightMode=' + !darkModeToggler.checked + ';path=/';
  });
}

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
var CertificateHolder = document.getElementById('CertificateHolder');
if (CertificateHolder) {
  CertificateHolder.setAttribute('checked', 'checked');
  var searchIndex = document.getElementsByClassName('search-index')[0].value;
  if (document.getElementById('CertificateHolder').checked && searchIndex.length == 0) {
    document.getElementById('key_word_submitButton').setAttribute('disabled', true);
  } else {
    document.getElementById('key_word_submitButton').setAttribute('disabled', false);
  }
}

let lightMode = getCookie('lightMode') == 'true';
lightMode ? document.body?.classList?.add('light-mode-active') : document.body?.classList?.remove('light-mode-active');
if (darkModeToggler) {
  darkModeToggler.checked = !lightMode;
}
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
    document.body.style = 'overflow: hidden';
  });
});

headerMenuClose.forEach((el) => {
  el.addEventListener('click', () => {
    header.classList.remove('active');
    document.body.removeAttribute('style');
  });
});

/* End Mobile Header Menu (OPEN & CLOSE) */
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('aboutSelectedItem');
if (myParam && myParam.length > 0) {
  let selectButtonTab, selectTab;
  let allTabs = document.querySelectorAll('.nav-link');
  let allTabsContent = document.querySelectorAll('.tab-pane');
  if (allTabs) {
    allTabs.forEach((element) => {
      element.classList.remove('active');
    });
  }
  if (allTabsContent) {
    allTabsContent.forEach((element) => {
      element.classList.remove('active');
      element.classList.remove('show');
    });
  }

  switch (myParam) {
    case 'about':
      selectButtonTab = document.getElementById('aboutTab-tab');
      selectTab = document.getElementById('aboutTab');
      selectButtonTab.classList.add('active');
      selectTab.classList.add('active');
      selectTab.classList.add('show');
      break;
    case 'visionAndMission':
      selectButtonTab = document.getElementById('missionAndMissionTab-tab');
      selectTab = document.getElementById('missionAndMissionTab');
      selectButtonTab.classList.add('active');
      selectTab.classList.add('active');
      selectTab.classList.add('show');
      break;
  }
}
if (localStorage.getItem('cookie_model_set')) {
  let cookies_model = document.getElementById('cookies_model');
  if (cookies_model) {
    cookies_model.classList.remove('show');
  }
} else {
  let cookies_model = document.getElementById('cookies_model');
  if (cookies_model) {
    cookies_model.classList.add('show');
  }
}
// let loginButton = document.getElementById('login____button')
// let loginPup =  document.getElementById('login') ;
// if(loginButton && loginPup){
//     loginButton.onclick =  function () {

//     };
// }
let cookies_model_toggle_button = document.getElementById('cookies_model_toggle_button');
cookies_model_toggle_button?.addEventListener('click', function (e) {
  localStorage.setItem('cookie_model_set', 'setted');
  let cookies_model = document.getElementById('cookies_model');
  if (cookies_model) {
    cookies_model.classList.remove('show');
  }
});
/**
 * Start toggle Search dropdown
 */
let searchDropdownLink = document.querySelector('.search__dropdown-link'),
  searchDropdown = document.querySelector('.search__dropdown'),
  searchDropdownWrapper = document.querySelector('.search__wrapper');
searchDropdownLink?.addEventListener('click', function (e) {
  e.stopPropagation();
  if (this.parentElement) {
    this.parentElement.classList.toggle('active');
  }
});
document.addEventListener('click', function (e) {
  if (searchDropdownWrapper) {
    searchDropdownWrapper.classList.remove('active');
  }
});
searchDropdown?.addEventListener('click', function (e) {
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
  //siteLoader.classList.add('active');
  window.addEventListener('load', () => {
    siteLoader.classList.remove('active');
  });
}
/* End Site Loader */

/* Start hero Swiper */
let heroContentSlider, heroBgSlider;
function heroSliderInit() {
  if (heroContentSlider) heroContentSlider.destroy();
  if (heroBgSlider) heroBgSlider.destroy();

  heroContentSlider = new Swiper('.hero__swiper-1', {
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    parallax: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.mega-hero .swiper-next',
      prevEl: '.mega-hero .swiper-prev',
    },
  });
  heroBgSlider = new Swiper('.hero__swiper-2', {
    loop: true,
    slidesPerView: 1,
    effect: 'creative',
    autoplay: true,
    fadeEffect: { crossFade: true },
    parallax: true,
    mousewheel: false,
    autoplay: {
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: false,
    },
    navigation: {
      nextEl: '',
      prevEl: '',
    },
  });
  /* conected hero swiper */
  heroContentSlider.controller.control = heroBgSlider;
}
function bigImg(x) {
  x.classList.add('bigImg');
}

function normalImg(x) {
  x.classList.remove('bigImg');
}
/* End Hero Swiper */

/* Start Statistics Swiper */
let statisticsSlider;
function statisticsSliderInit() {
  if (statisticsSlider) statisticsSlider.destroy();
  statisticsSlider = new Swiper('.statistics__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.statistics__swiper-wrapper .swiper-next',
      prevEl: '.statistics__swiper-wrapper .swiper-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}
/* End Statistics Swiper */

/* Start About Slider */
let aboutSlider;
function aboutSliderInit() {
  if (aboutSlider) aboutSlider.destroy();
  let menu = [],
    aboutNames = document.querySelectorAll('.about__swiper-wrapper .about__item ');
  for (let i = 0; i < aboutNames.length; i++) {
    menu.push(aboutNames[i].dataset.name);
  }
  aboutSlider = new Swiper('.about__swiper', {
    speed: 1200,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    parallax: true,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.about__swiper-wrapper .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + '</span>';
      },
    },
  });
}
/* End About Slider */

/*start registration slider */
let registrationSlider;
function registrationSliderInit() {
  if (registrationSlider) registrationSlider.destroy();
  registrationSlider = new Swiper('.registration__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 50,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.registration__forms__swiper-wrapper .swiper-next',
      prevEl: '.registration__forms__swiper-wrapper .swiper-prev',
    },
    on: {
      slideNextTransitionStart: function () {
        document.querySelector('.registration__forms__swiper-wrapper').classList.add('slider-transition-next');
      },

      slideNextTransitionEnd: function () {
        document.querySelector('.registration__forms__swiper-wrapper').classList.remove('slider-transition-next');
      },

      slidePrevTransitionStart: function () {
        document.querySelector('.registration__forms__swiper-wrapper').classList.add('slider-transition-prev');
      },

      slidePrevTransitionEnd: function () {
        document.querySelector('.registration__forms__swiper-wrapper').classList.remove('slider-transition-prev');
      },
    },
  });
}

/**
 * Start Youtube Close Button
 */
var closeYoutubeModal = document.getElementById('btnClose');
var youtubeVideoPlayer = document.getElementById('youtubeVideo');
if (closeYoutubeModal && youtubeVideoPlayer) {
  closeYoutubeModal.onclick = function () {
    var url = youtubeVideoPlayer.getAttribute('src');
    youtubeVideoPlayer.setAttribute('src', '');
    youtubeVideoPlayer.setAttribute('src', url);
  };
}
/* End Youtube Close Button */

// Start MainMenu Dropdown Handler
const mainmenuDropDownHandler = () => {
  const menuItems = document.querySelectorAll('.dropdown-wrapper');
  menuItems.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();

      menuItems.forEach((elem, index) => {
        if (i === index) {
          elem.classList.toggle('active');
        } else {
          elem.classList.remove('active');
        }
      });
    });
  });
};

const clearMenuItemsActiveClass = () => {
  const menuItems = document.querySelectorAll('.dropdown-wrapper');
  menuItems?.forEach((item) => item?.classList?.remove('active'));
};

document.documentElement.addEventListener('click', clearMenuItemsActiveClass);
document.addEventListener('DOMContentLoaded', mainmenuDropDownHandler);
// End MainMenu Dropdown Handler

const modalVideosPlaybackHandler = () => {
  const modals = document.querySelectorAll('.modal');
  if (modals.length) {
    modals.forEach((modal) => {
      modal.addEventListener('hidden.bs.modal', function () {
        const videosElement = modal.getElementsByTagName('video');
        // Stop HTML video player
        if (videosElement && videosElement.length) {
          Array.from(videosElement).forEach((video) => {
            video.pause();
            video.currentTime = 0;
          });
        } else {
          // stop youtube iframe videos
          var memory = modal.innerHTML;
          modal.innerHTML = memory;
        }
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', modalVideosPlaybackHandler);

var searchIndex = document.getElementsByClassName('search-index');
if (searchIndex && searchIndex.length > 0) {
  searchIndex[0].addEventListener('input', () => {
    if (document.getElementsByClassName('search-index')[0].value.trim().length <= 0) {
      document.getElementById('key_word_submitButton').setAttribute('disabled', true);
    } else {
      document.getElementById('key_word_submitButton').removeAttribute('disabled');
    }
  });
}

// AF code

function stopPropagation(event) {
  event.stopPropagation();
}

// images-library page start

if (document.querySelector('.images-library')) {
  // images
  var carousel;

  function libraryPrepairImagesCarousel() {
    carousel = new bootstrap.Carousel(document.querySelector('.images-library__carousel'), {
      interval: false,
      keyboard: true,
      touch: true,
      wrap: false,
    });

    document.querySelector('.images-library .carousel-control-prev').onclick = () => {
      carousel.prev();
    };

    document.querySelector('.images-library .carousel-control-next').onclick = () => {
      carousel.next();
    };
  }

  let images;
  function libraryOpenImagesModal(imgIndex) {
    images = document.querySelectorAll('.images-library .carousel-item');

    images.forEach((img) => img.classList.remove('active'));
    // images[imgIndex - 1].classList.add("active");
    document.getElementById(imgIndex).classList.add('active');

    document.querySelector('.images-library__modal').style.display = 'block';
  }

  function libraryCloseImagesModal() {
    document.querySelector('.images-library__modal').style.display = 'none';
  }

  libraryPrepairImagesCarousel();
}

// images-library page end

// videoes library
if (document.querySelector('.videoes-library')) {
  function libraryOpenVideoModal() {
    document.querySelector('.videoes-library__video-modal').style.display = 'block';
  }

  function libraryCloseVideoModal() {
    document.querySelector('.videoes-library__normal_video video').pause();
    document.querySelector('.videoes-library__normal_video').style.display = 'none';
  }

  function libraryOpenYoutubeVideoModal() {
    document.querySelector('.videoes-library__youtube_video').style.display = 'block';
  }

  function libraryCloseYoutubeVideoModal() {
    let iframeSrc = document.querySelector('.videoes-library__youtube_video iframe').src;
    document.querySelector('.videoes-library__youtube_video iframe').src = '';
    setTimeout(() => {
      document.querySelector('.videoes-library__youtube_video iframe').src = iframeSrc;
    }, 100);
    document.querySelector('.videoes-library__youtube_video').style.display = 'none';
  }
}
