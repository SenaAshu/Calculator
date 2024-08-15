const API_KEY = "435651987ddb06b0832a9dc8b91dccd2"
const API_URL =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchCity = document.querySelector('#city')
const search = document.getElementById('search-btn')
const weatherImg = document.getElementById("weather-info")



const getWeather = async (city)=>{
    const response = await fetch(API_URL+city+`&appid=${API_KEY}`)
    let data = await response.json();
    console.log(data);

    if(data.cod == 404){
        weatherImg.src = "images/404.png"
        document.querySelector(".show-temperature").style.display = "none";
        document.querySelector(".search-area").style.display = "block"
        document.querySelector(".humidity-wind_speed-parent").style.display = "none";
        // document.querySelector(".wind_speed-parent").style.display = "hidden";
        // prompt("gandi de mg")
    }
    else{
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " " +"°C";
        document.querySelector("#climate-detail").innerHTML = data.weather[0].main;
        document.querySelector("#percentage").innerHTML = data.main.humidity;
        document.querySelector("#kilometerPerHour").innerHTML = data.wind.speed + " "+"Km/h";
        
        if(data.weather[0].main === "Mist"){
            weatherImg.src = "images/mist.png";
        }
        else if(data.weather[0].main === "Cloud"){
            weatherImg.src = "images/cloud.png";
        }
        else if(data.weather[0].main === "Rain"){
            weatherImg.src = "images/rain.png";
        }
        else if(data.weather[0].main === "Snow"){
            weatherImg.src = "images/snow.png";
        }
        else if(data.weather[0].main === "Clear"){
            weatherImg.src = "images/clear.png";
        }
        else if(data.weather[0].main === "Haze"){
            weatherImg.src = "images/cloud.png";
        }
        document.querySelector(".show-temperature").style.display = "block";
        document.querySelector(".humidity-wind_speed-parent").style.display = "flex";
        // document.querySelector(".wind_speed-parent").style.display = "inherit";


    }
}

search.addEventListener("click" , ()=>{
    getWeather(searchCity.value);
})