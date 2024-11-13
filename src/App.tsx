import React, { useState } from 'react';
import { SearchBar } from './features/weather/components/SearchBar';
import { WeatherCard } from './features/weather/components/WeatherCard';
import { ErrorMessage } from './features/weather/components/ErrorMessage';
import { fetchWeatherByCity } from './features/weather/api/weatherApi';
import type { WeatherState } from './features/weather/types/weather';

function App()
{
  const [weatherState, setWeatherState] = useState<WeatherState>({
    data: null,
    isLoading: false,
    error: null,
  });

  const handleSearch = async (city: string) =>
  {
    setWeatherState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const data = await fetchWeatherByCity(city);
      if (!data) {
        setWeatherState({
          data: null,
          isLoading: false,
          error: 'Weather data not found for the city',
        });

        return
      }

      setWeatherState({
        data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setWeatherState({
        data: null,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-start p-6 gap-8"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2560&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Weather Forecast</h1>
        <p className="text-white/80">Enter a city name to get the current weather</p>
      </div>

      <SearchBar onSearch={handleSearch} isLoading={weatherState.isLoading} />

      <div className="w-full max-w-md">
        {weatherState.error && <ErrorMessage message={weatherState.error} />}
        {weatherState.data && <WeatherCard weather={weatherState.data} />}
      </div>
    </div>
  );
}

export default App;