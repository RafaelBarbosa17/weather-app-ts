
import { SunOrMoon } from "./SunOrMoon";

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