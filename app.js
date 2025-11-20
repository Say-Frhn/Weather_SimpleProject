fetch("https://api.open-meteo.com/v1/forecast?latitude=35&longitude=51&current_weather=true")
.then(response => response.json())
.then(data => {
    console.log(data);

const temp = data.current_weather.temperature
const wind = data.current_weather.windspeed
const time = data.current_weather.time;

document.getElementById('temp').innerText = "دما" + temp  + "°C"; 
document.getElementById('wind').innerText = "سرعت باد" + wind + "km/h" ;
document.getElementById('time').innerText = "زمان: " + time; 
});
