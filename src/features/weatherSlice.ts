import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

type initial_state = {
    loading: boolean,
    weather: any[],
    error: string
}

const initialState = {
    loading: false,
    weather: [],
    error: ""
} as initial_state

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (term: string = "Kigali") => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&APPID=e3c940a324fe2ab50471d25876b2dd16`)
    .then(response => response.json())
    .catch(error => error.message)
})


const weather = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, state => {
            state.loading = true
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weather = action.payload
            state.error = ""
        })
        .addCase(fetchWeather.rejected, (state) => {
            state.loading = false
            state.weather = []
            state.error = "error somewhere"
        })
    }
})


export default weather.reducer