
let temp = document.querySelector(".temp")
let wind = document.querySelector(".wind")
let humidity = document.querySelector(".humidity")
let uvindex = document.querySelector(".uvindex")
let currentUVEl = document.getElementById("UV-index");
let inputEl = document.getElementById("currentWeather");
let searchHistory = JSON.parse(localStorage.getItem(".inputCity")) || [];
console.log(searchHistory);

const currentDatetime = document.querySelector("#datetime-current");

const currentTime = moment();


const searchCity = document.getElementById("searchCity");
const inputCity = document.getElementById("inputCity");

// //Get Value of Search Bar
function formSubmit(city) {

    const cityName = inputCity.value.split(' ').join('+');
    console.log(cityName);

   
    let apiKey = "46375a513237add901abadc6f726acfb"
    let weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey

    console.log(inputCity);
     
    console.log(weatherApi);

    fetch(weatherApi)
    .then((response) => response.json())
    .then((data) => {
            console.log(data);
            // currentDatetime.textContent = cityName.toUpperCase()+" ~ " + currentTime.format("MMM DD, YYYY");
            currentDatetime.textContent = data.name +" ~ " + currentTime.format("MMM DD, YYYY");
            temp.textContent = (Math.floor( data.main.temp - 273.15) * 9/5) + 32;
            wind.textContent = data.wind.speed;
            humidity.textContent = data.main.humidity;
            // uvindex.textContent = data.coord.lon + " " + data.coord.lat;

            let apiKey2 = "46375a513237add901abadc6f726acfb"
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey2 + "&cnt=1";
            fetch(UVQueryURL)
            .then((response) => response.json())
            .then(function(response){
                
                const uvValue = response[0].value
                if (uvValue < 2) {
                    let UVIndex = document.createElement("span")
                UVIndex.setAttribute("class","badge badge-success");
                UVIndex.innerHTML = uvValue;
                currentUVEl.innerHTML = "UV Index: ";
                console.log(uvValue)
                currentUVEl.append(UVIndex);
                }
                else if (uvValue < 5) {
                    let UVIndex = document.createElement("span")
                    UVIndex.setAttribute("class","badge badge-warning");
                    UVIndex.innerHTML = uvValue;
                    currentUVEl.innerHTML = "UV Index: ";
                    currentUVEl.append(UVIndex);
                }
                if (uvValue > 6) {
                    let UVIndex = document.createElement("span")
                UVIndex.setAttribute("class","badge badge-danger");
                UVIndex.innerHTML = uvValue;
                currentUVEl.innerHTML = "UV Index: ";
                console.log(uvValue)
                currentUVEl.append(UVIndex);
                }

                // let UVIndex = document.createElement("span");
                // UVIndex.setAttribute("class","badge badge-danger");
                // UVIndex.innerHTML = uvValue;
                // currentUVEl.innerHTML = "UV Index: ";
                // console.log(currentUVEl)
                // currentUVEl.append(UVIndex);
            });

    });

    // fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + apiKey)
   

    };



searchCity.addEventListener("click", function(city) {
    formSubmit(city);
    console.log(inputCity)

    const searchTerm = inputCity.value;
    console.log(searchHistory)
    formSubmit(searchTerm);
    searchHistory.push(searchTerm);
    localStorage.setItem("search",JSON.stringify(searchHistory));
    // console.log(searchHistory);
    
});


// currentDatetime.textContent = inputCity + currentTime.format("MMM DD, YYYY");
