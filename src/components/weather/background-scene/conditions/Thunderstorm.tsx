
import { hour } from "../backgroundScene";
import '../backgroundScene.css';

let backgroundColorStyle = {
    backgroundColor: '',
};

export const Thunderstorm = () => {
    if (hour >=6 && hour <= 18) {
        backgroundColorStyle.backgroundColor = '#555555';
    } else {
        backgroundColorStyle.backgroundColor = '#252424';
    }
    return (
        <div className="Thunderstorm scene-main" style={backgroundColorStyle}>
            <div className="thunder-effect"></div>
        </div>
    )
}