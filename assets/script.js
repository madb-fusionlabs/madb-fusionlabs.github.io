// Landing Page MADB - FusionLabs | Uy Software Company

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

const navBar = document.querySelector('header')
const burger = document.getElementById('burger')
const menu = document.querySelector('header .menu')
const menuLink = document.querySelectorAll('header .menu a')

menuLink.forEach(item=> {
  item.addEventListener('click', function () {
    menu.classList.remove('active')
  })
})

burger.addEventListener('click', function () {
  menu.classList.toggle('active')

  if(menu.classList.contains('active')) {
    navBar.classList.add('active')
  } else {
    if(window.scrollY <= 20) {
      navBar.classList.remove('active')
    }
  }
})

document.addEventListener('click', function (e) {
  if(!e.target.matches('header, header *')) {
    menu.classList.remove('active')
    if(window.scrollY <= 20) {
      navBar.classList.remove('active')
    }
  }
})

if (document.getElementById('homepage')) {
  window.addEventListener('scroll', function () {
    if (this.scrollY > 20) {
      navBar.classList.add('default');
      navBar.classList.remove('active')
      menu.classList.remove('active')
    } else {
      if (!menu.classList.contains('active')) {
        navBar.classList.remove('default');
      }
    }
  });
}




