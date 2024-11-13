import { Droplets, Wind } from 'lucide-react';
import type { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">{weather.city}</h2>
        <p className="text-5xl font-bold text-white">
          {Math.round(weather.temperature)}°C
        </p>
        <p className="text-xl text-white/80 mt-2 capitalize">{weather.weather_description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col items-center p-3 bg-white/5 rounded-lg">
          <Droplets className="text-blue-400 mb-2" size={24} />
          <span className="text-sm text-white/80">Humidity</span>
          <span className="text-lg font-semibold text-white">{weather.humidity}%</span>
        </div>

        <div className="flex flex-col items-center p-3 bg-white/5 rounded-lg">
          <Wind className="text-green-400 mb-2" size={24} />
          <span className="text-sm text-white/80">Wind</span>
          <span className="text-lg font-semibold text-white">{weather.wind_speed} km/h</span>
        </div>
      </div>
    </div>
  );
}