
import { SunOrMoon } from './SunOrMoon';
import '../backgroundScene.css';

export const ClearMoon = () => {
    const backgroundColorStyle = {
        backgroundColor: '#a6dcdc'
    }

    return (
        <div className="ClearMoon scene-main" style={backgroundColorStyle}>
            <SunOrMoon />
        </div>
    )
}