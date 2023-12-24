const apiKey="23f58f5eca102e30e5c01b77f91636ae";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const city= document.querySelector(".search input");
const btn=document.querySelector(".search button");
const icon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed +"Km/h";

    if (data.weather[0].main == "Clouds"){
        icon.src= "images/Clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        icon.src= "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        icon.src= "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        icon.src= "images/mist.png";
    }
    else if (data.weather[0].main == "Rain"){
        icon.src= "images/rain.png";
    }
    else if (data.weather[0].main == "Snow"){
        icon.src= "images/snow.png";
    }
    else if (data.weather[0].main == "Smoke"){
        icon.src= "images/smoke.png";
    }
}

btn.addEventListener("click",()=> checkWeather(city.value));