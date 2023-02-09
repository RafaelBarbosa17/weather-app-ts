
import { BsFillSunFill, BsFillMoonFill, BsCloudDrizzleFill, BsCloudSun, BsCloud, BsCloudsFill, BsCloudMoon, BsSnow } from 'react-icons/bs';
import { IoIosThunderstorm } from 'react-icons/io';
import { WiDayRainMix, WiNightAltRainMix, WiSnowWind, WiRain } from 'react-icons/wi';
import './weather.css'

// tipagem
interface WeatherData {
    main: string;
    id: number;
}

// componente Icon que define o icone de clima de acordo com as condições atuais
export const Icon = (prop: { icon: WeatherData, day: boolean }) => {
    // a função rainDefinition define qual icone vai aparecer com base no tipo de chuva
    // a variavel verifica o id vindo dos dados da api e avalia qual a hora do dia para definir se é dia ou noite
    const rainDefinition = () => {
        if (prop.icon.id >= 500 && prop.icon.id < 520 && prop.icon.id !== 511) {
            if (prop.day) {
                return <WiDayRainMix/>
            }
            return <WiNightAltRainMix/>
        } else if (prop.icon.id === 511) {
            return <WiSnowWind/>
        } else if (prop.icon.id >= 520) {
            return <WiRain/>
        }
    }
    // a função cloudsDefinition faz o mesmo que rainDefinition porém para definição de clima quando o tempo está nublado
    const cloudsDefinition = () => {
        if (prop.icon.id === 801) {
            if (prop.day) {
                return <BsCloudSun/>
            }
            return <BsCloudMoon/>
        } else if (prop.icon.id === 802) {
            return <BsCloud/>
        } else if (prop.icon.id === 803 || prop.icon.id === 804) {
            return <BsCloudsFill/>
        }
    }
    // groupWeatherConditions é um objeto contendo todas as respostas para cada condição metereologica
    const groupWeatherConditions = {
        Clear: prop.day ? <BsFillSunFill className='sun-icon' /> : <BsFillMoonFill className='moon-icon' />,
        Thunderstorm: <IoIosThunderstorm className='cloud-icon' />,
        Drizzle: <BsCloudDrizzleFill className='cloud-icon'/>,
        Rain: rainDefinition(),
        Snow: <BsSnow className='snow-icon' />,
        Clouds: cloudsDefinition()
    }
    // weatherIcon pega de groupWeatherConditions somente o icone corerto a ser mostrado
    let weatherIcon = (groupWeatherConditions as any)[prop.icon.main];
    // console.log(icon.main)
    return <div className='weather-icon'> {weatherIcon} </div>
}