
import { backgroundColorStyle } from "../backgroundScene"

const w = document.body.clientWidth;
const randomPos = () => Math.random() * w;
const randomTime = () => Math.random() * 5;

const generatePos:any = () => {
    return {
        position: 'absolute',
        backgroundColor: '#ffffff',
        width: '3px',
        height: '3px',
        left: randomPos(),
        animation: `drop ${randomTime()}s linear infinite`,
    }
}

export const Drizzle = () => {
    backgroundColorStyle.backgroundColor = "#a1a1a1"
    return (
        <div className="Drizzle scene-main" style={backgroundColorStyle}>
            <div className="drizzle-effect">
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
                <div className="drizzle-gout" style={generatePos()}></div>
            </div>
        </div>
    )
}
