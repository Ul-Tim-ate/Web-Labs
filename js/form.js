let lesson = document.getElementsByClassName('create-form__lessons'); // макс-кол во уроков
let numberLesson = document.getElementsByClassName('create-form__number-lessons'); // кол-во уроков выбранных
let button = document.getElementsByClassName('create-form__button'); // кнопка отправки
let days = document.getElementsByClassName('create-form__days'); // кол-во дней в неделе
let table = document.getElementById('table'); //  сама таблица
let clear = document.getElementById('clear'); //  очистить
let template = document.getElementById('template__day');

function addListen() {
	let subjects = document.getElementsByClassName('subject');
	for (let index = 0; index < subjects.length; index++) {
		subjects[index].addEventListener('input', function () {
			localStorage.setItem('subject ' + index, subjects[index].value);
		})
	}
};
function createTemplate(lessonValue, daysValue) {
	for (let index = 0; index < daysValue; index++) {
		let clone = template.content.cloneNode(true);
		let inp = clone.getElementById("day__lesson");
		let header = clone.getElementById("day__header");
		header.textContent = (index+1) + ' Day'
		for (let numberOfLessons = 0; numberOfLessons < lessonValue; numberOfLessons++) {
			let field = document.createElement('input');
			field.classList.add('subject');
			inp.appendChild(field);
		}
		table.appendChild(clone);
	}
}

lesson[0].addEventListener('input', function () {
	numberLesson[0].textContent = lesson[0].value;
});

button[0].addEventListener('click', function () {
	if (days[0].value==-1) {
		alert('Вы не выбрали количество дней в неделе');
		return false;
	}
	table.innerHTML = "";
	lessonValue = lesson[0].value;
	daysValue = days[0].value;
	createTemplate(lessonValue, daysValue);
	localStorage.setItem('lessons', lessonValue);
	localStorage.setItem('days', daysValue);
	let subjects = document.getElementsByClassName('subject');
	for (let index = 0; index < subjects.length; index++) {
		localStorage.removeItem('subject ' + index);
	}
	addListen();
	}
);

window.addEventListener('load', function () {
	let lessonValue = +this.localStorage.getItem('lessons');
	let daysValue = +this.localStorage.getItem('days');
	createTemplate(lessonValue, daysValue);
	if (daysValue !== 0) {
		let first = document.getElementById('choose');
		let five = document.getElementById('five');
		let six = document.getElementById('six');
		first.removeAttribute('selected');
		if (daysValue === 5) {
			five.setAttribute('selected', 'selected');
		}
		if (daysValue === 6) {
			six.setAttribute('selected', 'selected');
		}
	}
	if (lessonValue !== 5) {
		lesson[0].value = lessonValue;
		numberLesson[0].textContent = lessonValue;
	}
	addListen();
	let subjects = document.getElementsByClassName('subject');
	for (let index = 0; index < subjects.length; index++) {
		subjects[index].value = localStorage.getItem('subject ' + index);
	}
});


clear.addEventListener('click', function () {
	table.innerHTML = "";
	localStorage.clear();
});
