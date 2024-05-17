import { useDispatch, useSelector } from "react-redux"
import { Navbar } from "./components/Navbar"
import { WeatherInfos } from "./components/WeatherInfos"
import { getquery, image } from './helpers/index'
import { useEffect } from "react"
import { AppDispatch, RootState } from './features/store'
import { fetchWeather } from './features/weatherSlice'
import { ErrorMessage } from "./components/ErrorMessage"

function App() {
  const { weather } = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch<AppDispatch>()
  const query = useSelector(getquery)
  useEffect(() => {
    dispatch(fetchWeather(query))
  }, [dispatch])
  const backImage = image(weather?.weather[0].main)
  const backgroundImage = {
    ...backImage,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  return (
    <>
      <div className="w-full h-[100vh]" style={backgroundImage}>
        <Navbar />
        {weather ? <WeatherInfos weather={weather} /> : <ErrorMessage />}

      </div>
    </>
  )
}

export default App
