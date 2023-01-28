
import { SunOrMoon } from "./SunOrMoon"

// Clouds é um componente com dois props, limit e img
// limit é usado para definir um limite de divs que serão renderizados na tela
// imagem será usada para definir a o tipo de nuvem a ser renderizado
export const Clouds = (prop: {limit: number, img: string}) => {
    // cloudEffect é o efeito das nuvens que serão renderizadas na tela
    // cria um objeto contendo propriedades com valores aleatório para gerar uma
    // experiência de usuário única não padronizada
    const cloudEffect = () => {
        const top = Math.random() * (8 * 10);
        const width = (Math.random() * (400 - 150) + 150);
        const time = (Math.random() * (60 - 30) + 30);
        const cloudsStyle = {
            width: `${width}px`,
            height: 'auto',
            animation: `cloud ${time}s linear infinite`,
            top: `${top}px`,
            right: `-100%`,
        }
        // retorna o objeto criado na chamada de função
        return cloudsStyle
    }
    const cloudsData = [];
    // esse forloop gera as nuvens a serem mostradas na tela com um limite definido pelo prop limit
    // depois passa um objeto para cloudsData que armazena todo em um array
    for (let c = 0; c <= prop.limit; c++) {
        cloudsData[c] = {
            className: 'cloud',
            key: `cloud-key-${c}`,
            style: cloudEffect()
        }
    }
    return (
        <div className="Clouds">
            <div className="clouds-box">
                {
                    // executa um mapeamento no array cloudsData e retorna cada objeto
                    // criando elementos dinamicos
                    cloudsData.map(cloudData => {
                        return (
                            <img 
                                className={cloudData.className} 
                                key={cloudData.key}
                                style={cloudData.style}
                                src={`./imgs/${prop.img}.svg`}
                                alt="nuvem"
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

// Os componentes abaixo são variações do mesmo elemento cada um gera um cenario diferente
// de acordo com o clima atual todos são chamados pelo componente Scene.tsx
// cada um passa valores diferentes para o componente Clouds de acordo com as necessidades 
export const CloudsSun = () => {
    const backgroundColorStyle = {
        backgroundColor: '#b8d2da'
    }
    return (
        <div className="CloudsSun scene-main" style={backgroundColorStyle}>
            <Clouds limit={5} img={'nuvem'} />
            <SunOrMoon />
        </div>
    )
}

export const CloudsMoon = () => {
    const backgroundColorStyle = {
        backgroundColor: '#131212'
    }
    return (
        <div className="CloudsMoon scene-main" style={backgroundColorStyle}>
            <Clouds limit={5} img={'nuvemnoite'} />
            <SunOrMoon />
        </div>
    )
}

export const CloudsSunLight = () => {
    const backgroundColorStyle = {
        backgroundColor: '#d9d9d9'
    }
    return (
        <div className="CloudsSunLight scene-main" style={backgroundColorStyle}>
            <Clouds limit={5} img={'nuvem'} />
        </div>
    )
}

export const CloudsMoonLight = () => {
    const backgroundColorStyle = {
        backgroundColor: '#131212'
    }
    return (
        <div className="CloudsMoonLight scene-main" style={backgroundColorStyle}>
            <Clouds limit={5} img={'nuvemnoite'} />
        </div>
    )
}

export const CloudsSunHeavy = () => {
    const backgroundColorStyle = {
        backgroundColor: '#afb1b1'
    }
    return (
        <div className="CloudsSunHeavy scene-main" style={backgroundColorStyle}>
            <Clouds limit={5} img={'nuvemdiapesada'} />
        </div>
    )
}

export const CloudsMoonHeavy = () => {
    const backgroundColorStyle = {
        backgroundColor: '#131212'
    }
    return (
        <div className="CloudsMoonHeavy scene-main" style={backgroundColorStyle}>
            <Clouds limit={5} img={'nuvemnoitepesada'} />
        </div>
    )
}