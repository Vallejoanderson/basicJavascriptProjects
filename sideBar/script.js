const bar = document.querySelector('.bar');
const leftside = document.querySelector('aside');
const close = document.getElementById('close');

/*add or remove showPanel class*/
bar.addEventListener('click', function(){
	leftside.classList.toggle('showPanel');
});

/*remove showPanela class*/
close.addEventListener('click', function(){
	leftside.classList.remove('showPanel');
});