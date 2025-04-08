const WeatherCard = ({ data }) => {
    const { name, main, weather, wind } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
  
    return (
      <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-md shadow-xl text-center transition-all hover:scale-105 duration-300">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <img src={iconUrl} alt={weather[0].description} className="w-24 mx-auto" />
        <p className="text-xl font-medium">{weather[0].main}</p>
        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
          <div>
            <p className="text-white/80">Temp</p>
            <p className="text-lg font-bold">{main.temp}°C</p>
          </div>
          <div>
            <p className="text-white/80">Humidity</p>
            <p className="text-lg font-bold">{main.humidity}%</p>
          </div>
          <div>
            <p className="text-white/80">Wind</p>
            <p className="text-lg font-bold">{wind.speed} km/h</p>
          </div>
          <div>
            <p className="text-white/80">Feels Like</p>
            <p className="text-lg font-bold">{main.feels_like}°C</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  