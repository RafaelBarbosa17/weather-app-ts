
import { useEffect, useState } from 'react';
import { Loading } from './loading/loading';
import { Icon } from './Icon';
import { Scene } from './background-scene/backgroundScene';
import './weather.css'

// interface para tipagem para typescript;
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

// chave da api com valor secreto
const apiKey:string = (process.env.REACT_APP_SECRET_API_KEY as string)

// componente que renderiza as informações do clima atual na sua localização;
export const Weather = () => {
    // estados dinâmicos para serem atualizados conforme as respostas da api
    // os estados utilizão tipagem
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState<WeatherData>({} as WeatherData);
    const [tempWeather, setTempWeather] = useState<WeatherMain>({} as WeatherMain);
    const [weatherIcon, setWeatherIcon] = useState({} as WeatherData);
    const [hourDate, setHourDate] = useState<HourDate>({} as HourDate);

    // função executa chamada de api conforme os dados de latitude e longitude
    // e retorna os dados em formato JSON passando os para os estados dinâmicos
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
        setHourDate({
            hour: new Date().getHours(),
            min: new Date().getMinutes()
        })
        // console.log(weatherData)
        setLoading(false)
    }
    // obtém a localização do usúario e executa a chamada de função passando os dados para api
    const getCurrentPosition = async () => {
        navigator.geolocation.getCurrentPosition(pos => {
            //console.log(pos)
            getWeatherData(pos.coords.latitude, pos.coords.longitude)
        })
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

    // retorna um icone de loading caso a variavel loanding seja verdadeiro
    if (loading) {
        return <Loading />
    } else {
        return (
            <>
            <div className="Weather">
                <div className="weather-box">
                        <Icon icon={weatherIcon} />
                        <h1 className="weather"> {temperatura} </h1>
                        <span>ºC</span>
                    </div>
                    <div className='weather-description'> {weatherData.description} </div>
                    <div className='weather-hour'> {h} : {m} </div>
            </div>
            <Scene data={weatherData}/>
            </>
        )
    }
}

