
import { SunOrMoon } from './SunOrMoon';

// Componente que gera um cenário com a lua em um céu limpo
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