
import { SunOrMoon } from "./SunOrMoon";

// componete que gera um cenário com dia com um céu limpo
export const ClearSun = () => {
    const backgroundColorStyle = {
        backgroundColor: '#a6dcdc'
    }
    return (
        <div className='ClearSun scene-main' style={backgroundColorStyle}>
            <SunOrMoon />
        </div>
    )
}