import { RootState } from '../features/store'
import Clear from '../assets/images/Clear.jpg'
import Clouds from '../assets/images/Clouds.jpg'
import Drizzle from '../assets/images/Drizzle.jpg'
import Rain from '../assets/images/Rain.jpg'
import Snow from '../assets/images/Snow.jpg'
import Thunderstorm from '../assets/images/Thunderstorm.jpg'

const getWeather = (state: RootState) => state.weather.weather

const getquery = (state: RootState) => state.weather.query

const getEror = (state: RootState) => state.weather.error

const iconImage = (iconTitle: string): string => `https://openweathermap.org/img/wn/${iconTitle}@2x.png`

const currentDate = (): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const d = new Date();
    return `${days[d.getDay() - 1]}, ${d.getDate()} ${months[d.getMonth()]}`;
  }

const image = (imageTitle?: string): object => {
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
            return {backgroundImage: `url(${Clear})`}
    }
}

export {
    getWeather,
    getquery,
    image,
    iconImage,
    currentDate,
    getEror
}