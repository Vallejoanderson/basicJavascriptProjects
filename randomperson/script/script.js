const myname = document.querySelector('.myname'); 
const locations = document.querySelector('.locations');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const image = document.getElementById('image');
const btn = document.getElementById('button');

callAPI();

btn.addEventListener('click', () => {
	callAPI();
});

function callAPI()
{
	let requestURL = 'https://randomuser.me/api';
	let xhr = new XMLHttpRequest();
	xhr.open('GET', requestURL);
	xhr.responseType = 'json';
	xhr.onload = () => {
		const myobj = xhr.response;
		console.log(myobj);
		showData(myobj);
	}
	xhr.send();
}

function showData(obj) {
	myname.textContent = obj.results[0].name.first + " " + obj.results[0].name.last;
	locations.textContent = obj.results[0].location.state + ", " + obj.results[0].location.country;
	phone.textContent = "Phone: " + obj.results[0].cell;
	email.textContent = obj.results[0].email;
	image.src = obj.results[0].picture.large;
}
