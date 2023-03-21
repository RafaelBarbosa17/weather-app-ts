
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
    day = dayOrNight(sras);

    // objetos de estilo
    // rotate usa 15 que é o valor de 180º divido por 12 que é o aproximadamente o tempo que demora para o sol nascer e se por
    // multiplica 15 pelo valor de hour que é a hora atual, mais 180 para posicionar o nascer do sol no local correto
    // soma min multiplicado por 15 / 60 para gerar a adição dos minutos a rotação do sol
    // e transforma todo o calculo em negativo para deixar a rotação no lado correto
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
        >
            <div 
                className={day ? 'sun' : 'moon'}
                style={day ? stylesSun : stylesMoon}
            ></div>
        </div>
    )
}