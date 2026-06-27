import { useState } from "react";
import axios from "axios";

const API_KEY = "a5747b830aa5f57b581353c9d3860d07";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(response.data);
    } catch (err) {
      setError("City not found");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-5">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl p-8 w-full max-w-md text-white">

        

      </div>
    </div>
  );
}

export default Weather;
