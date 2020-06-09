const api = {
    key: "fe64bb1db62640a509bac1ca20e73242",
    baseURL: "https://api.openweathermap.org/data/2.5/"
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', function(evt){
       if(evt.keyCode == 13){
           fetch(`${api.baseURL}weather?q=${searchBox.value}&units=metric&APPID=${api.key}`)
              .then(weather => {
                  return weather.json();
               })
              .then(displayResults);
       }
});
function displayResults(weather){
    console.log(weather);
    /* Displaying the name and country of the searched place*/
    let city = document.querySelector('.location > .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    /*Displaying the time and date when the search was made*/
    let now = new Date();
    let date = document.querySelector('.location > .date');
    date.innerText = dateBuilder(now);
    /*Displaying the temperature*/
    let temp = document.querySelector('.current > .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`
}

function dateBuilder(d){
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                  "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                 "Thursday", "Friday", "Saturday"]; 
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}         