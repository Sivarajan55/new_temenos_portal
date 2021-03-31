
// Owl Carousel animation script
jQuery(document).ready(function($) {
    $('.main_banner').owlCarousel({
    animateOut: 'fadeInRightBig',
    animateIn: 'fadeInRightBig',
    slideTransition: 'Linear',
    items:1,
    margin: 0,
    stagePadding:0,
    smartSpeed:2000,
    });
});

//const themeSwitch = document.querySelector('input');

//themeSwitch.addEventListener('change', () => {
  //document.body.classList.toggle('dark-theme');
//});

const themeSwitch = document.querySelector('.switch-mode');
const textSwitch = document.getElementById("switch-mode").querySelector(".material-icons-outlined");

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (textSwitch.innerHTML === "dark_mode") {
    textSwitch.innerHTML = "light_mode";
  } else {
    textSwitch.innerHTML = "dark_mode";
  }

});


// search animation into full page
;(function(window) {

	'use strict';

	var openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		inputSearch = searchContainer.querySelector('.search__input');

	function init() {
		initEvents();	
	}

	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

	function openSearch() {
		searchContainer.classList.add('search--open');
		inputSearch.focus();
	}

	function closeSearch() {
		searchContainer.classList.remove('search--open');
		inputSearch.blur();
		inputSearch.value = '';
	}

	init();

})(window);




const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  parallax: true,
  slidesPerView: 'auto',
  initialSlide: 3,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 100,
  },
});


// Bookmark with local storage

// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  document.getElementById(favorite).className = 'fav';
});
// register click event listener
document.querySelector('.list').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.className += ' fav';
  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.className = 'col-md-4 mb-sm-3 dots';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage