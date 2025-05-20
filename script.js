async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "e203993f1a975b5a38d97d472c381148";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weather-result").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>${data.weather[0].description}</p>
    `;
  } else {
    document.getElementById("weather-result").innerHTML = "City not found.";
  }
}