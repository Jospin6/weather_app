import search from '../assets/images/search.png'
import {getquery} from '../helpers/index'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, setQuery } from '../features/weatherSlice'
import { AppDispatch } from '../features/store'

export const SearchBar = () => {
    const query = useSelector(getquery)
    const dispatch = useDispatch<AppDispatch>()
    const handleSearch = (e: any) => dispatch(setQuery(e.target.value))

    const searchCity = () => query !== "" && dispatch(fetchWeather(query))

    return <div className='flex bg-white h-[30px] w-[300px] rounded-lg'>
        <input type="text" value={query} onChange={handleSearch} placeholder="city name" className='mx-[5px] w-[90%] outline-none'/>
        <button onClick={searchCity}>
            <img src={search} alt="search" width="20" height="20" className='object-fit py-[2px] mr-2' />
        </button>
    </div>
}