let weather = {
    apiKey: "098c215b3fefefbb89dabb3ae90080e8",
    fetchWeather: function(city) {
    fetch( "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&units=metric&appid=" +
    this.apiKey)
    .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
    displayWeather: function(data) {
    const {name} = data
    const {description} = data.weather[0];
    const {temp, humidity} = data.main
    const {speed} = data.wind
    //debugger testing x = document.querySelector(".city")//
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = humidity + "%";
    document.querySelector(".wind").innerText = speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
},
};

search  = function() {
    city = document.querySelector(".search-bar").value;
    weather.fetchWeather(city);

}

document.querySelector(".search button")
.addEventListener("click", function() {
    search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(events)  {
    if  (events.key === "Enter"){

        search();
    }
});

weather.fetchWeather("Denver");