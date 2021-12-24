let response;
let content;
let page = 0;
let list = document.querySelector('.image-list')
let btn = document.getElementById('more');

async function getPhoto() {
	response = await fetch('https://jsonplaceholder.typicode.com/photos');
	content = await response.json();
	let slice = content.splice(page, page + 1);
	let key;
	page++;
	for (key in slice) {
		list.innerHTML += `
		 		<li class="image-list__item image-item">
						<h3 class="image-item__header">${slice[key].title}</h3>
						<img src="${slice[key].url}" class="image-item__img">
				</li>
				`
	}
	console.log(page);
}

getPhoto();



btn.addEventListener('click', () => {
		getPhoto();
})