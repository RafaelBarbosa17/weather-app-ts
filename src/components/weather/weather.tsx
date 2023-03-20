
import { useEffect, useState } from 'react';
import { Loading } from './loading/loading';
import { Icon } from './Icon';
import { Scene } from './background-scene/Scene';
import { dayOrNight } from './DayOrNight';
import { MdLocationOn } from 'react-icons/md';
import { IoReloadCircle, IoWater } from 'react-icons/io5';
import { IoMdCloud } from 'react-icons/io';
import { SunRiseAndSet } from './SunRiseAndSet/SunRiseAndSet';
import './weather.css'

interface WeatherData {
    main: string;
    description: string;
    id: number;
}
interface WeatherMain {
    temp: number;
    feels_like: number;
    humidity: number
}
interface HourDate {
    hour: number,
    min: number
}
interface SunsetAndSunrise {
    sunrise: number
    sunset: number
}

interface Clouds {
    all: number
}

interface Weather {
    clouds: Clouds;
    weather: WeatherData;
    main: WeatherMain;
    sys: SunsetAndSunrise
    name: string;
}

// chave da api
const apiKey:string = (process.env.REACT_APP_SECRET_API_KEY as string)

export let formatedSunRiseAndSet: any;

export const Weather = () => { //eslint-disable-line
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState<Weather>({} as Weather);
    const [weatherData, setWeatherData] = useState<WeatherData>({} as WeatherData);
    const [tempWeather, setTempWeather] = useState<WeatherMain>({} as WeatherMain);
    const [sunRiseAndSet, setSunRiseAndSet] = useState<SunsetAndSunrise>({} as SunsetAndSunrise)
    const [weatherIcon, setWeatherIcon] = useState({} as WeatherData);
    const [hourDate, setHourDate] = useState<HourDate>({} as HourDate);

    // função executa chamada de api conforme os dados de latitude e longitude
    // e retorna os dados em formato JSON passando os para os estados dinâmicos
    const getWeatherData = async (lat:number, long:number) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${apiKey}&units=metric`);

        const data = await response.json();
        setWeather(data)
        // dataMain é igual a propriedade main de data
        const dataMain = data.main as WeatherMain;
        console.log(data)
        data.weather.map((obj: Pick<WeatherData, "main" | "description" | "id">) => {
            setWeatherData({
                main: obj.main,
                description: obj.description,
                id: obj.id
                // main: 'Rain',
                // description: 'Chovendo pacarai',
                // id: 520
            })
            return obj
        })
        setWeatherIcon(weatherData)
        setTempWeather({
            temp: dataMain.temp,
            feels_like: dataMain.feels_like,
            humidity: dataMain.humidity
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
                    <div className="weather-data">
                        <div className="weather-data-layer-top">
                            <h1 className="weather-degress">{Math.round(tempWeather.temp)} <span className='degress-icon'>º</span> </h1>
                            <Icon icon={weatherIcon} day={formatedSunRiseAndSet} />
                        </div>
                        <p className='weather-data-description'> {weatherData.description} </p>
                        <p className="city-location"> 
                            <MdLocationOn className='city-location-icon'/> 
                            {weather.name}
                        </p>
                        <div className="other-info">
                            <div className="humidity-box">
                                <div className="humidity-item">
                                    <IoWater className='humidity-icon'/>
                                    <span className="humidity"> {tempWeather.humidity}% </span>
                                </div>
                                <p className='humidity-legend'>Umidade</p>
                            </div>
                            <div className="info-clouds-box">
                                <div className="info-cloud-item">
                                    <IoMdCloud className='info-cloud-icon'/>
                                    <span className="info-cloud"> {weather.clouds.all}% </span>
                                </div>
                                <p className="info-cloud-legend">Nuvens</p>
                            </div>
                        </div>
                        <div className="weather-data-layer-bottom">
                            <h3 className="weather-time">
                                {h}:{m}
                            </h3>
                            <button onClick={reloadWeatherData} className="reload-button">
                                <IoReloadCircle className="reload-icon"/>
                            </button>
                        </div>
                    </div>
                    <SunRiseAndSet sras={formatedSunRiseAndSet} />
                </div>
            }
            <Scene data={weatherData} clouds={weather.clouds} day={dayOrNight(formatedSunRiseAndSet)} />

        </>
    )
}

