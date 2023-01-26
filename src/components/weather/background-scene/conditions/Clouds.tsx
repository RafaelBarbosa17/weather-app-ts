
import { SunOrMoon } from "./SunOrMoon"

const Clouds = () => {
    const h = document.body.clientHeight - 250;
    const cloudEffect = () => {
        const top = Math.random() * 8 * 10;
        const width = (Math.random() * (400 - 250) + 250);
        const time = (Math.random() * (60 - 30) + 40);
        const cloudsStyle = {
            width: `${width}px`,
            height: 'auto',
            animation: `cloud ${time}s linear infinite`,
            top: `${top}px`,
            right: `-${width}px`,
        }
        return cloudsStyle
    }


    let limit = 10;
    const cloudsData = [];
    for (let c = 0; c <= limit; c++) {
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
                                src="./imgs/nuvem.png"
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
            <Clouds />
            <SunOrMoon />
        </div>
    )
}