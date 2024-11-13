# Weather Forecast App

A beautiful and responsive weather application built with React, TypeScript, and Tailwind CSS. Get real-time weather information for any city with a sleek, modern interface.


## Features

- 🔍 City-based weather search
- 🌡️ Real-time temperature data
- 💨 Wind speed information
- 💧 Humidity levels
- 🎨 Beautiful glass-morphism UI
- 📱 Fully responsive design
- ⚡ Fast and lightweight
- 🔄 Loading states and error handling

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)

## Project Structure

```
src/
├── features/
│   └── weather/
│       ├── api/
│       │   └── weatherApi.ts
│       ├── components/
│       │   ├── ErrorMessage.tsx
│       │   ├── SearchBar.tsx
│       │   └── WeatherCard.tsx
│       └── types/
│           └── weather.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/vanguyenwork/frontend-weather-app.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server URL provided by Vite

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API

The app uses the FreeTestAPI weather service to fetch weather data. The API endpoint is:
```
https://freetestapi.com/api/v1/weathers
```
