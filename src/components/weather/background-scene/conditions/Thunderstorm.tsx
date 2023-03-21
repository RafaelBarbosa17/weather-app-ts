
import { Clouds } from "./Clouds";

// componente que gera um cenário com trovões
export const Thunderstorm = (prop: {day: boolean, clouds: number}) => {
    let backgroundColorStyle = {
        backgroundColor: '',
    };
    if (prop.day) {
        backgroundColorStyle.backgroundColor = '#555555';
    } else {
        backgroundColorStyle.backgroundColor = '#252424';
    }
    return (
        <div className="Thunderstorm scene-main" style={backgroundColorStyle}>
            <div className="thunder-effect"></div>
            <Clouds limit={prop.clouds} img={prop.day ? 'nuvemdiapesada' : 'nuvemnoitepesada'}/>
        </div>
    )
}