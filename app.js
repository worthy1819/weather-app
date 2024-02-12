function fetchWeather() {
    const apiKey = 'f59798347d91a5320cd3e317508ba160';
    const cityInput = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
    const weatherInfoDiv = document.getElementById('weather-info');
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;
            const tempMin = data.main.temp_min;
            const tempMax = data.main.temp_max;
            const pressure = data.main.pressure;
            const weatherDescription = data.weather[0].description;

            const weatherHTML = `
            <div style="background-color: darkblue; padding: 20px; border-radius: 5px; border: 2px solid darkblue; color: white;">
                <p style="font-size: 20px;">City: ${cityName}</p>
                <p>Temperature: ${temperature} °C</p>
                <p>Description: ${weatherDescription}</p>
                <p>Feels Like: ${feelsLike} °C</p>
                <p>Temperature Min: ${tempMin} °C</p>
                <p>Temperature Max: ${tempMax} °C</p>
                <p>Pressure: ${pressure}</p>
            </div>
            `;
            weatherInfoDiv.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            weatherInfoDiv.innerHTML = '<p style="color: red;">Failed to fetch weather information.</p>';
        });
}
