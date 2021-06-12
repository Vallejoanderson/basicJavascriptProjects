const incr = document.querySelector('.increase');
const rst = document.querySelector('.reset');
const decrs = document.querySelector('.decrease');
const para = document.querySelector('p');

let index = 0;

incr.addEventListener('click', function(){
    index = index + 1;
    para.textContent = 'Counter: ' + index;
} );

rst.addEventListener('click', function(){
    index = 0;
    para.textContent = 'Counter: ' + index;
} );

decrs.addEventListener('click', function(){
    index = index - 1;
    para.textContent = 'Counter: ' + index;
} );