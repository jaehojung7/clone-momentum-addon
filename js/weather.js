const API_KEY = "enter your API key";

function onGeoSuccess() {
    // const lat = position.coords.latitude;
    // const lon = position.coords.longitude;
    const lat = 37.5665;
    const lon = 126.9780;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = `${data.main.temp}°C ${data.weather[0].description}`;
       
    });
}

function onGeoError() {
    alert("Can't find your location.")
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);