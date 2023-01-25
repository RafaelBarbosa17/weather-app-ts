
import './backgroundScene.css'
// import { defineScene } from '../Icon';
import { ClearSun } from './conditions/ClearSun';
import { ClearMoon } from './conditions/ClearMoon';
import { Thunderstorm } from './conditions/Thunderstorm';
import { Drizzle } from './conditions/Drizzle';
import { RainDay } from './conditions/Rain';

export let hour = new Date().getHours();
hour = 12

const defineScene = {
    id: 500,
    main: 'Rain'
}

export const Scene = () => {

    const rainDefinition = () => {
        if (defineScene.id >= 500) {
            if (hour >= 6 && hour <= 18) {
                return <RainDay />
            } else {
                return 'Chuva com Lua'
            }
        } else if (defineScene.id === 511) {
            return 'Chuva de Neve'
        } else if (defineScene.id >= 520) {
            return 'Chuva'
        }
    }
    
    const cloudsDefinition = () => {
        if (defineScene.id === 801) {
            if (hour >= 6 && hour <= 18) {
                return 'Sol com Nuvem'
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

    return (
        <div className="background-scene">
            {groupWeatherConditions['Rain']}
            <div className="scene-box">
                <img className='scene-img' src="./imgs/cenario.svg" alt="" />
            </div>
        </div>
    )
}