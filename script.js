
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f55a2b6f38mshc9f123d5c833407p1bf77djsnf3fa6f511ae9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const submit = document.getElementById('submit');


const getWeather = (city) => {
	cityName.innerHTML=city
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			temp.innerHTML = response.temp
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			wind_speed.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		})

		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)

})



