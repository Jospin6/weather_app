
export const WeatherInfos = () => {
    return <div className="grid grid-cols-4 gap-6 h-[94vh]">
        <div className="col-span-2 relative bg-blue-600">
            <div className="absolute left-[100px] bottom-[100px] h-[auto] w-[500px]">
                <div className="bg-green-600">
                    <div className="flex items-top ">
                        <span className="text-5xl font-[500]">20</span>
                        <span className="text-xl">°C</span>
                    </div>
                    <div className="text-2xl font-[500]">Weather title</div>
                    <div className="text-[17px]">10:56  H:32°  L:18°</div>
                </div>
            </div>
        </div>
        <div className="col-span-2 bg-yellow-600 flex justify-center">
            <div>
                <div className="rounded-lg h-[200px] w-[400px] bg-gray-400 mb-4"></div>
                <div className="rounded-lg h-[200px] w-[400px] bg-gray-400"></div>
            </div>
        </div>
    </div>
}