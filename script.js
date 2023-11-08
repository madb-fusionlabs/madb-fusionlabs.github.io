// MADB website | FusionLabs - JS

// Language Selector

var language = document.getElementById('language');
var languageElements = document.querySelectorAll('.sp, .en, .pt');

language.addEventListener('change', function() {
  var selectedValue = language.value;
  
  languageElements.forEach(function(element) {
    if (element.classList.contains(selectedValue)) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
});

// Navigation Bar:

const navbar = document.querySelector('nav')
const toggleNavbar = document.querySelector('nav .toggle-navbar')
const navMenu = document.querySelector('nav .nav__menu')
const navMenuLink = document.querySelectorAll('nav .nav__menu li a')

navMenuLink.forEach(item=> {
  item.addEventListener('click', function () {
    navMenu.classList.remove('active')
  })
})

toggleNavbar.addEventListener('click', function () {
  navMenu.classList.toggle('active')

  if(navMenu.classList.contains('active')) {
    navbar.classList.add('active')
  } else {
    if(window.scrollY <= 20) {
      navbar.classList.remove('active')
    }
  }
})

document.addEventListener('click', function (e) {
  if(!e.target.matches('nav, nav *')) {
    navMenu.classList.remove('active')
    if(window.scrollY <= 20) {
      navbar.classList.remove('active')
    }
  }
})

if (document.getElementById('index-page')) {
  window.addEventListener('scroll', function () {
    if(this.scrollY > 20) {
      navbar.classList.add('default')
    } else {
      if(!navMenu.classList.contains('default')) {
        navbar.classList.remove('default')
      }
    }
  })
}


