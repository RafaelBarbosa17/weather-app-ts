
import { SunOrMoon } from "./SunOrMoon";
import { Clouds } from "./Clouds";

// RainEffect é um componente que gera o efeito de chuva na tela do usuario
// recebe três props time para definir qual clima será renderizado,
// tp para definir o tipo de chuva e img para definir qual tipo de nuvem será mostrada
export const RainEffect = (prop: { time: string, tp: string, img: string, clouds: number }) => {
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
            <img className="nuvens nuvens-1" src={`./imgs/grupo${prop.img}.svg`} alt="grupo de nuvens" />
            <img className="nuvens nuvens-2" src={`./imgs/grupo${prop.img}.svg`} alt="grupo de nuvens" />
            <Clouds limit={prop.clouds} img={prop.img} />
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
export const RainDaySun = (prop: {clouds: number}) => {
    const backgroundColorStyle = {
        backgroundColor: '#a8cbcb'
    }
    return (
        <div className="RainDaySun scene-main" style={backgroundColorStyle}>
            <RainEffect time={'daysun'} tp={'rain'} img={'nuvem'} clouds={prop.clouds} />
            <SunOrMoon />
        </div>
    )
}

export const RainNightMoon = (prop: {clouds: number}) => {
    const backgroundColorStyle = {
        backgroundColor: '#000'
    }
    return (
        <div className="RainNightMoon scene-main" style={backgroundColorStyle}>
            <RainEffect time={'nightmoon'} tp={'rain'} img={'nuvemnoite'}  clouds={prop.clouds}/>
            <SunOrMoon />
        </div>
    )
}

export const RainDay = (prop: {clouds: number}) => {
    const backgroundColorStyle = {
        backgroundColor: '#c1c0c0'
    }
    return (
        <div className="RainDay scene-main" style={backgroundColorStyle}>
            <RainEffect time={'day'} tp={'rain'} img={'nuvemdiapesada'} clouds={prop.clouds}/>
        </div>
    )
}

export const RainNight = (prop: {clouds: number}) => {
    const backgroundColorStyle = {
        backgroundColor: '#000000'
    }
    return (
        <div className="RainNight scene-main" style={backgroundColorStyle}>
            <RainEffect time={'night'} tp={'rain'} img={'nuvemnoitepesada'} clouds={prop.clouds}/>
        </div>
    )
}

export const RainSnowDay = (prop: {clouds: number}) => {
    const backgroundColorStyle = {
        backgroundColor: '#ffffff'
    }
    return (
        <div className="RainSnow scene-main" style={backgroundColorStyle}>
            <RainEffect time={'snowday'} tp={'snow'} img={'nuvem'} clouds={prop.clouds}/>
        </div>
    )
}

export const RainSnowNight = (prop: {clouds: number}) => {
    const backgroundColorStyle = {
        backgroundColor: '#000'
    }
    return (
        <div className="RainSnow scene-main" style={backgroundColorStyle}>
            <RainEffect time={'snownight'} tp={'snow'} img={'nuvemnoite'} clouds={prop.clouds}/>
        </div>
    )
}