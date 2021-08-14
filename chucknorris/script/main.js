let requestURL = "https://api.chucknorris.io/jokes/random";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    const quote = request.response;
    console.log(quote);
}
