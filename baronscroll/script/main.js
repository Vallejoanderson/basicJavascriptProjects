const year = document.querySelector('.year');
const barmenu = document.querySelector('.barmenu');
const topics = document.querySelector('.topics');
const topicsnames = document.querySelectorAll('.topics__name');

window.addEventListener('scroll', () => {
	console.log(barmenu.getBoundingClientRect().top);
});

barmenu.addEventListener('click', () => {
	if( topics.classList.contains('topics-height--zero') ){
		topicsnames.forEach( (topicsname) => {
			topicsname.classList.remove('topics__name-color--transparent');
		})		
		topics.classList.remove('topics-height--zero');
		
		window.scrollTo({
			top: barmenu.getBoundingClientRect().top = 930,
			left: 0,
			behavior: 'smooth'
		});

	}
	else{
		topicsnames.forEach( (topicsname) => {
			topicsname.classList.add('topics__name-color--transparent');
		})	
		topics.classList.add('topics-height--zero');
	}
});

let date = new Date();
year.textContent = date.getFullYear();