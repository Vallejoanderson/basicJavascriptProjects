const btn = document.querySelector('.flipswitch-cb');
const video = document.querySelector('.video');

btn.addEventListener('change', function(){
	console.log(btn.checked)
	if( video.paused )
		video.play();
	else
		video.pause();
});