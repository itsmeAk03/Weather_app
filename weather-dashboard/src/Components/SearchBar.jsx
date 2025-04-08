import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mb-6 gap-2">
      <input
        type="text"
        placeholder="Enter city..."
        className="w-2/3 p-3 rounded-xl shadow-md border-2 border-white/20 bg-white/20 backdrop-blur-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="bg-white/30 text-white px-4 py-3 rounded-xl hover:bg-white/40 transition shadow-md backdrop-blur"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
