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


         