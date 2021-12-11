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
