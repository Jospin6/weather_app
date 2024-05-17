import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface initial_state {
    loading: boolean,
    weather: any[],
    error: string
}

const initialState: initial_state = {
    loading: false,
    weather: [],
    error: ""
}

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (term: string = "Kigali") => {
    const city = term.toLowerCase()
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e3c940a324fe2ab50471d25876b2dd16`)
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
        .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.weather = action.payload
            state.error = ""
        })
        .addCase(fetchWeather.rejected, (state) => {
            state.loading = false
            state.weather = []
            state.error = "Rong request"
        })
    }
})


export default weather.reducer