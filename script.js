const inputBox = document.querySelector(".inputBox");
const getWeatherButton = document.querySelector(".getWeatherButton");
const card = document.querySelector(".card");

getWeatherButton.addEventListener("click", weatherData);

function weatherData() {

    

    let city = inputBox.value.trim();
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then (response => response.json())
    .then (data => {
        let temperature = data.main.temp;
        let humidity = data.main.humidity;
        let weatherEmoji = data.weather[0].icon;
        let description = data.weather[0].main;
        let cityName = data.name;
        let windSpeed = data.wind.speed;

        document.querySelector(".tempDisplay").innerHTML = `${temperature}°C`;
        document.querySelector(".weatherEmoji").innerHTML = `<img src="http://openweathermap.org/img/w/${weatherEmoji}.png">`
        document.querySelector(".cityDisplay").innerHTML = cityName;
        document.querySelector(".humidity").innerHTML = `${humidity}%`;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".wind").innerHTML = `${windSpeed}km/h`;

        card.style.display = "block";
    })
    .catch (error => console.log(error));
};


const uiButton = document.querySelector(".uitoggleButton");

uiButton.addEventListener("click", changeUi);

function changeUi() {
    let currentUi = document.body.getAttribute("dataTheme");

    const svgsun = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
  </svg>`;

  const svgmoon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
 </svg>`;

    if (currentUi === "dark") {
        document.body.setAttribute("dataTheme", "light");
        inputBox.setAttribute("theme", "light");
        getWeatherButton.setAttribute("theme", "light");
        uiButton.innerHTML = svgmoon;
    } else {
        document.body.setAttribute("dataTheme", "dark");
        inputBox.setAttribute("theme", "dark");
        getWeatherButton.setAttribute("theme", "dark");
        uiButton.innerHTML = svgsun;
    }
}