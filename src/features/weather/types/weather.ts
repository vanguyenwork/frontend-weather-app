export interface WeatherData {
  id: number;
  city: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
  weather_description: string;
  icon: string;
}

export interface WeatherState {
  data: WeatherData | null;
  isLoading: boolean;
  error: string | null;
}