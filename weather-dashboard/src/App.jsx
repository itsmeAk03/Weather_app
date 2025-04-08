import { useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import WeatherCard from './Components/WeatherCard';
import ErrorMessage from './Components/ErrorMessage';
import Loader from './Components/Loader';

const API_KEY = 'a330d16cb084423daa28812b9dfecbf8'; // Replace with your OpenWeatherMap key

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    setWeatherData(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500 p-4">
      <div className="w-full max-w-xl text-white">
        <h1 className="text-4xl font-extrabold text-center mb-6 drop-shadow-md">🌤️ Weather Now</h1>
        <SearchBar onSearch={fetchWeather} />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
