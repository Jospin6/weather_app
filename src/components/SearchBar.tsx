import search from '../assets/images/search.png'

export const SearchBar = () => {
    return <div className='flex bg-white h-[25px] w-[300px] rounded-lg'>
        <input type="text" placeholder="city name" className='mx-[5px] w-[90%] outline-none'/>
        <img src={search} alt="search" width="20" height="20" className='object-fit py-[2px] mr-2' />
    </div>
}