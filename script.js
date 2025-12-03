//-------constant for API key-------//
const apikey='3ceb1c187dob745f699d2a9c76c3fsaf';
//always replace with your actual open weather API key
//--------async/await with fetch--------//
async function getWeather(){
    //-------Template Literals and const-------//
    const city=document.getElementById('cityInput').value;
    const url='http://api.openweathermap.org/data/2.5/weather?q';

try{
    //-------Await with fetch-------//
    const responce=await fetch(url);
    if(!responce.ok){
        throw new Error('HTTP error! Status:S{responce.Status}');
    }
    const data=await responce.json();
    displayWeather(data);
}catch(error){
    console.error('failed to fetch weather data:',error);
    alert('failed to fetch weather data.');
   }
    
}
function displayWeather(data){
    const{ main:weatherMain,discription,icon}=weather;
    const{main:{temp,humidity},weather,wind:{speed},Sys:{country},name}=display();
    const weatherDisplay=document.getElementById('weatherDisplay');
    if(data.cod!==200){
        weatherDisplay.innerHTML='<p>Error:S{data.message}</p>';
        return;
    }
    //--------teplate literals for html generation-------//
    const weatherHTML='
    <h2>Weather in S{name},S{country}</h2>
    <p>Temperature:S{temp}C</p>
    <p>Weather:S{weatherMain}(S{description})</p>
    <p>Humidity:S{humidity}%</p>
    <p>Wind:s{speed}m/s</p>
    <img src="https://openweathermap.org/img/w/s{icon}.png" alt="Weather icon">
';
   weatherDisplay.innerHTML=weatherHTML;
}
