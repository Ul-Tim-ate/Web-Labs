 (function () {
window.startTime = (new Date).getTime();
window.addEventListener('load',function () {
    document.getElementById('load-time').innerHTML=((new Date).getTime() - window.startTime) + 'ms';
});
})();


// switch (document.location.pathname) {
// 	case "/index.html":
// 		document.querySelectorAll('.navigation__item').classList.add('.active');
// 		break;

// 	default:
// 		break;
// }