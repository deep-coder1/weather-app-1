import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  return (
    <div>
      <h1>Weather App</h1>

      <input
        type='test'
        placeholder='Enter city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => alert('Fetch weather for ' + city)}>Search</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <h3>{weather.main.temp}°C</h3>
        </div>
      )}
    </div>
  );
}
export default App;