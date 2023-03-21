
import { CloudsMoon } from './Clouds';

// Componente que gera um cenário com a lua em um céu limpo
export const ClearMoon = (prop: {all: number}) => {
    return (
        <div className="ClearMoon scene-main">
            <CloudsMoon all={prop.all} />
        </div>
    )
}