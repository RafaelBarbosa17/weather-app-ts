
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
    let hour = new Date().getHours();
    hour = 10
    const sunInSky = {
        height: '100%',
        width: `${100 / timeSunInSky * (hour - props.sras.sunriseHour)}%`
    }

    const definteIconPos = () => {
        if (hour === 5) {
            return '60px'
        }
        else if (hour === 6) {
            return '30px'
        }
        else if (hour === 7) {
            return '15px'
        }
        else if (hour === 8) {
            return '5px'
        }
        else if (hour === 9) {
            return '-5px'
        }
        else if (hour === 10) {
            return '-10px'
        } 
        else if (hour === 11 || hour === 12) {
            return '-12px'
        }
        else if (hour === 13) {
            return '-10px'
        }
        else if (hour === 14) {
            return '-5px'
        }
        else if (hour === 15) {
            return '5px'
        }
        else if (hour === 16) {
            return '15px'
        }
        else if (hour === 17) {
            return '30px'
        }
        else if (hour === 18) {
            return '60px'
        }
    }

    const iconStyle = {
        translate: `12px  ${definteIconPos()}`
    }

    return (
        <div className="SunRiseAndSet">
            <h1 className="sras-title">Horário de Sol</h1>
            <div className="grafic-box">
                <div className="grafic-item">
                    <div className="grafic-selected" style={sunInSky}>
                        <BsFillSunFill style={iconStyle} />
                    </div>
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