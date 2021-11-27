let temp = document.querySelector(".temp")
let wind = document.querySelector(".wind")

const currentDatetime = document.querySelector("#datetime-current");

const currentTime = moment();


const searchCity = document.getElementById("searchCity");
const inputCity = document.getElementById("inputCity");

// //Get Value of Search Bar
function formSubmit(city) {

    const cityName = inputCity.value.split(' ').join('_');

    // var city = inputCity.textContent

    let apiKey = "46375a513237add901abadc6f726acfb"
    let weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey

    console.log(inputCity);
     
    console.log(weatherApi);

    fetch(weatherApi)
    .then((response) => response.json())
    .then((data) => {
            console.log(data);
            currentDatetime.textContent = cityName.toUpperCase()+" ~ " + currentTime.format("MMM DD, YYYY");
            temp.textContent = (Math.floor( data.main.temp - 273.15) * 9/5) + 32;
            wind.textContent = data.wind.speed
        });

    // fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + apiKey)
   

    };



searchCity.addEventListener("click", function(city) {
    formSubmit(city);
    console.log(city)
    
});

// currentDatetime.textContent = inputCity + currentTime.format("MMM DD, YYYY");
