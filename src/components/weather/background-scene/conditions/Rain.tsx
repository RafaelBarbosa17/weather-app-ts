
import { SunOrMoon } from "./SunOrMoon";

const backgroundColorStyle = {
    backgroundColor: ''
}

export const RainDay = () => {
    return (
        <div className="RainDay scene-main" style={backgroundColorStyle}>
            <img className="nuvens" src="./imgs/gruponuvens.png" alt="" />
            <SunOrMoon />
        </div>
    )
}