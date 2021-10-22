var getCityData = function() {
    fetch("https://api.github.com/users/octocat/repos");
  };
  
  getCityData();

// const currentDatetime = document.querySelector("#datetime-current");

// const currentTime = moment();

// currentDatetime.textContent = "Atlanta " + currentTime.format("MMM DD, YYYY");

// //

// const searchCity = document.getElementById('searchCity');
// const inputCity = document.getElementById("inputCity");

// //Get Value of Search Bar
// function formSubmit(event) {
//     console.log(event.target);
//     const city = inputCity.value.split(' ').join('_');
//     console.log(city);

//     const weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=37.39&lon=-122.08&exclude=hourly,minutely&appid=1cd225897e08c11da783f6cc763124b0";
    
//     console.log(weatherApi);

//     fetch(weatherApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })

//     //fetch("https://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=AIzaSyDpiNPP_a5r4hUblmDU8cnCJnlVlDqhCgA")
   
// }

// searchCity.addEventListener("click", function(event) {
//     formSubmit(event);
    
// });


