import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface initial_state {
    loading: boolean,
    weather: any,
    query: string
    error: string
}

const initialState: initial_state = {
    loading: false,
    weather: null,
    query: "kigali",
    error: ""
}

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (term: string) => {
    const city = term.toLowerCase()
    const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e3c940a324fe2ab50471d25876b2dd16`)
    if (!response.ok) {
        throw new Error("something went wrong")
    }
    const data = await response.json()
    return data
})


const weather = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        }
    },
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

export const { setQuery } = weather.actions

export default weather.reducer