const apiKey = "72f32a649d6f1c717518cb25d69ede1c";
const city = document.getElementById("city");
const form = document.getElementById("form");
const card = document.querySelectorAll(".card");

form.addEventListener("submit", async event=>{
    event.preventDefault();

    const cityIn = city.value.toLowerCase();
    if(cityIn){
        try{
            const weatherData = await getWeather(cityIn);
            displayWeather(weatherData);
        }catch(error){
            console.error(error)
        }
    }else{
        window.alert("You need to enter a city name!");
    }
})

async function getWeather(city){
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(link);

    if(!response.ok){
        window.alert("Could not fetch data");
    }

    return await response.json();
}
function displayWeather(data){
    console.log(data);
    const city = data.name;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const id = data.weather[0].id;

    card[0].style.display = "flex";
    card[1].textContent = `${city}`;
    card[2].textContent = `${temp}°C`;
    card[3].textContent = `%${humidity} Humidity`;
    card[4].textContent = `${description}`;
    const emojiLink = getEmoji(id);
    card[5].setAttribute("src",`${emojiLink}`);

    console.log(emojiLink);
    console.log(id);
}
function getEmoji(id){
    let link;
    switch(true){
        case (id > 199 && id < 233):
            link = "./weathericons/thunderstorm.png";
            break;
        case ((id > 299 && id < 322) || (id > 519 && id < 531)):
            link = "./weathericons/showerrain.png";
            break;
        case (id > 499 && id < 505):
            link = "./weathericons/rain.png";
            break;
        case ((id > 599 && id < 621) || id === 511):
            link = "./weathericons/snow.png";
            break;
        case (id > 700 && id < 782):
            link = "./weathericons/mist.png";
            break;
        case (id === 800):
            link = "./weathericons/clearsky.png";
            break;
        case (id === 801):
            link = "./weathericons/fewclouds.png";
            break;
        case (id === 802):
            link = "./weathericons/scatteredclouds.png";
            break;
        case (id > 802 && id < 805):
            link = "./weathericons/brokenclouds.png";
            break;
    }
    return link;
}
