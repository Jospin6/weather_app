import { Navbar } from "./components/Navbar"
import { WeatherInfos } from "./components/WeatherInfos"

function App() {

  return (
    <>
      <div className="w-full h-[100vh] bg-red-400">
          <Navbar/>
          <WeatherInfos/>
      </div>
    </>
  )
}

export default App
