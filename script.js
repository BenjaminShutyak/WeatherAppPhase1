let weather = {
apiKey: "098c215b3fefefbb89dabb3ae90080e8",
fetchWeather: function(city) {
fetch("https://api.openweathermap.org/data/2.5/weather?q=denver&units=metric&appid=098c215b3fefefbb89dabb3ae90080e8")
}
};