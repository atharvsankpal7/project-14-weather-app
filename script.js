let api_key = "e67c1f157951a09e4c1d6269d7028c50";
let search_location = document.getElementById("search-location");
let search_cordinates = document.getElementById("search-zipcode");
let location_display = document.getElementsByClassName("location_name")[0];
let location_search = document.getElementById("location-img");
let zipcode_search = document.getElementById("zipcode-img");
let temperature = document.getElementsByClassName("temp")[0];
let winds = document.getElementsByClassName("winds")[0];
let humidity = document.getElementsByClassName("humidity")[0];
let climate = document.getElementsByClassName("climate")[0];
location_search.addEventListener("click", () => {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${search_location.value}&appid=${api_key}`;
    fetch(api)
        .then((resp) => resp.json())
        .then((response) => {
            location_display.innerHTML=`Location: ${response.name}`
            temperature.innerHTML = `Temperature: ${response.main.temp}ºF`;
            winds.innerHTML = `Winds: ${response.wind.speed}m/s`;
            humidity.innerHTML = `Winds: ${response.main.humidity}%`;
            climate.innerHTML = `Climate: ${response.weather[0].main}`;
            //main.humidity

            console.log(response);
            console.log(response.weather[0].main);
        });
});
