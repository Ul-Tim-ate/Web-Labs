 (function () {
window.startTime = (new Date).getTime();
window.addEventListener('load',function () {
    document.getElementById('load-time').innerHTML=((new Date).getTime() - window.startTime) + 'ms';
});
})();

console.log(document.location.pathname);
window.addEventListener('load',function () {
	let a = document.querySelectorAll('.navigation__item');
	switch (document.location.pathname) {
		case "/projects.html":
			a[1].classList.add('active');
			break;
		case "/index.html":
			a[0].classList.add('active');
			break;
		case "/skillls.html":
			a[2].classList.add('active');
			break;
		case "/contact.html":
			a[3].classList.add('active');
			break;
		default:
			break;
	}
})
