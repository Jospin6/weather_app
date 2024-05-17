import { SearchBar } from "./components/SearchBar"

function App() {

  return (
    <>
      <div className="w-full h-[100vh] bg-red-400 flex items-center justify-center">
          <div className="w-[400px] h-[500px] bg-blue-400">
            <SearchBar/>
          </div>
      </div>
    </>
  )
}

export default App
