
import {useState, useEffect} from 'react';

// SunOrMoon é um elemento que atualiza a cada segundo posicionado o sol ou a lua
// de acordo com a hora do dia
export const SunOrMoon = () => {
    const [hour, setHour] = useState(new Date().getHours());
    const [min, setMin] = useState(new Date().getMinutes());
    // updateHour é responsavel por atualizar e manter a hora e o minuto sempre corretos a cada segundo
    const updateHour = () => {
        setInterval(() => {
            setHour(new Date().getHours());
            setMin(new Date().getMinutes())
        }, 1000)
    }
    // useEffect é responsavel por atualizar a página e chamar updateHour sem gerar muito peso ao código
    useEffect(() => {
        updateHour()
    }, [])

    // objetos de estilo
    // rotate usa 15 que é o valor de 180º divido por 12 que é o aproximadamente o tempo que demora para o sol nascer e se por
    // multiplica 15 pelo valor de hour que é a hora atual, mais 180 para posicionar o nascer do sol no local correto
    // soma min multiplicado por 15 / 60 para gerar a adição dos minutos a rotação do sol
    // e transforma todo o calculo em negativo para deixar a rotação no lado correto
    const styleS = {
        width: '200px',
        height: '200px',
        transform: `rotate(${-(15 * hour + 180 + (min * 15 / 60))}deg)`
    }
    const styleM = {
        width: '200px',
        height: '200px',
        transform: `rotate(${-(15 * hour + (min * 15 / 60))}deg)`
    }
    // retorna o sol ou a lua de acordo com horário
    return (
        <div 
            className={hour <= 18 && hour >= 6 ? 'clear-sun-box' : 'clear-moon-box'} 
            style={hour <= 18 && hour >= 6 ? styleS : styleM}
        ></div>
    )
}