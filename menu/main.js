const container = document.querySelector('.container');
const all = document.getElementById('all');
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const shakes = document.getElementById('shakes');
const dinner = document.getElementById('dinner');


let items = [
	{
		name: "Buttermilk Pancakes",
		category: "breakfast",
		description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
		price: "$15.99",
		image: "images/item-1.jpeg",
	},
	{
		name: "Diner Double",
		category: "lunch",
		description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
		price:  "$13.99",
		image: "images/item-2.jpeg",
	},
	{
		name: "Godzilla Milkshake",
		category: "shakes",
		description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
		price: "$6.99",
		image: "images/item-3.jpeg",
	},
	{
		name: "Country Delight",
		category: "breakfast",
		description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
		price: "$20.99",
		image: "images/item-4.jpeg",
	},
	{
		name: "Egg Attack",
		category: "lunch",
		description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
		price: "$22.99",
		image: "images/item-5.jpeg",
	},
	{
		name: "Oreo Dream",
		category: "shakes",
		description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
		price: "$18.99",
		image: "images/item-6.jpeg",
	},
	{
		name: "Bacon Overflow",
		category: "breakfast",
		description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ",
		price: "$8.99",
		image: "images/item-7.jpeg",
	},
	{
		name: "American Classic",
		category: "lunch",
		description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
		price: "$12.99",
		image: "images/item-8.jpeg",
	},
	{
		name: "quarantine buddy",
		category: "shakes",
		description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing",
		price: "$16.99",
		image: "images/item-9.jpeg",
	},
	{
		name: "Steak Dinner",
		category: "dinner",
		description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. ",
		price: "$39.99",
		image: "images/item-10.jpeg",
	}
];

all.addEventListener('click', function(){
	showItems("all");
});

breakfast.addEventListener('click', function(){
	showItems("breakfast");
});

lunch.addEventListener('click', function(){
	showItems("lunch");
});

shakes.addEventListener('click', function(){
	showItems("shakes");
});

dinner.addEventListener('click', function(){
	showItems("dinner");
});

function showItems(condition){
	removeItems();
	for( let i = 0; i < items.length; i++ ){
		if( (items[i].category === condition) || (condition === "all"))
		{
			const item = document.createElement('div');
			item.classList.add('item');
			container.appendChild(item);
			const imageContainer = document.createElement('div');
			imageContainer.classList.add('image-container');
			item.appendChild(imageContainer);
			const image = document.createElement('img');
			imageContainer.appendChild(image);
			const text = document.createElement('div');
			text.classList.add('text');
			item.appendChild(text);
			const itemTitle = document.createElement('div');
			itemTitle.classList.add('item-title');
			text.appendChild(itemTitle);
			const names = document.createElement('h2');
			itemTitle.appendChild(names);
			const price = document.createElement('span');
			itemTitle.appendChild(price);
			const description = document.createElement('p');
			text.appendChild(description);
			/*Applying data to elements*/
			image.src = items[i].image;
			names.textContent = items[i].name;
			price.textContent = items[i].price;
			description.textContent = items[i].description;
		}
	}
}

function removeItems(){
	let items = document.querySelectorAll('.item');
	items.forEach(function(i){
		i.remove();
	});
}

showItems("all");
