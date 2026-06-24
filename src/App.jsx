import { useState } from 'react';
import { getWeather } from './services/api';
// import Weather from './components/Weather';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
    const data = await getWeather(city)
    setWeather(data)
  }

  return (
    // <div>
    //   <h1>Weather App</h1>

    //   <input
    //     type='test'
    //     placeholder='Enter city'
    //     value={city}
    //     onChange={(e) => setCity(e.target.value)}
    //   />

    //   <button onClick={fetchWeather}>Search</button>

    //   {weather && (
    //     <div>
    //       <h2>{weather.name}</h2>
    //       <h3>{weather.main.temp}°C</h3>
    //     </div>
    //   )}
    // </div>
    
    <>
    {/* <Weather /> */}
    </>
  );
}
export default App;
