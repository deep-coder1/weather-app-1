import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const getWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'a5747b830aa5f57b581353c9d3860d07'}&units=metric`
  )

  return response.data
}