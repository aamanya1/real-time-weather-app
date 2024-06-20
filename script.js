const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f8a053b9aemsh603efb24e17bdacp144aedjsnc1fe3ecc816d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
.then(response => response.json())
.then(response => {
	console.log(response)
	cloud_pct3.innerHTML = response.cloud_pct
	temp3.innerHTML = response.temp
	feels_like3.innerHTML = response.feels_like
	humidity3.innerHTML = response.humidity
	min_temp3.innerHTML = response.min_temp
	max_temp3.innerHTML = response.max_temp
	wind_speed3.innerHTML = response.wind_speed
	sunrise3.innerHTML = response.sunrise
	sunset3.innerHTML = response.sunset
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
.then(response => response.json())
.then(response => {
	console.log(response)
	cloud_pct4.innerHTML = response.cloud_pct
	temp4.innerHTML = response.temp
	feels_like4.innerHTML = response.feels_like
	humidity4.innerHTML = response.humidity
	min_temp4.innerHTML = response.min_temp
	max_temp4.innerHTML = response.max_temp
	wind_speed4.innerHTML = response.wind_speed
	sunrise4.innerHTML = response.sunrise
	sunset4.innerHTML = response.sunset
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
.then(response => response.json())
.then(response => {
	console.log(response)
	cloud_pct5.innerHTML = response.cloud_pct
	temp5.innerHTML = response.temp
	feels_like5.innerHTML = response.feels_like
	humidity5.innerHTML = response.humidity
	min_temp5.innerHTML = response.min_temp
	max_temp5.innerHTML = response.max_temp
	wind_speed5.innerHTML = response.wind_speed
	sunrise5.innerHTML = response.sunrise
	sunset5.innerHTML = response.sunset
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
.then(response => response.json())
.then(response => {
	console.log(response)
	cloud_pct6.innerHTML = response.cloud_pct
	temp6.innerHTML = response.temp
	feels_like6.innerHTML = response.feels_like
	humidity6.innerHTML = response.humidity
	min_temp6.innerHTML = response.min_temp
	max_temp6.innerHTML = response.max_temp
	wind_speed6.innerHTML = response.wind_speed
	sunrise6.innerHTML = response.sunrise
	sunset6.innerHTML = response.sunset
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=California', options)
.then(response => response.json())
.then(response => {
	console.log(response)
	cloud_pct7.innerHTML = response.cloud_pct
	temp7.innerHTML = response.temp
	feels_like7.innerHTML = response.feels_like
	humidity7.innerHTML = response.humidity
	min_temp7.innerHTML = response.min_temp
	max_temp7.innerHTML = response.max_temp
	wind_speed7.innerHTML = response.wind_speed
	sunrise7.innerHTML = response.sunrise
	sunset7.innerHTML = response.sunset
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Los%20Angeles', options)
.then(response => response.json())
.then(response => {
	console.log(response)
	cloud_pct8.innerHTML = response.cloud_pct
	temp8.innerHTML = response.temp
	feels_like8.innerHTML = response.feels_like
	humidity8.innerHTML = response.humidity
	min_temp8.innerHTML = response.min_temp
	max_temp8.innerHTML = response.max_temp
	wind_speed8.innerHTML = response.wind_speed
	sunrise8.innerHTML = response.sunrise
	sunset8.innerHTML = response.sunset
})
.catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")