import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import BasicInfo from './components/BasicInfo'
import DailyForecast from './components/DailyForecast'
import Air from './components/Air'
import WeeklyForecast from './components/WeeklyForecast'
import LoadingScreen from './components/LoadingScreen'
import WeatherVideo from './components/WeatherVideo.jsx'
import WEATHER_CODES from './util/icons.js'

const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 50px repeat(3, 1fr);
  height: 100%;
  padding: 3rem;
  gap: 2rem;
  //background: #243642;
  //opacity: 0.9;

  @media only screen and (max-width: 1025px) {
    display: flex;
    flex-direction: column;
  }

  & > * {

    &:first-child {
      border-radius: 12px;
    }

    
    //background: linear-gradient(#55679C, #7C93C3);
    background: linear-gradient(rgba(58, 16, 120, 0.9), rgba(78, 49, 170, 0.9));

    border-radius: 24px;
  }
  
`

const SearchBuild = styled.div`
  display: flex;
  padding-left: 8px; 
  gap: 12px;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    padding-left: 0;
    padding-top: 12px;
  }
`

const SearchBar = styled.input`
  width: 100%;
  background: linear-gradient(rgba(85, 103, 156, 0), rgba(124, 147, 195, 0));
  border: none;
  outline: none;
  //height: 50px;
  font-size: 20px;
  color: #fff;
  padding-left: 12px;

  @media only screen and (max-width: 1025px) {
    height: 50px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 1.1rem;
    padding-left: 0;
    text-align: center;
  }
`

const SearchButton = styled.button`
  cursor: pointer;
  background: #363062;
  border: none;
  border-radius: 0 8px 8px 0;
  color: #fff;
  font-size: 1.1rem;
  letter-spacing: 2px;
  padding-left: 24px;
  padding-right: 22px;
  height: 100%;

  &:hover {
    background: #4D4C7D;
  }

  @media only screen and (max-width: 576px) {
    font-size: 1rem;
    border-radius: 0 0 8px 8px;
    padding-left: 0;
    padding-right: 0;
  }
`



function App() {
  const GEOCODING_APIKEY = "CptEakTS0prrl5Sy8ahEvCVy5bQfxVzu76FPBhQH";
  const [city , setCity] = useState("")
  const [bigData, setBigData] = useState({
    cityName: "City",
    hourly: [0, 0, 0, 0, 0, 0],
    chanceOfRain: 0,
    airTemperature: 0,
    realFeel: 0,
    wind: 0,
    humidity: 0,
    uvIndex: 0,
    weekly: [
      {max: 0, min: 0},
      {max: 0, min: 0},
      {max: 0, min: 0},
      {max: 0, min: 0},
      {max: 0, min: 0},
      {max: 0, min: 0},
      {max: 0, min: 0}
    ],
    currentWeatherCode: 0,
    hourlyWeatherCodes: [0, 0, 0, 0, 0, 0],
    weeklyWeatherCodes: [0, 0, 0, 0, 0, 0, 0]
  })
  const [loading, setLoading] = useState(false)
  const [days, setDays] = useState([])

  let hourlyWeatherIcons = bigData.hourlyWeatherCodes.map((index) => {
    return (
      WEATHER_CODES[index]["image"]
    )
  })

  let weeklyWeatherIcons = bigData.weeklyWeatherCodes.map((index) => {
    return (
      WEATHER_CODES[index]["image"]
    )
  })

  let contextData = bigData.weeklyWeatherCodes.map((index) => {
    return (
      WEATHER_CODES[index]["context"]
    )
  })


  
  function handleEnter(e) {
    if (e.key == "Enter") {
      getWeatherData()
    }
  }

  function handleCity(e) {
    setCity(e.target.value)
  }

  async function getWeatherData() {
    setLoading(true)
    document.querySelector('body').style.overflowY = "hidden";
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, {
        headers: {
          'X-Api-Key': `${GEOCODING_APIKEY}`
        }
      })
      const data = await response.json()

      const latitude = data[0].latitude
      const longitude = data[0].longitude
      const geo_location_data = {"lat": latitude, "long": longitude}
      //setGeoData(geo_location_data)
      

      //const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
      const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=apparent_temperature,temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max`);
      const data2 = await response2.json()
      setLoading(false)
      

      const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      const www = weekday
      const d = new Date();
      let dayIndex = d.getDay()
      let first = []
      for (let i = dayIndex; i<7; i++) {
          first.push(weekday[i])
      }
      www.splice(dayIndex, 7-dayIndex)
      const editedDays = [...first, ...www]
      editedDays[0] = "Today"
      setDays(editedDays)
      



      setBigData({
        ...bigData,
        cityName: city,
        hourly: [
          Math.round(data2.hourly.temperature_2m[6]),
          Math.round(data2.hourly.temperature_2m[9]),
          Math.round(data2.hourly.temperature_2m[12]),
          Math.round(data2.hourly.temperature_2m[15]),
          Math.round(data2.hourly.temperature_2m[18]),
          Math.round(data2.hourly.temperature_2m[21])
        ],
        chanceOfRain: data2.current.precipitation,
        airTemperature: Math.round(data2.current.temperature_2m),
        realFeel: Math.round(data2.current.apparent_temperature),
        wind: data2.current.wind_speed_10m,
        humidity: data2.current.relative_humidity_2m,
        uvIndex: Math.round(data2.daily.uv_index_max[0]),
        weekly: [
          {max: Math.round(data2.daily.temperature_2m_max[0]), min: Math.round(data2.daily.temperature_2m_min[0])},
          {max: Math.round(data2.daily.temperature_2m_max[1]), min: Math.round(data2.daily.temperature_2m_min[1])},
          {max: Math.round(data2.daily.temperature_2m_max[2]), min: Math.round(data2.daily.temperature_2m_min[2])},
          {max: Math.round(data2.daily.temperature_2m_max[3]), min: Math.round(data2.daily.temperature_2m_min[3])},
          {max: Math.round(data2.daily.temperature_2m_max[4]), min: Math.round(data2.daily.temperature_2m_min[4])},
          {max: Math.round(data2.daily.temperature_2m_max[5]), min: Math.round(data2.daily.temperature_2m_min[5])},
          {max: Math.round(data2.daily.temperature_2m_max[6]), min: Math.round(data2.daily.temperature_2m_min[6])}
        ],
        currentWeatherCode: data2.current.weather_code,
        hourlyWeatherCodes: [
          data2.hourly.weather_code[6],
          data2.hourly.weather_code[9],
          data2.hourly.weather_code[12],
          data2.hourly.weather_code[15],
          data2.hourly.weather_code[18],
          data2.hourly.weather_code[21]
        ],
        weeklyWeatherCodes: data2.daily.weather_code
      })
      setCity("")
      document.querySelector('body').style.overflowY = "scroll";
    } catch {
      console.log("Data not found")
      alert("City not found! Please try again.")
      setLoading(false)
    }
    //console.log(data2)
    
  }



  return (
    <>
      <WeatherVideo videoSrc={WEATHER_CODES[bigData.currentWeatherCode]["video"]}/>
      <LoadingScreen isActive={loading ? "active" : null}/>
      <Container>
        <SearchBuild>
          <SearchBar 
            type='text' 
            onChange={handleCity} 
            onKeyDown={handleEnter} 
            value={city} 
            placeholder='Enter a city to check the forecasts'
          />
          <SearchButton onClick={getWeatherData}>Search</SearchButton>
        </SearchBuild>
        <BasicInfo 
          cityName={bigData.cityName} 
          temperature={bigData.airTemperature} 
          chanceOfRain={bigData.chanceOfRain}
          image={WEATHER_CODES[bigData.currentWeatherCode]["image"]}
        />
        <DailyForecast 
          tempData={bigData.hourly}
          imgSrcData={hourlyWeatherIcons}
        />
        <Air 
          apparentTemperature={bigData.realFeel}
          windSpeed={bigData.wind}
          humidity={bigData.humidity}
          uvIndex={bigData.uvIndex}
        />
        <WeeklyForecast 
          weeklyData={bigData.weekly} 
          daysData={days}
          imgSrcData={weeklyWeatherIcons}
          contextData={contextData}
        />
      </Container>
    </>
  )
}

export default App
