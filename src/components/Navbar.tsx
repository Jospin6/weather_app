import { SearchBar } from "./SearchBar"

export const Navbar = () => {
    return <div className="w-full h-[40px] flex items-center justify-between px-6 bg-blue-800">
        <div>title</div>
        <SearchBar/>
    </div>
}