
import { useEffect, useState } from 'react';
import { Loading } from './loading/loading';
import { Icon } from './Icon';
import { Scene } from './background-scene/Scene';
import './weather.css'
import { dayOrNight } from './DayOrNight';

interface WeatherData {
    main: string;
    description: string;
    id: number;
}
interface WeatherMain {
    temp: number;
}
interface HourDate {
    hour: number,
    min: number
}
interface SunsetAndSunrise {
    sunrise: number
    sunset: number
}

// chave da api
const apiKey:string = (process.env.REACT_APP_SECRET_API_KEY as string)

export let formatedSunRiseAndSet: any;

export const Weather = () => {
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState<WeatherData>({} as WeatherData);
    const [tempWeather, setTempWeather] = useState<WeatherMain>({} as WeatherMain);
    const [sunRiseAndSet, setSunRiseAndSet] = useState<SunsetAndSunrise>({} as SunsetAndSunrise)
    const [weatherIcon, setWeatherIcon] = useState({} as WeatherData);
    const [hourDate, setHourDate] = useState<HourDate>({} as HourDate);

    // função executa chamada de api conforme os dados de latitude e longitude
    // e retorna os dados em formato JSON passando os para os estados dinâmicos
    const getWeatherData = async (lat:number, long:number) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${apiKey}`);
        const data = await response.json();
        // dataMain é igual a propriedade main de data
        const dataMain = data.main as WeatherMain;
        //console.log(data)
        data.weather.map((obj: Pick<WeatherData, "main" | "description" | "id">) => {
            setWeatherData({
                main: obj.main,
                description: obj.description,
                id: obj.id
                // main: 'Clear',
                // description: 'Limpo',
                // id: 0
            })
            return obj
        })
        setWeatherIcon(weatherData)
        setTempWeather({
            temp: dataMain.temp
        })
        setHourDate({
            hour: new Date().getHours(),
            min: new Date().getMinutes()
        })
        setSunRiseAndSet({
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
        })
        //console.log(weatherData)
        setLoading(false)
    }
    // obtém a localização do usúario e executa a chamada de função passando os dados para api
    const getCurrentPosition = async () => {
        navigator.geolocation.getCurrentPosition(pos => {
            // console.log(pos)
            getWeatherData(pos.coords.latitude, pos.coords.longitude)
        })
    } 

    const reloadWeatherData = () => {
        setLoading(true)
        getCurrentPosition()
    }

    // useEffect atualiza o app quando o estado de loading é alterado
    useEffect(() => {
        getCurrentPosition()
    }, [loading]) //eslint-disable-line

    // formata a hora adicionando um digito a mais qunado tem somente um digito
    let h = hourDate.hour < 10 ? `0${hourDate.hour}` : hourDate.hour;
    let m = hourDate.min < 10 ? `0${hourDate.min}` : hourDate.min;

    // transforma a temperatura em graus celsius
    let temperatura = Math.round(tempWeather.temp - 273.15);
    let sunrise = new Date(sunRiseAndSet.sunrise * 1000);
    let sunset = new Date(sunRiseAndSet.sunset * 1000);

    formatedSunRiseAndSet = {
        sunriseHour: sunrise.getHours(),
        sunriseMin: sunrise.getMinutes(),
        sunsetHour: sunset.getHours(),
        sunsetMin: sunset.getMinutes(),
    }

    //console.log(dayOrNight(formatedSunRiseAndSet))

    // retorna um icone de loading caso a variavel loanding seja verdadeiro
    return (
        <>
            {
                loading ?

                <Loading /> :

                <div className="Weather">
                    <div className="weather-box">
                            <Icon icon={weatherIcon} day={dayOrNight(formatedSunRiseAndSet)} />
                            <h1 className="weather"> {temperatura} </h1>
                            <span>ºC</span>
                        </div>
                        <div className='weather-description'> {weatherData.description} </div>
                        <div className='weather-hour-box'>
                            <div className="weather-hour">
                                {h}:{m}
                            </div>
                            <button className='reload-weather'
                                onClick={() => { reloadWeatherData() }}
                            >
                                <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 17.6328C10 17.6328 14.6507 10.1847 19.5 8.32244C23.8748 6.64242 27.192 6.47787 31.5 8.32244C36.0259 10.2603 38.2715 13.0229 40 17.6328C41.6311 21.9829 41.7174 25.2125 40 29.5293C38.2345 33.9671 35.9043 36.4751 31.5 38.3224C27.1785 40.1351 23.8883 39.9669 19.5 38.3224C14.7662 36.5485 10 29.5293 10 29.5293" stroke="black" strokeWidth="5"/>
                                    <path d="M6.86236 11.6779L18.9562 16.4203L8.80226 24.5226L6.86236 11.6779Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                        {/* <span>Em manutenção</span> */}
                </div>
            }
            <Scene data={weatherData} day={dayOrNight(formatedSunRiseAndSet)} />

        </>
    )
}

