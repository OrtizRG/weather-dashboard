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
function formSubmit(event) {
    console.log(event.target);
    const city = inputCity.value.split(' ').join('_');
    console.log(city);

    const weatherApi = "http://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=1cd225897e08c11da783f6cc763124b0";
    
    console.log(weatherApi);

    fetch(weatherApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })

    fetch("http://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=1cd225897e08c11da783f6cc763124b0")
   
};

searchCity.addEventListener("click", function(event) {
    formSubmit(event);
    
});

currentDatetime.textContent = "Sacramento " + currentTime.format("MMM DD, YYYY");


