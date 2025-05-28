async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  
  // Validate input
  if (!city) {
    document.getElementById("weatherInfo").innerHTML = "<p>Please enter a city name</p>";
    return;
  }

  const apikey = "8924c23c3d5ececf544fa04155149e3a"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  try {
    // Show loading state
    document.getElementById("weatherInfo").innerHTML = "<p>Loading...</p>";
    
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found");
      }
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    
    // Check if weather data exists
    if (!data.weather || data.weather.length === 0) {
      throw new Error("Weather data not available");
    }

    const weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Feels like:</strong> ${data.main.feels_like}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weatherInfo").innerHTML = weatherInfo;
  } catch (error) {
    console.error("Fetch error:", error);
    document.getElementById("weatherInfo").innerHTML = `<p>${error.message}</p>`;
  }
}