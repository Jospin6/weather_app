import { createSlice, createAsyncThunk, PayloadAction, isRejectedWithValue } from '@reduxjs/toolkit'

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
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e3c940a324fe2ab50471d25876b2dd16`)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .then(data => data)
    .catch(error => isRejectedWithValue(error.message))
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
        .addCase(fetchWeather.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.weather = []
            state.error = action.payload
        })
    }
})

export const { setQuery } = weather.actions

export default weather.reducer