
import { BsFillSunFill, BsFillMoonFill, BsCloudDrizzleFill, BsCloudSun, BsCloud, BsCloudsFill, BsCloudMoon, BsSnow } from 'react-icons/bs';
import { IoIosThunderstorm } from 'react-icons/io';
import { WiDayRainMix, WiNightAltRainMix, WiSnowWind, WiRain } from 'react-icons/wi';
import './weather.css'

interface WeatherData {
    main: string;
    id: number;
}

interface WeatherIcon {
    icon: WeatherData
}

export const Icon = ({ icon }:WeatherIcon) => {
    let hour = new Date().getHours();
    let weatherIcon;

    const rainDefinition = () => {
        if (icon.id >= 500) {
            if (hour >= 6 && hour <= 18) {
                return <WiDayRainMix/>
            } else {
                return <WiNightAltRainMix/>
            }
        } else if (icon.id === 511) {
            return <WiSnowWind/>
        } else if (icon.id >= 520) {
            return <WiRain/>
        }
    }

    const cloudsDefinition = () => {
        if (icon.id === 801) {
            if (hour >= 6 && hour <= 18) {
                return <BsCloudSun/>
            } else {
                return <BsCloudMoon/>
            }
        } else if (icon.id === 802) {
            return <BsCloud/>
        } else if (icon.id === 803 || icon.id === 804) {
            return <BsCloudsFill/>
        }
    }
    
    const groupWeatherConditions = {
        Clear: hour >= 6 && hour <= 18 ? <BsFillSunFill className='sun' /> : <BsFillMoonFill className='moon' />,
        Thunderstorm: <IoIosThunderstorm className='cloud' />,
        Drizzle: <BsCloudDrizzleFill className='cloud'/>,
        Rain: rainDefinition(),
        Snow: <BsSnow className='snow' />,
        Clouds: cloudsDefinition()
    }

    weatherIcon = (groupWeatherConditions as any)[icon.main];
    // console.log(icon.main)

    return <div className='weather-icon'> {weatherIcon} </div>
}