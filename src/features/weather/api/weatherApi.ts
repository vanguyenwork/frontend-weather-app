import { WeatherData } from "../types/weather";

const BASE_URL = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://freetestapi.com/api/v1/weathers');

export async function fetchWeatherByCity(city: string): Promise<WeatherData | undefined> {
  try {
    const query = city ? `&search=${encodeURIComponent(city)}` : '';
    const response = await fetch(`${BASE_URL}${query}`);
    if (!response.ok) throw new Error('Weather data not found');
    const data: WeatherData[] = await response.json();
    return data.find(weatherData => weatherData.city.toLowerCase() === city.toLowerCase());
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
    throw new Error('Failed to fetch weather data');
  }
}