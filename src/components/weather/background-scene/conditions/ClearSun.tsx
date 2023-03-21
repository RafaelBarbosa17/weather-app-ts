
import { CloudsSun } from "./Clouds";

// componete que gera um cenário com dia com um céu limpo
export const ClearSun = (prop: {all: number}) => {
    return (
        <div className='ClearSun scene-main'>
            <CloudsSun all={prop.all} />
        </div>
    )
}