
import { useEffect, useState } from "react";
import './clock.css';

// o componente Clock é responsavel por criar um relógio virtual que atualiza automaticamente
// o relógio contem ponteiros que estão corretamente alinhados com o hórario atual
export const Clock = () => {
    // variaveis de estado que armazenão um hórario que atualiza a cada segundo
    const [hour, setHour] = useState(new Date().getHours());
    const [min, setMin] = useState(new Date().getMinutes());
    const [sec, setSec] = useState(new Date().getSeconds());
    // updateHour é a função responsavel por atualizar o relógio
    const updateHour = () => {
        setInterval(() => {
            setHour(new Date().getHours());
            setMin(new Date().getMinutes());
            setSec(new Date().getSeconds());
            // console.log(sec)
        }, 1000)
    }
    // useEffect é responsavel por permitir a atualização do relógio sem sobrecarregar a página
    useEffect(() => {
        updateHour()
    }, [])

    // variaveis que transformam o orario em string
    let hs = hour.toString()
    let ms = min.toString()
    let ss = sec.toString()
    // formata a hora
    if(hs.length < 2) {
        hs = '0' + hs
    }
    if(ms.length < 2) {
        ms = '0' + ms
    }
    if(ss.length < 2) {
        ss = '0' + ss
    }
    // retorno do componente
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