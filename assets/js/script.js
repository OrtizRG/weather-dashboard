var currentDatetime = document.querySelector("#datetime-current");

var currentTime = moment();

currentDatetime.textContent = "Atlanta " + currentTime.format("MMM DD, YYYY");

//


const inputCity = document.getElementById("inputCity");
const buttonSearch = document.getElementById("buttonSearch");

//Get Value of Search Bar
function formSubmit(event) {
    console.log(event.target);
    let city = inputCity.value.split(' ').join('_');

    let weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={1cd225897e08c11da783f6cc763124b0}" + city;

    console.log(weatherApi);
   
}

//formSubmit(e)
console.log(searchCity)

searchCity.addEventListener("click", function(event) {
    formSubmit(event);
    
});


function add(x, y) {

}

add(2, 3);