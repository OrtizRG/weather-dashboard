// var getCityData = function() {
//     fetch("http://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=1cd225897e08c11da783f6cc763124b0");
// };
//     var response = fetch("http://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=1cd225897e08c11da783f6cc763124b0")
//     .then(function(response)
//     console.log(response)
// });
//     console.log("inside", response);
  
  
//   getCityData();


const currentDatetime = document.querySelector("#datetime-current");

const currentTime = moment();


const searchCity = document.getElementById("searchCity");
const inputCity = document.getElementById("inputCity");

// //Get Value of Search Bar
function formSubmit(city) {

    // const city = inputCity.value.split(' ').join('_');

    let apiKey = "appid=1cd225897e08c11da783f6cc763124b0"
    let weatherApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + apiKey

    console.log(city);

    
    
  
    console.log(weatherApi);

    // fetch(weatherApi)
    // .then((response) => response.json())
    // .then((data) => {
    //         console.log(data);
    //     });

    // fetch("http://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=1cd225897e08c11da783f6cc763124b0")
   
};

searchCity.addEventListener("click", function(city) {
    formSubmit(city);
    
});

currentDatetime.textContent = "Sacramento " + currentTime.format("MMM DD, YYYY");


