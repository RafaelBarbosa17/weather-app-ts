
import { useEffect, useState } from "react";
import './clock.css'

export const Clock = () => {
    const [hour, setHour] = useState(new Date().getHours());
    const [min, setMin] = useState(new Date().getMinutes());
    const [sec, setSec] = useState(new Date().getSeconds());

    const updateHour = () => {
        setInterval(() => {
            setHour(new Date().getHours());
            setMin(new Date().getMinutes());
            setSec(new Date().getSeconds());
            // console.log(sec)
        }, 1000)
    }

    useEffect(() => {
        updateHour()
    }, [])

    let hs = hour.toString()
    let ms = min.toString()
    let ss = sec.toString()

    if(hs.length < 2) {
        hs = '0' + hs
    }
    if(ms.length < 2) {
        ms = '0' + ms
    }
    if(ss.length < 2) {
        ss = '0' + ss
    }

    return (
        <div className="clock-container">
            <div className="clock-box">
                <div className="clock">
                    <div className="s" style={{ transform: `rotate(${6 * sec + 270}deg)` }}></div>
                    <div className="m" style={{ transform: `rotate(${6 * min + 270}deg)` }}></div>
                    <div className="h" style={{ transform: `rotate(${30 * hour + 270}deg)` }}></div>
                    <div className="numbers">
                        <span> <b>12</b> </span>
                        <span> <b>1</b> </span>
                        <span> <b>2</b> </span>
                        <span> <b>3</b> </span>
                        <span> <b>4</b> </span>
                        <span> <b>5</b> </span>
                        <span> <b>6</b> </span>
                        <span> <b>7</b> </span>
                        <span> <b>8</b> </span>
                        <span> <b>9</b> </span>
                        <span> <b>10</b> </span>
                        <span> <b>11</b> </span>
                    </div>
                </div>
            </div>
            <div className="format-hour">
                <span> {hs}:{ms}:{ss} </span>
            </div>
        </div>
    )
}