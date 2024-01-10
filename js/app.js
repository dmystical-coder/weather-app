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

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const getWeather = async function () {
            const url = `http://api.weatherapi.com/v1/current.json?key=3c8a93ed796d42069db214830241001&q=${latitude} ${longitude}&aqi=no`;

            const response = await fetch(url);
            const result = await response.json();
            return result;
        }

        const loadSite = async function () {
            const data = await getWeather();
            console.log(data);
        }
        loadSite();

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