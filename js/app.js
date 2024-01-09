'use strict';

const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const loc = document.getElementById('location');
const dataCity = document.getElementById('data_city');
const dataTemperature = document.getElementById('data_temperature');
const dataHumidity = document.getElementById('data_humidity');
const dataPressure = document.getElementById('data_pressure');
const dataWindSpeed = document.getElementById('data_wind_speed');
const dataWindDirection = document.getElementById('data_wind_direction');
const dataSunrise = document.getElementById('data_sunrise');
const dataSunset = document.getElementById('data_sunset');

let latitude;
let longitude;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        return latitude, longitude;
    }, (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    })
};
const getWeather = async function () {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6893e2d9c07f0e7cd079d2def1ff7f38`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
}

const loadSite = async function () {
    const data = await getWeather();
    console.log(data);
    switch (data.weather[0].main) {
        case "Rain":
            document.body.style.backgroundImage = "url('./img/rainy.jpg')";
            break;
        case "Clouds":
            document.body.style.backgroundImage = "url('./img/cloudy.jpg')";
            break;
        case "Clear":
            document.body.style.backgroundImage = "url('./img/clear.jpg')";
            break;
        default:
            document.body.style.backgroundImage = "url('./img/fair.jpg')";
            break;
    }

    temperature.innerHTML = Math.round((data.main.temp - 273.15) * 10) / 10 + "°C";
    description.innerHTML = data.weather[0].description;
    loc.innerHTML = data.name;
    dataCity.innerHTML = data.name;
    dataTemperature.innerHTML = Math.round((data.main.temp - 273.15) * 10) / 10 + "°C";
    dataHumidity.innerHTML = data.main.humidity + "%";
    dataPressure.innerHTML = data.main.pressure + "hPa";
    dataWindSpeed.innerHTML = data.wind.speed + "m/s";
    dataWindDirection.innerHTML = data.wind.deg + "º";
    dataSunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    dataSunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
}




