
import {useState, useEffect} from 'react';
import { dayOrNight } from '../../DayOrNight';
import { formatedSunRiseAndSet } from '../../weather';

interface FormatedSunRiseAndSet {
    sunriseHour: number
    sunriseMin: number
    sunsetHour: number
    sunsetMin: number
}

// SunOrMoon é um elemento que atualiza a cada segundo posicionado o sol ou a lua
// de acordo com a hora do dia
let day: boolean;

export const SunOrMoon = () => {
    let sras: FormatedSunRiseAndSet = formatedSunRiseAndSet;
    const [hour, setHour] = useState(new Date().getHours());
    const [min, setMin] = useState(new Date().getMinutes());
    // updateHour é responsavel por atualizar e manter a hora e o minuto sempre corretos a cada segundo
    const updateHour = () => {
        setInterval(() => {
            setHour(new Date().getHours());
            setMin(new Date().getMinutes());
        }, 1000)
    }
    // useEffect é responsavel por atualizar a página e chamar updateHour sem gerar muito peso ao código
    useEffect(() => {
        updateHour()
    }, [])

    day = dayOrNight(sras);

    const sunriseInDec = Number((sras.sunriseHour) + (sras.sunriseMin) * 100 / 60 / 100);
    const sunsetInDec = Number((sras.sunsetHour) + (sras.sunsetMin) * 100 / 60 /100);

    const timeSunInSky = sunsetInDec - sunriseInDec;
    const degInHour = 180 / timeSunInSky;

    console.log(sunriseInDec, sunsetInDec)
    console.log(degInHour * hour)

    console.log(-((timeSunInSky * hour) + (min * timeSunInSky / 60)) + 90)

    // objetos de estilo
    // rotate usa 15 que é o valor de 180º divido por 12 que é o aproximadamente o tempo que demora para o sol nascer e se por
    // multiplica 15 pelo valor de hour que é a hora atual, mais 180 para posicionar o nascer do sol no local correto
    // soma min multiplicado por 15 / 60 para gerar a adição dos minutos a rotação do sol
    // e transforma todo o calculo em negativo para deixar a rotação no lado correto
    const styleS = {
        width: '20vw',
        height: '20vw',
        transform: `rotate(${-((degInHour * hour) + 180 + (min * degInHour / 60))}deg)`
    }
    const styleM = {
        width: '20vw',
        height: '20vw',
        transform: `rotate(${-(degInHour * hour + 180 + (min * degInHour / 60))}deg)`
    }
    const stylesSun:any = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxWidth: '150px',
        maxHeight: '150px',
        borderRadius: '50%',
        backgroundColor: '#ffa500',
        boxShadow: '0px 0px 100px 50px #ffa500', 
    }
    const stylesMoon:any = {
        position: 'absolute',
        width: '150px',
        height: '150px',
        backgroundSize: 'cover',
    }
    // retorna o sol ou a lua de acordo com horário
    return (
        <div 
            className={day ? 'clear-sun-box' : 'clear-moon-box'} 
            style={day ? styleS : styleM}
        >
            <div 
                className={day ? 'sun' : 'moon'}
                style={day ? stylesSun : stylesMoon}
            ></div>
        </div>
    )
}