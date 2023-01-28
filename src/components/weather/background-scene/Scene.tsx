
import './backgroundScene.css'
import { ClearSun } from './conditions/ClearSun';
import { ClearMoon } from './conditions/ClearMoon';
import { Thunderstorm } from './conditions/Thunderstorm';
import { Drizzle } from './conditions/Drizzle';
import { RainDaySun, RainNightMoon, RainDay, RainNight, RainSnowDay, RainSnowNight } from './conditions/Rain';
import { CloudsMoon, CloudsMoonHeavy, CloudsMoonLight, CloudsSun, CloudsSunHeavy, CloudsSunLight } from './conditions/Clouds';
import { Snow } from './conditions/Snow';
import { useEffect, useState } from 'react';

// tipagem
interface Data {
    id: number
    main: string
}

// o componente Scene tem praticamente as mesma função que o componente Icons porém Scene gera cerios de acordo com o clima atual e o horário
export const Scene = (prop: {data: Data}) => {
    const [hour, setHour] = useState(new Date().getHours())
    const updateHour = () => {
        setInterval(() => {
            setHour(new Date().getHours())
        }, 60000)
    }

    useEffect(() => {
        updateHour()
    }, [])
    
    console.log(prop.data)
    const rainDefinition = () => {
        if (prop.data.id >= 500 && prop.data.id < 520 && prop.data.id !== 511) {
            if (hour >= 6 && hour <= 18) {
                return <RainDaySun />
            } else {
                return <RainNightMoon />
            }
        } else if (prop.data.id === 511) {
            if (hour >= 6 && hour <= 18) {
                return <RainSnowDay />
            } else {
                return <RainSnowNight />
            }
        } else if (prop.data.id >= 520) {
            if (hour >= 6 && hour <= 18) {
                return <RainDay />
            } else {
                return <RainNight />
            }
        }
    }
    
    const cloudsDefinition = () => {
        if (prop.data.id === 801) {
            if (hour >= 6 && hour <= 18) {
                return <CloudsSun />
            } else {
                return <CloudsMoon />
            }
        } else if (prop.data.id === 802) {
            if (hour >= 6 && hour <= 18) {
                return <CloudsSunLight />
            } else {
                return <CloudsMoonLight />
            }
            // return 'Nuvem Leve'
        } else if (prop.data.id === 803 || prop.data.id === 804) {
            if (hour >= 6 && hour <= 18) {
                return <CloudsSunHeavy />
            } else {
                return <CloudsMoonHeavy />
            }
            //return 'Nuvem Pesada'
        }
    }
    
    const groupWeatherConditions = {
        Clear: hour >= 6 && hour <= 18 ? <ClearSun /> : <ClearMoon />,
        Thunderstorm: <Thunderstorm />,
        Drizzle: <Drizzle />,
        Rain: rainDefinition(),
        Snow: <Snow />,
        Clouds: cloudsDefinition()
    }

    let currentWeather = (groupWeatherConditions as any)[prop.data.main]

    return (
        <div className="background-scene">
            {currentWeather}
            <div className="scene-box">
                <img className='scene-img' src="./imgs/cenario.svg" alt="" />
            </div>
        </div>
    )
}