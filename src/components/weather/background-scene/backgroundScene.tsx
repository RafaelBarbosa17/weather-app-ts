
import './backgroundScene.css'
// import { defineScene } from '../Icon';
import { ClearSun } from './conditions/ClearSun';
import { ClearMoon } from './conditions/ClearMoon';
import { Thunderstorm } from './conditions/Thunderstorm';
import { Drizzle } from './conditions/Drizzle';
import { RainDaySun, RainNightMoon, RainDay, RainNight, RainSnowDay, RainSnowNight } from './conditions/Rain';
import { CloudsSun } from './conditions/Clouds';

export let hour = new Date().getHours();

interface DS {
    id: number
    main: string
}

const defineScene:DS = {
    id: 801,
    main: 'Clouds'
}



export const Scene = () => {
    const rainDefinition = () => {
        if (defineScene.id >= 500 && defineScene.id < 520 && defineScene.id !== 511) {
            if (hour >= 6 && hour <= 18) {
                return <RainDaySun />
            } else {
                return <RainNightMoon />
            }
        } else if (defineScene.id === 511) {
            if (hour >= 6 && hour <= 18) {
                return <RainSnowDay />
            } else {
                return <RainSnowNight />
            }
        } else if (defineScene.id >= 520) {
            if (hour >= 6 && hour <= 18) {
                return <RainDay />
            } else {
                return <RainNight />
            }
        }
    }
    
    const cloudsDefinition = () => {
        if (defineScene.id === 801) {
            if (hour >= 6 && hour <= 18) {
                return <CloudsSun />
            } else {
                return 'Lua com Nuvem'
            }
        } else if (defineScene.id === 802) {
            return 'Nuvem Leve'
        } else if (defineScene.id === 803 || defineScene.id === 804) {
            return 'Nuvem Pesada'
        }
    }
    
    const groupWeatherConditions = {
        Clear: hour >= 6 && hour <= 18 ? <ClearSun /> : <ClearMoon />,
        Thunderstorm: <Thunderstorm />,
        Drizzle: <Drizzle />,
        Rain: rainDefinition(),
        Snow: 'Neve',
        Clouds: cloudsDefinition()
    }
    //const w = document.body.clientWidth;
    //const h = document.body.clientHeight;

let currentWeather;
    switch (defineScene.main) {
        case 'Clear':
            currentWeather = groupWeatherConditions.Clear
            break;
        case 'Thunderstorm':
            currentWeather = groupWeatherConditions.Thunderstorm
            break;
        case 'Drizzle':
            currentWeather = groupWeatherConditions.Drizzle
            break;
        case 'Rain':
            currentWeather = groupWeatherConditions.Rain
            break;
        case 'Snow':
            currentWeather = groupWeatherConditions.Snow
            break;
        case 'Clouds':
            currentWeather = groupWeatherConditions.Clouds
            break;
    }
    //console.log(typeof currentWeather)

    return (
        <div className="background-scene">
            {currentWeather}
            <div className="scene-box">
                <img className='scene-img' src="./imgs/cenario.png" alt="" />
            </div>
        </div>
    )
}