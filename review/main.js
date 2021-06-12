const names = document.querySelector('.name');
const charge = document.querySelector('.charge');
const para = document.querySelector('p');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const luck = document.querySelector('.surprise');
const pic = document.querySelector('img');

let index = 0;
let reviews = [
    ["Susan Smith", "WEB DEVELOPER", "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry", "images/image1.jpg"],
    ["Anna Johnson", "WEB DESIGNER", "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.", "images/image2.jpg"],
    ["Peter Jones", "INTERN", "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.", "images/image3.jpg"],
    ["Bill Anderson", "THE BOSS", "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.", "images/image4.jpg"]
];

names.textContent = reviews[0][0];
charge.textContent = reviews[0][1];
para.textContent = reviews[0][2];
pic.src = reviews[0][3];


function getRandomIndex(){
    return ( Math.floor(Math.random()*4) );
};

luck.addEventListener('click', function(){
    randomIndex = getRandomIndex();
    names.textContent = reviews[randomIndex][0];
    charge.textContent = reviews[randomIndex][1];
    para.textContent = reviews[randomIndex][2];
    pic.src = reviews[randomIndex][3];
});

left.addEventListener('click', function(){
    if ( index === 0 ){
        index = 3;
    }
    else{
        index = index - 1;
    }
    names.textContent = reviews[index][0];
    charge.textContent = reviews[index][1];
    para.textContent = reviews[index][2];
    pic.src = reviews[index][3];
});

right.addEventListener('click', function(){
    if ( index === 3 ){
        index = 0;
    }
    else{
        index = index + 1;
        console.log(index);
    }
    names.textContent = reviews[index][0];
    charge.textContent = reviews[index][1];
    para.textContent = reviews[index][2];
    pic.src = reviews[index][3];
});