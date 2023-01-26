
import { SunOrMoon } from "./SunOrMoon";
import '../backgroundScene.css';

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