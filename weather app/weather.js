function getWeather(){

let apiKey="44a5538edfcd4972cc23e5fed68100fd"
let cityName="hyderabad"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

fetch(apiUrl).then(response=>response.json() ).then(data=>extract(data) ).error(console.log("Error"))
}