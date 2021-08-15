const text = document.querySelector('.quote');
const btn = document.getElementById('button');

let requestURL = "https://api.chucknorris.io/jokes/random";
let request = new XMLHttpRequest();
btn.addEventListener('click', function(){
    request.open('GET', requestURL);
    request.responseType = "json";
    //request.responseType= "text";
    request.onload = function() {
        const quote = request.response;
        //console.log(JSON.parse(quote));
        text.textContent = quote.value;
    }
    request.send();
}
);
