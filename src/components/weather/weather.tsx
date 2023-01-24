
import { useEffect, useState } from 'react';
import { Loading } from './loading/loading';
import { Icon } from './Icon';
import './weather.css'


interface WeatherData {
    main: string;
    description: string;
    id: number;
}

interface WeatherMain {
    temp: number;
}

const apiKey:string = (process.env.REACT_APP_SECRET_API_KEY as string)
//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt_br&appid=${apiKey}

export const Weather = () => {
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState<WeatherData>({} as WeatherData);
    const [tempWeather, setTempWeather] = useState<WeatherMain>({} as WeatherMain);
    const [weatherIcon, setWeatherIcon] = useState({} as WeatherData);

    const getWeatherData = async (lat:number, long:number) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${apiKey}`);
        const data = await response.json();
        const dataMain = data.main as WeatherMain;
        //console.log(data)
        data.weather.map((obj: Pick<WeatherData, "main" | "description" | "id">) => {
            setWeatherData({
                main: obj.main,
                description: obj.description,
                id: obj.id
            })
            return obj
        })
        setWeatherIcon(weatherData)
        setTempWeather({
            temp: dataMain.temp
        })
        //console.log(weatherData)
        setLoading(false)
    }

    const getCurrentPosition = async () => {
        navigator.geolocation.getCurrentPosition(pos => {
            //console.log(pos)
            getWeatherData(pos.coords.latitude, pos.coords.longitude)
        })
    } 

    useEffect(() => {
        getCurrentPosition()
    }, [loading]) //eslint-disable-line

    let temperatura = Math.round(tempWeather.temp - 273.15);
    if (loading) {
        return <Loading />
    } else {
        return (
            <div className="Weather">
                <div className="weather-box">
                        <Icon icon={weatherIcon} />
                        <h1 className="weather"> {temperatura} </h1>
                        <span>ºC</span>
                    </div>
                    <div> {weatherData.description} </div>
            </div>
        )
    }

}