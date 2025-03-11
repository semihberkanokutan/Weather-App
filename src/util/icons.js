import cloudyIcon from '../assets/weather-icons/cloudy.png'
import drizzleIcon from '../assets/weather-icons/drizzle.png'
import foggyIcon from '../assets/weather-icons/foggy.png'
import rainShowerIcon from '../assets/weather-icons/heavy_rain.png'
import overcastIcon from '../assets/weather-icons/overcast.png'
import partlyCloudyIcon from '../assets/weather-icons/partly_cloudy.png'
import rainyIcon from '../assets/weather-icons/rainy.png'
import snowShowerIcon from '../assets/weather-icons/snow_shower.png'
import snowyIcon from '../assets/weather-icons/snowy.png'
import sunnyIcon from '../assets/weather-icons/sunny.png'
import thunderstormIcon from '../assets/weather-icons/thunderstorm.png'


import cloudyVideo from '../assets/weather-videos/cloudy.mp4'
import drizzleVideo from '../assets/weather-videos/drizzle.mp4'
import foggyVideo from '../assets/weather-videos/foggy.mp4'
import rainShowerVideo from '../assets/weather-videos/heavy_rain.mp4'
import overcastVideo from '../assets/weather-videos/overcast.mp4'
import partlyCloudyVideo from '../assets/weather-videos/partly_cloudy.mp4'
import rainyVideo from '../assets/weather-videos/rainy.mp4'
import snowShowerVideo from '../assets/weather-videos/heavy_snow.mp4'
import snowyVideo from '../assets/weather-videos/snowy.mp4'
import sunnyVideo from '../assets/weather-videos/sunny.mp4'
import thunderstormVideo from '../assets/weather-videos/storm.mp4'

const ICONS = {
    cloudy: cloudyIcon,
    drizzle: drizzleIcon,
    foggy: foggyIcon,
    rainShower: rainShowerIcon,
    overcast: overcastIcon,
    partlyCloudy: partlyCloudyIcon,
    rainy: rainyIcon,
    snowShower: snowShowerIcon,
    snowy: snowyIcon,
    sunny: sunnyIcon,
    thunderstorm: thunderstormIcon
}

const WEATHER_CODES = {
    0: {image: ICONS.sunny, context: "Sunny", video: sunnyVideo},
    1: {image: ICONS.partlyCloudy, context: "Partly Cloudy", video: partlyCloudyVideo},
    2: {image: ICONS.cloudy, context: "Cloudy", video: cloudyVideo},
    3: {image: ICONS.overcast, context: "Overcast", video: overcastVideo},
    45: {image: ICONS.foggy, context: "Foggy", video: foggyVideo},
    48: {image: ICONS.foggy, context: "Foggy", video: foggyVideo},
    51: {image: ICONS.drizzle, context: "Drizzly", video: drizzleVideo},
    53: {image: ICONS.drizzle, context: "Drizzly", video: drizzleVideo},
    55: {image: ICONS.drizzle, context: "Drizzly", video: drizzleVideo},
    56: {image: ICONS.drizzle, context: "Drizzly", video: drizzleVideo},
    57: {image: ICONS.drizzle, context: "Drizzly", video: drizzleVideo},
    61: {image: ICONS.rainy, context: "Rainy", video: rainyVideo},
    63: {image: ICONS.rainy, context: "Rainy", video: rainyVideo},
    65: {image: ICONS.rainy, context: "Rainy", video: rainyVideo},
    66: {image: ICONS.rainy, context: "Rainy", video: rainyVideo},
    67: {image: ICONS.rainy, context: "Rainy", video: rainyVideo},
    71: {image: ICONS.snowy, context: "Snowy", video: snowyVideo},
    73: {image: ICONS.snowy, context: "Snowy", video: snowyVideo},
    75: {image: ICONS.snowy, context: "Snowy", video: snowyVideo},
    77: {image: ICONS.snowy, context: "Snowy", video: snowyVideo},
    80: {image: ICONS.rainShower, context: "Rain Shower", video: rainShowerVideo},
    81: {image: ICONS.rainShower, context: "Rain Shower", video: rainShowerVideo},
    82: {image: ICONS.rainShower, context: "Rain Shower", video: rainShowerVideo},
    85: {image: ICONS.snowShower, context: "Snow Shower", video: snowShowerVideo},
    86: {image: ICONS.snowShower, context: "Snow Shower", video: snowShowerVideo},
    95: {image: ICONS.thunderstorm, context: "Storm", video: thunderstormVideo},
    96: {image: ICONS.thunderstorm, context: "Storm", video: thunderstormVideo},
    99: {image: ICONS.thunderstorm, context: "Storm", video: thunderstormVideo}
}



export default WEATHER_CODES