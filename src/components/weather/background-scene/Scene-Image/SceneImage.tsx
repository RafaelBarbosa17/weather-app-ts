
export const SceneImg = (props: {weatherCondition: string}) => {

    const widthScreen = document.body.clientWidth;
    //console.log(widthScreen)

    let backgroundImg;
    if (widthScreen > 1000) {
        backgroundImg = <img className='scene-img' src={`./imgs/cenarios/cenario-grande.svg`} alt="ceraio de fundo" />
    }
    else if (widthScreen <= 1000 && widthScreen > 425) {
        backgroundImg = <img className='scene-img' src={`./imgs/cenarios/cenario-padrão.svg`} alt="ceraio de fundo" />
    }
    else if (widthScreen <= 425) {
        backgroundImg = <img className='scene-img-little' src={`./imgs/cenarios/cenario-pequeno.svg`} alt="ceraio de fundo" />
    }

    return (
        <div className="SceneImg">
            {backgroundImg}
        </div>
    )
}