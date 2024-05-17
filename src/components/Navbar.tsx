import { SearchBar } from "./SearchBar"

export const Navbar = () => {
    return <div className="w-full h-[40px] flex items-center justify-between px-6">
        <div className="text-xl text-white">Weather</div>
        <SearchBar/>
    </div>
}