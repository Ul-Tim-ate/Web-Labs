 (function () {
window.startTime = (new Date).getTime();
window.addEventListener('load',function () {
    document.getElementById('load-time').innerHTML=((new Date).getTime() - window.startTime) + 'ms';
});
})();

window.addEventListener('load',function () {
	let a = document.querySelectorAll('.navigation__link');
	a.forEach(element => {
		if (element.href == window.location.href) {
			element.classList.add('active');
		}
	});
})


let swiper2 = new Swiper('.hotel-cards__swiper', {
  // Optional parameters
  loop: true,
	speed: 550,
	autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.room-swiper-button__next',
    prevEl: '.room-swiper-button__prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		621: {
			slidesPerView: 2,
			spaceBetween: 50
		},
		820: {
			slidesPerView: 2,
			spaceBetween: 100
		},
		970: {
			slidesPerView: 2,
			spaceBetween: 170
		},
		1140: {
			slidesPerView: 3,
			spaceBetween: 110
		},

	}
});