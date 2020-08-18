const configForm = document.querySelector("form")
const cityInput = document.querySelector("input[type='text']")
const submitButton = document.querySelector("#submit")

const apiKey = "b7040594e7bfe4dfd4b7efa04aea91b9"
const weatherIcons = {
    rain: "🌧️",
    sun: "☀",
    cloudy: "☁",
    fog: "🌫",
    snow: "❄",
    mixed: "⛅"
}
const currentEndpoint = `http://api.openweathermap.org/data/2.5/weather`
const forecastEndpoint = `http://api.openweathermap.org/data/2.5/forecast`
const uviEndpoint = `http://api.openweathermap.org/data/2.5/uvi`
const imageUrl = (icon) => `http://openweathermap.org/img/w/${icon}.png`

function buildEndpoint(endpoint, data) {
    switch(endpoint) {
        case "current": return `${currentEndpoint}?q=${data.city.replace(/\s/g, "%20")}&appid=${apiKey}`
        case "forecast": return `${forecastEndpoint}?q=${data.city.replace(/\s/g, "%20")}&appid=${apiKey}`
        case "uvi": return `${uviEndpoint}?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`
    }
}


configForm.onsubmit = async (e) => {
    const cityValue = cityInput.value.replace(/[^a-zA-Z]/g, " ").trim()
    e.preventDefault()
    if(!cityValue) {
       
    } else {
        try {
            try {
                const currentCheck = await fetch(buildEndpoint('current', {city: cityValue}))
                
                const current = await currentCheck.json()
                const forecast = await (await fetch(buildEndpoint('forecast', {city: cityValue})))?.json()
                const uvi = await (await fetch(buildEndpoint('uvi', {lon: current.coord.lon, lat: current.coord.lat})))?.json()
                console.log(current, forecast, uvi)
                console.log(current.weather[0].main, current.weather[0].description, imageUrl(current.weather[0].icon))

            } catch {
                alert(`City "${cityInput.value}" could not be found!`)
                return false
            }
        } catch(err) {
            console.log(err)
        }
    }
    return false
}


console.log(buildEndpoint("forecast", {city: "Palo Alto"}))