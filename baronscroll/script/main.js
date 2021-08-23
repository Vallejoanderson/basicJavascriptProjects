const year = document.querySelector('.year');
const barmenu = document.querySelector('.barmenu');
const topics = document.querySelector('.topics');
const topicsnames = document.querySelectorAll('.topics__name');
const tours = document.getElementById('tours');

topicsnames.forEach( (topicsname) => { /* Scroll smooth to an element */
	topicsname.addEventListener('click', () => {
		const gotoSection = document.getElementById(topicsname.textContent);
		gotoSection.scrollIntoView({
			behavior: 'smooth'
		});
	});
});

barmenu.addEventListener('click', () => { /* Hide or unhide bar menu in phone devices */
	if( topics.classList.contains('topics-height--zero') ){
		topicsnames.forEach( (topicsname) => {
			topicsname.classList.remove('topics__name-color--transparent');
		})		
		topics.classList.remove('topics-height--zero');
	}
	else{
		topicsnames.forEach( (topicsname) => {
			topicsname.classList.add('topics__name-color--transparent');
		})	
		topics.classList.add('topics-height--zero');
	}
});

let date = new Date(); /* Get the year */
year.textContent = date.getFullYear();