import { iconImage, currentDate } from '../helpers/index'
export const WeatherInfos = ({ weather }: { weather: any }) => {

    return <div className="grid grid-cols-4 gap-6 h-[94vh]">
        <div className="col-span-2 relative">
            <div className="absolute left-[100px] bottom-[100px] 
            blackBgWithOpacity rounded-lg h-[auto] min-w-[200px] w-auto p-2 text-white">
                <div className="flex">
                    <div className="flex items-top ">
                        <span className="text-5xl font-[500]"> {weather?.main.temp} </span>
                        <span className="text-xl">°C</span>
                    </div>
                    <img src={iconImage(weather?.weather[0].icon)} alt="icon image" width="50" height="50"/>
                </div>
                <div className="text-2xl font-[500]"> {weather?.weather[0].description} </div>
                <div className="text-[17px] font-[200]"> {currentDate()} </div>
            </div>
        </div>
        <div className="col-span-2 flex justify-center pt-4">
            <div>
                <div className="rounded-lg h-[200px] w-[400px] bg-gray-400 mb-4">
                    <div>city name RW</div>
                    <div>
                        
                    </div>
                </div>
                <div className="rounded-lg h-[200px] w-[400px] bg-gray-400">

                </div>
            </div>
        </div>
    </div>
}