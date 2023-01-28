
import { SunOrMoon } from "./SunOrMoon";
import { Clouds } from "./Clouds";

// RainEffect é um componente que gera o efeito de chuva na tela do usuario
// recebe três props time para definir qual clima será renderizado,
// tp para definir o tipo de chuva e img para definir qual tipo de nuvem será mostrada
const RainEffect = (prop: { time: string, tp: string, img: string }) => {
    const w = document.body.clientWidth + 100;
    const rainStyleEffect = () => {
    const pos = (Math.random() * w) - 100;
    const speed = prop.tp === 'rain' ? (Math.random() * (4 - 1) + 1) : (Math.random() * (10 - 5) + 5);
        return {
            left: `${pos}px`,
            animation: `drop ${speed}s linear infinite`
        }
    }
    // limit é o limite de número de gotas de chuva apresentadas na tela
    let limit:number = 150;
    const rainDatas = [];
    // cria um número de objeto com base no limite e passa para rainDatas
    for (let r = 0; r <= limit; r++) {
        rainDatas[r] = {
            key: `rain-key-${r}`,
            // prop.time é o nome de classe a ser usado no css
            className: `rain-effect ${prop.time}`,
            style: rainStyleEffect()
        }
    }
    //console.log(rainDatas)
    return (
        // prop.time é usado aqui para definir um nome de classe para ser usada no css
        // prop.img passa para src um valor e src busca esse valor no diretorio definido
        <div className={`rain-effects ${prop.time}`}>
            <img className="nuvens nuvens-1" src={`./imgs/grupo${prop.img}.svg`} alt="" />
            <img className="nuvens nuvens-2" src={`./imgs/grupo${prop.img}.svg`} alt="" />
            { rainDatas.map(rainData => {
                // rainDatas é mapeado e retorna todos os objetos criando elementos para serem renderizados
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

// assim como clouds todos os elementos abaixo são variações de um mesmo elemento, com base na necessidade
export const RainDaySun = () => {
    const backgroundColorStyle = {
        backgroundColor: '#a8cbcb'
    }
    return (
        <div className="RainDaySun scene-main" style={backgroundColorStyle}>
            <RainEffect time={'daysun'} tp={'rain'} img={'nuvens'} />
            <Clouds limit={3} img={'nuvem'} />
            <SunOrMoon />
        </div>
    )
}

export const RainNightMoon = () => {
    const backgroundColorStyle = {
        backgroundColor: '#000'
    }
    return (
        <div className="RainNightMoon scene-main" style={backgroundColorStyle}>
            <RainEffect time={'nightmoon'} tp={'rain'} img={'nuvensnoite'} />
            <Clouds limit={3} img={'nuvemnoite'} />
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
            <RainEffect time={'day'} tp={'rain'} img={'nuvenspesada'} />
            <Clouds limit={6} img={'nuvemdiapesada'} />
        </div>
    )
}

export const RainNight = () => {
    const backgroundColorStyle = {
        backgroundColor: '#000000'
    }
    return (
        <div className="RainNight scene-main" style={backgroundColorStyle}>
            <RainEffect time={'night'} tp={'rain'} img={'nuvensnoitepesada'} />
            <Clouds limit={6} img={'nuvemdiapesada'} />
        </div>
    )
}

export const RainSnowDay = () => {
    const backgroundColorStyle = {
        backgroundColor: '#ffffff'
    }
    return (
        <div className="RainSnow scene-main" style={backgroundColorStyle}>
            <RainEffect time={'snowday'} tp={'snow'} img={'nuvens'} />
        </div>
    )
}

export const RainSnowNight = () => {
    const backgroundColorStyle = {
        backgroundColor: '#000'
    }
    return (
        <div className="RainSnow scene-main" style={backgroundColorStyle}>
            <RainEffect time={'snownight'} tp={'snow'} img={'nuvensnoite'} />
        </div>
    )
}