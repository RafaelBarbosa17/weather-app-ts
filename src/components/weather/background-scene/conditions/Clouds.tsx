
import { SunOrMoon } from "./SunOrMoon"

const Clouds = (prop: {limit: number, img: string}) => {
    const cloudEffect = () => {
        const top = Math.random() * (8 * 10);
        const width = (Math.random() * (400 - 150) + 150);
        const time = (Math.random() * (60 - 30) + 30);
        const cloudsStyle = {
            width: `${width}px`,
            height: 'auto',
            animation: `cloud ${time}s linear infinite`,
            top: `${top}px`,
            right: `-50%`,
        }
        return cloudsStyle
    }
    const cloudsData = [];
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
                    cloudsData.map(cloudData => {
                        return (
                            <img 
                                className={cloudData.className} 
                                key={cloudData.key}
                                style={cloudData.style}
                                src={`./imgs/${prop.img}.png`}
                                alt="nuvem"
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

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
            <Clouds limit={5} img={'nuvempesada'} />
        </div>
    )
}

export const CloudsMoonHeavy = () => {
    const backgroundColorStyle = {
        backgroundColor: '#131212'
    }
    return (
        <div className="CloudsMoonHeavy scene-main" style={backgroundColorStyle}>
            <Clouds limit={5} img={'nuvempesadanoite'} />
        </div>
    )
}