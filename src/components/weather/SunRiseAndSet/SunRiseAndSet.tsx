
import { BsSunrise, BsSunset, BsFillSunFill } from "react-icons/bs"
import './SunRiseAndSet.css'

interface SAS {
    sunriseHour: number
    sunriseMin: number
    sunsetHour: number
    sunsetMin: number
}

export const SunRiseAndSet = (props: {sras: SAS}) => {

    const formatedHour = (n: number) => {
        if(n < 10) {
            return `0${n}`
        }
        return n
    };
    const f = formatedHour;

    const timeSunInSky:number = props.sras.sunsetHour - props.sras.sunriseHour;
    // console.log(timeSunInSky)
    const hour = new Date().getHours();

    const sunInSky = {
        height: '100%',
        width: `${100 / timeSunInSky * (hour - props.sras.sunriseHour)}%`
    }

    return (
        <div className="SunRiseAndSet">
            <h1 className="sras-title">Horário de Sol</h1>
            <div className="grafic-box">
                <div className="grafic-item" style={sunInSky}>
                    <BsFillSunFill />
                </div>
            </div>
            <div className="times">
                <div className="sunrise">
                    <BsSunrise className="sunrise-icon" />
                    <p className="sras-time">
                        { `${f(props.sras.sunriseHour)}:${f(props.sras.sunriseMin)}` }
                    </p>
                </div>
                <div className="sunset">
                    <BsSunset className="sunset-icon" />
                    <p className="sras-time">
                        {`${f(props.sras.sunsetHour)}:${f(props.sras.sunsetMin)}`}
                    </p>
                </div>
            </div>
        </div>
    )
}