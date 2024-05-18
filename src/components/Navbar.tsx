import { SearchBar } from "./SearchBar"

export const Navbar = () => {
    return <div className="w-full h-[50px] flex items-center justify-between px-6">
        <div className="md:text-xl text-[15px] text-white">Weather</div>
        <SearchBar/>
    </div>
}