
// componente que gera um cenário com trovões
export const Thunderstorm = () => {
    let hour = new Date().getHours()
    let backgroundColorStyle = {
        backgroundColor: '',
    };
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