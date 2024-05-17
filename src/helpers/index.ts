import { RootState } from '../features/store'
import Clear from '../assets/images/Clear.jpg'
import Clouds from '../assets/images/Clouds.jpg'
import Drizzle from '../assets/images/Drizzle.jpg'
import Rain from '../assets/images/Rain.jpg'
import Snow from '../assets/images/Snow.jpg'
import Thunderstorm from '../assets/images/Thunderstorm.jpg'

const getWeather = (state: RootState) => state.weather.weather
const getquery = (state: RootState) => state.weather.query

const image = (imageTitle: string): object => {
    switch (imageTitle) {
        case "Clear":
            return { backgroundImage: `url(${Clear})` }
        case "Clouds":
            return { backgroundImage: `url(${Clouds})` }
        case "Drizzle":
            return { backgroundImage: `url(${Drizzle})` }
        case "Rain":
            return { backgroundImage: `url(${Rain})` }
        case "Snow":
            return { backgroundImage: `url(${Snow})` }
        case "Thunderstorm":
            return { backgroundImage: `url(${Thunderstorm})` }
        default:
            return {}
    }
}

export {
    getWeather,
    getquery,
    image
}