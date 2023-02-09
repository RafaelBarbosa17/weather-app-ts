
// gera um cenário com tempo nublado e uma chuva fraca ou garoa como chamado em alguns lugares
// 
export const Drizzle = (prop: {day: boolean}) => {
    let backgroundColorStyle = {
        backgroundColor: '',
    };
    // pega a hora atual na hora da utilização do componente para criar um cenário diferente com base nisso
    let hour = new Date().getHours()
    backgroundColorStyle.backgroundColor = hour >= 6 && hour <= 18 ? "#a1a1a1" : '#000000' 
    return (
        <div className="Drizzle scene-main" style={backgroundColorStyle}>
            <div className="drizzle-effect">
            </div>
        </div>
    )
}
