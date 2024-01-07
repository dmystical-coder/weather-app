const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const location = document.getElementById('location');
const dataCity = document.getElementById('data_city');
const dataTemperature = document.getElementById('data_temperature');
const dataHumidity = document.getElementById('data_humidity');
const dataPressure = document.getElementById('data_pressure');
const dataWindSpeed = document.getElementById('data_wind_speed');
const dataWindDirection = document.getElementById('data_wind_direction');
const dataSunrise = document.getElementById('data_sunrise');
const dataSunset = document.getElementById('data_sunset');



let longitude = "1.360321";
let latitude = "103.846733";

const getWeather = async function () {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6893e2d9c07f0e7cd079d2def1ff7f38`;

    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
}

// function loadSite() {
//     if (navigator.geolocation) { // device can return its location
//         navigator.geolocation.getCurrentPosition(function (position) {
//             latitude = position.coords.latitude;
//             longitude = position.coords.longitude;
//             getWeather();
//         });
//     }
// }

const loadSite = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            getWeather();
        });
    }
}

loadSite();

// function getWeather() {
//     let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=<YOUR API KEY>`
//     console.log(url);
//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (json) {
//             console.log(json);
//             switch (json.weather[0].main) {
//                 case "Rain":
//                     document.body.style.backgroundImage = "url('./img/rainy.jpg')";
//                     break;
//                 case "Clouds":
//                     document.body.style.backgroundImage = "url('./img/cloudy.jpg')";
//                     break;
//                 case "Clear":
//                     document.body.style.backgroundImage = "url('./img/clear.jpg')";
//                     break;
//                 default:
//                     document.body.style.backgroundImage = "url('./img/fair.jpg')";
//                     break;
//             }

//             document.getElementById("temperature").innerHTML = Math.round((json.main.temp - 273.15) * 10) / 10 + "°C";
//             document.getElementById("location").innerHTML = json.name;
//             document.getElementById("description").innerHTML = json.weather[0].description;
//             document.getElementById("data_city").innerHTML = json.name;
//             document.getElementById("data_temperature").innerHTML = Math.round((json.main.temp - 273.15) * 10) / 10 + "°C";
//             document.getElementById("data_humidity").innerHTML = json.main.humidity + "%";
//             document.getElementById("data_wind_speed").innerHTML = json.wind.speed + "m/s";
//             document.getElementById("data_wind_direction").innerHTML = json.wind.deg + "º";
//             document.getElementById("data_pressure").innerHTML = json.main.pressure + "hPa";
//             document.getElementById("data_sunrise").innerHTML = new Date(json.sys.sunrise * 1000).toLocaleTimeString();
//             document.getElementById("data_sunset").innerHTML = new Date(json.sys.sunset * 1000).toLocaleTimeString();
//         });
// }

