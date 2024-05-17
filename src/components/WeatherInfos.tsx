import { iconImage, currentDate } from '../helpers/index'
export const WeatherInfos = ({ weather }: { weather: any }) => {

    return <div className="grid grid-cols-4 gap-6 h-[92vh]">
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
            <div className='text-white'>
                <div className="rounded-lg h-[150px] w-[400px] blackBgWithOpacity px-4 mb-4">
                    <div className='h-[4Opx] font-[500] text-3xl border-b-[1px] border-gray-200 leading-[40px] text-center'>
                        {`${weather?.name}, ${weather?.sys.country}`}
                    </div>
                    <div className='flex justify-between h-[100px] font-[500] pt-6'>
                        <div className='w-[100%] text-center'>
                            <div>HUMIDITY</div>
                            <div> {`${weather?.main.humidity} %`} </div>
                        </div>
                        <div className='w-[100%] text-center'>
                            <div>WIND</div>
                            <div> {`${weather?.wind.speed} m/s`} </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg h-[auto] text-xl font-[500] blackBgWithOpacity flex justify-between w-[400px] p-6">
                    <div>
                        <div>Lon</div>
                        <div>{(weather?.coord.lon)?.toFixed(1)}</div>
                    </div>
                    <div>
                        <div>Lat</div>
                        <div>{(weather?.coord.lat)?.toFixed(1)}</div>
                    </div>
                    <div>
                        <div>Deg</div>
                        <div>{weather?.wind.deg}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}