import React from 'react'
import { getWeatherIcon, capitalize } from '../utils/weatherUtils'

export default function CurrentWeather({ weather, forecast }) {
  if (!weather) return null

  const icon = getWeatherIcon(weather.weather[0].icon)
  const description = capitalize(weather.weather[0].description)

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="glass p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-lg opacity-90">{description}</p>
          </div>
          <div className="text-8xl">{icon}</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Temperature</p>
            <p className="text-3xl font-bold">{Math.round(weather.main.temp)}°C</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Feels Like</p>
            <p className="text-3xl font-bold">{Math.round(weather.main.feels_like)}°C</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Humidity</p>
            <p className="text-3xl font-bold">{weather.main.humidity}%</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Wind Speed</p>
            <p className="text-3xl font-bold">{Math.round(weather.wind.speed)} m/s</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Pressure</p>
            <p className="text-3xl font-bold">{weather.main.pressure} hPa</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Visibility</p>
            <p className="text-3xl font-bold">{(weather.visibility / 1000).toFixed(1)} km</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">UV Index</p>
            <p className="text-3xl font-bold">-</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Clouds</p>
            <p className="text-3xl font-bold">{weather.clouds.all}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
