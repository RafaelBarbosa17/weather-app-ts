
import './Scene.css'
import { ClearSun } from './conditions/ClearSun';
import { ClearMoon } from './conditions/ClearMoon';
import { Thunderstorm } from './conditions/Thunderstorm';
import { Drizzle } from './conditions/Drizzle';
import { RainDaySun, RainNightMoon, RainDay, RainNight, RainSnowDay, RainSnowNight } from './conditions/Rain';
import { CloudsMoon, CloudsMoonHeavy, CloudsMoonLight, CloudsSun, CloudsSunHeavy, CloudsSunLight } from './conditions/Clouds';
import { Snow } from './conditions/Snow';

// tipagem
interface Data {
    id: number
    main: string
}

// o componente Scene tem praticamente as mesma função que o componente Icons porém Scene gera cerios de acordo com o clima atual e o horário
export const Scene = (props: {data: Data, day: boolean, clouds: number}) => {
    //console.log(props.data)
    const rainDefinition = () => {
        if (props.data.id >= 500 && props.data.id < 520 && props.data.id !== 511) {
            if (props.day) {
                return <RainDaySun clouds={props.clouds} />
            }
            return <RainNightMoon  clouds={props.clouds}/>
        } else if (props.data.id === 511) {
            if (props.day) {
                return <RainSnowDay  clouds={props.clouds}/>
            }
            return <RainSnowNight  clouds={props.clouds}/>
        } else if (props.data.id >= 520) {
            if (props.day) {
                return <RainDay  clouds={props.clouds}/>
            }
            return <RainNight  clouds={props.clouds}/>
        }
    }

    const cloudsDefinition = () => {
        if (props.data.id === 801) {
            if (props.day) {
                return <CloudsSun all={props.clouds} />
            }
            return <CloudsMoon all={props.clouds} />
        } else if (props.data.id === 802) {
            if (props.day) {
                return <CloudsSunLight all={props.clouds} />
            }
            return <CloudsMoonLight all={props.clouds} />
            // return 'Nuvem Leve'
        } else if (props.data.id === 803 || props.data.id === 804) {
            if (props.day) {
                return <CloudsSunHeavy all={props.clouds} />
            }
            return <CloudsMoonHeavy all={props.clouds} />
        }
    }
    
    const groupWeatherConditions = {
        Clear: props.day ? <ClearSun all={props.clouds}/> : <ClearMoon all={props.clouds}/>,
        Thunderstorm: <Thunderstorm day={props.day} clouds={props.clouds} />,
        Drizzle: <Drizzle day={props.day} clouds={props.clouds} />,
        Rain: rainDefinition(),
        Snow: <Snow />,
        Clouds: cloudsDefinition()
    }

    let currentWeather = (groupWeatherConditions as any)[props.data.main]

    return (
        <div className="background-scene">
            {currentWeather}
        </div>
    )
}