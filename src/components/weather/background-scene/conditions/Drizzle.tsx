
// gera um cenário com tempo nublado e uma chuva fraca ou garoa como chamado em alguns lugares

import { RainEffect } from "./Rain";

export const Drizzle = (prop: {day: boolean, clouds: number}) => {
    let backgroundColorStyle = {
        backgroundColor: '',
    };
    backgroundColorStyle.backgroundColor = prop.day ? "#a1a1a1" : '#000000' 
    return (
        <div className="Drizzle scene-main" style={backgroundColorStyle}>
            <div className="drizzle-effect">
            </div>
            <RainEffect time="drizzle" tp="drizzle" img="nuvem" clouds={prop.clouds} />
        </div>
    )
}
