const btn = document.querySelector('.button');
const greeting = document.querySelector('.greeting');

btn.addEventListener('click', () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    if( hora > 18 && hora < 24){
        greeting.textContent = "Buenas noches";
    }
    else if( hora > -1 && hora < 12 ){
        greeting.textContent = "Buenos dias";
    }
    else{
        greeting.textContent = "Buenas tardes";
    }
    console.log(hora);
});