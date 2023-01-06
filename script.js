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
let input = document.getElementsByTagName("input")[0];

let api_function = async () => {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${search_location.value}&appid=${api_key}`;
    try {
        await fetch(api)
            .then((resp) => resp.json())
            .then((response) => {
                let temp_celcius=Math.floor((response.main.temp)-273.15);
                location_display.innerHTML = `Location: ${response.name}`;
                temperature.innerHTML = `Temperature: ${temp_celcius}ºC`;
                winds.innerHTML = `Winds: ${response.wind.speed}m/s`;
                humidity.innerHTML = `humidity: ${response.main.humidity}%`;
                climate.innerHTML = `Climate: ${response.weather[0].main}`;
                console.log(api)
            });
        document.getElementsByClassName("info")[0].style.visibility = "visible";
    } catch (e) {
        alert("Please Enter Valid Location");
    }
};
location_search.addEventListener("click", () => {
    api_function();
});
input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") api_function();
});
input.addEventListener("input", () => {
    if (input.value === "") {
        document.getElementsByClassName("info")[0].style.visibility = "hidden";
    }
});
