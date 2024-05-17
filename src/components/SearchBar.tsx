import { useState } from 'react'
import search from '../assets/images/search.png'

export const SearchBar = () => {
    const [searchedValue, setSearchedValue] = useState("")
    const handleSearch = (e: any) => setSearchedValue(e.target.value)

    const searchCity = () => {

    }

    return <div className='flex bg-white h-[25px] w-[300px] rounded-lg'>
        <input type="text" value={searchedValue} onChange={handleSearch} placeholder="city name" className='mx-[5px] w-[90%] outline-none'/>
        <button onClick={searchCity}>
            <img src={search} alt="search" width="20" height="20" className='object-fit py-[2px] mr-2' />
        </button>
    </div>
}