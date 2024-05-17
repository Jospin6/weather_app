import { RootState } from '../features/store'
const getWeather = (state: RootState) => state.weather.weather

export {
    getWeather
}