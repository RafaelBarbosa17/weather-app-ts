
import { SunOrMoon } from "./SunOrMoon";
import '../backgroundScene.css';

const w = document.body.clientWidth + 100;

const RainEffect = (prop: { time: string, tp: string }) => {
    const rainStyleEffect = () => {
    const pos = (Math.random() * w) - 100;
    const time = prop.tp === 'rain' ? (Math.random() * (4 - 1) + 1) : (Math.random() * (10 - 5) + 5);
        return {
            left: `${pos}px`,
            animation: `drop ${time}s linear infinite`
        }
    }
    let limit:number = 150;
    const rainDatas = [];
    for (let r = 0; r <= limit; r++) {
        rainDatas[r] = {
            key: `rain-key-${r}`,
            className: `rain-effect ${prop.time}`,
            style: rainStyleEffect()
        }
    }
    //console.log(rainDatas)
    return (
        <div className={`rain-effects ${prop.time}`}>
            { rainDatas.map(rainData => {
                return (
                    <span 
                        className={rainData.className} 
                        style={rainData.style}
                        key={rainData.key}
                    ></span>
                )
            }) }
        </div>
    )
}

export const RainDaySun = () => {
    const backgroundColorStyle = {
        backgroundColor: '#a8cbcb'
    }
    return (
        <div className="RainDaySun scene-main" style={backgroundColorStyle}>
            <img className="nuvens" src="./imgs/gruponuvens.png" alt="" />
            <RainEffect time={'daysun'} tp={'rain'} />
            <SunOrMoon />
        </div>
    )
}

export const RainNightMoon = () => {
    const backgroundColorStyle = {
        backgroundColor: '#000'
    }
    return (
        <div className="RainDayMoon scene-main" style={backgroundColorStyle}>
            <img className="nuvens" src="./imgs/gruponuvensnoite.png" alt="" />
            <RainEffect time={'nightmoon'} tp={'rain'} />
            <SunOrMoon />
        </div>
    )
}

export const RainDay = () => {
    const backgroundColorStyle = {
        backgroundColor: '#c1c0c0'
    }
    return (
        <div className="RainDay scene-main" style={backgroundColorStyle}>
            <RainEffect time={'day'} tp={'rain'} />
        </div>
    )
}

export const RainNight = () => {
    const backgroundColorStyle = {
        backgroundColor: '#000000'
    }
    return (
        <div className="RainNight scene-main" style={backgroundColorStyle}>
            <RainEffect time={'night'} tp={'rain'} />
        </div>
    )
}

export const RainSnowDay = () => {
    const backgroundColorStyle = {
        backgroundColor: '#ffffff'
    }
    return (
        <div className="RainSnow scene-main" style={backgroundColorStyle}>
            <RainEffect time={'snowday'} tp={'snow'} />
        </div>
    )
}

export const RainSnowNight = () => {
    const backgroundColorStyle = {
        backgroundColor: '#000'
    }
    return (
        <div className="RainSnow scene-main" style={backgroundColorStyle}>
            <RainEffect time={'snownight'} tp={'snow'} />
        </div>
    )
}