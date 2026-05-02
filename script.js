function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Bhai city naam daal 😑");
        return;
    }

    let apiKey = "e711e7d40ba674200b9cda6429181a60"; // 🔥 yaha apni API key daal

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod != 200) {
            document.getElementById("result").innerHTML = "City not found ❌";
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡️ Temperature: ${data.main.temp} °C</p>
            <p>🌤️ Weather: ${data.weather[0].main}</p>
        `;
    })
    .catch(error => {
        console.log(error);
        document.getElementById("result").innerHTML = "Error aaya 😢";
    });
}
