const btn = document.querySelector('button');
const layer = document.getElementById('top');
const modal = document.getElementById('modal-content');
const close = document.getElementById('close');

/*to show modal content*/
btn.addEventListener('click', function(){
    layer.classList.add('show-top-layer');
    modal.classList.add('modal-class');
});

/*hidde modal content*/
close.addEventListener('click', function(){
    layer.classList.remove('show-top-layer');
    modal.classList.remove('modal-class');
    modal.classList.add('hidden');
});