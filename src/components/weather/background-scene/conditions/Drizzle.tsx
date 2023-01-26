
import { hour } from "../backgroundScene";
import '../backgroundScene.css';

let backgroundColorStyle = {
    backgroundColor: '',
    backgroundImage: ''
};

export const Drizzle = () => {
    backgroundColorStyle.backgroundColor = hour >= 6 && hour <= 18 ? "#a1a1a1" : '#000000' 
    return (
        <div className="Drizzle scene-main" style={backgroundColorStyle}>
            <div className="drizzle-effect">
            </div>
        </div>
    )
}
