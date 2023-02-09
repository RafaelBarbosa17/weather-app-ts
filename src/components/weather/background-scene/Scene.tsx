
import './Scene.css'
import { ClearSun } from './conditions/ClearSun';
import { ClearMoon } from './conditions/ClearMoon';
import { Thunderstorm } from './conditions/Thunderstorm';
import { Drizzle } from './conditions/Drizzle';
import { RainDaySun, RainNightMoon, RainDay, RainNight, RainSnowDay, RainSnowNight } from './conditions/Rain';
import { CloudsMoon, CloudsMoonHeavy, CloudsMoonLight, CloudsSun, CloudsSunHeavy, CloudsSunLight } from './conditions/Clouds';
import { Snow } from './conditions/Snow';
import { SceneImg } from './Scene-Image/SceneImage';

// tipagem
interface Data {
    id: number
    main: string
}

// o componente Scene tem praticamente as mesma função que o componente Icons porém Scene gera cerios de acordo com o clima atual e o horário
export const Scene = (prop: {data: Data, day: boolean}) => {
    //console.log(prop.data)
    const rainDefinition = () => {
        if (prop.data.id >= 500 && prop.data.id < 520 && prop.data.id !== 511) {
            if (prop.day) {
                return <RainDaySun />
            }
            return <RainNightMoon />
        } else if (prop.data.id === 511) {
            if (prop.day) {
                return <RainSnowDay />
            }
            return <RainSnowNight />
        } else if (prop.data.id >= 520) {
            if (prop.day) {
                return <RainDay />
            }
            return <RainNight />
        }
    }

    const cloudsDefinition = () => {
        if (prop.data.id === 801) {
            if (prop.day) {
                return <CloudsSun />
            }
            return <CloudsMoon />
        } else if (prop.data.id === 802) {
            if (prop.day) {
                return <CloudsSunLight />
            }
            return <CloudsMoonLight />
            // return 'Nuvem Leve'
        } else if (prop.data.id === 803 || prop.data.id === 804) {
            if (prop.day) {
                return <CloudsSunHeavy />
            }
            return <CloudsMoonHeavy />
        }
    }
    
    const groupWeatherConditions = {
        Clear: prop.day ? <ClearSun /> : <ClearMoon />,
        Thunderstorm: <Thunderstorm day={prop.day} />,
        Drizzle: <Drizzle day={prop.day} />,
        Rain: rainDefinition(),
        Snow: <Snow />,
        Clouds: cloudsDefinition()
    }

    let currentWeather = (groupWeatherConditions as any)[prop.data.main]

    return (
        <div className="background-scene">
            {currentWeather}
            <div className="scene-box">
                <SceneImg weatherCondition={prop.data.main} />
                {/* <img className='scene-img' src="./imgs/cenario.svg" alt="cenario" /> */}
            </div>
        </div>
    )
}