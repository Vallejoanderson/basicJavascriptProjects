const menu = document.querySelector('.menu');
const bar = document.querySelector('.bars');

menu.style.display = 'none';

bar.addEventListener('click', function(){
    if( menu.style.display === 'none' ){
        menu.style.display = 'block';
    }
    else{
        menu.style.display = 'none';
    }
});