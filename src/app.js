function displayTemperature(response) {
    console.log(response.data);
let temperatureElement= document.querySelector("#temperature");
let cityElement= document.querySelector("#city");
let descriptionElement= document.querySelector("description");
temperatureElement.innerHTML = Math.round(response.data.temperature.current);
cityElement.innerHTML=response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
}


let apiKey = "5a80183327bo71ba4bt881f57e95e87f";
let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=Tampa&key=5a80183327bo71ba4bt881f57e95e87f&units=metric';
axios.get(apiUrl).then(displayTemperature);

