import { RootState } from '../features/store'
const getWeather = (state: RootState) => state.weather.weather
const getquery = (state: RootState) => state.weather.query

export {
    getWeather,
    getquery
}