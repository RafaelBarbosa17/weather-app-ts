
// import './Layers.css'

export const SceneImg = (props: {weatherCondition: string}) => {

    // código em desenvolvimento

    // const layersClassNames = {
    //     layer1: {
    //         className: 'layer layer1 ' + props.weatherCondition
    //     },
    //     layer2: {
    //         className: 'layer layer2 ' + props.weatherCondition
    //     },
    //     layer25: {
    //         className: 'layer layer2-5 ' + props.weatherCondition
    //     },
    //     layer3: {
    //         className: 'layer layer3 ' + props.weatherCondition
    //     },
    //     layer35: {
    //         className: 'layer layer3-5 ' + props.weatherCondition
    //     },
    //     layer4: {
    //         className: 'layer layer4 ' + props.weatherCondition
    //     },
    //     layer5: {
    //         className: 'layer layer5 ' + props.weatherCondition
    //     },
    // }
    // const lcn = layersClassNames;

    const widthScreen = document.body.clientWidth;
    console.log(widthScreen)

    let backgroundImg;
    if (widthScreen > 1000) {
        backgroundImg = <img className='scene-img' src="./imgs/cenario-grande.svg" alt="ceraio de fundo" />
    }
    else if (widthScreen <= 1000 && widthScreen > 425) {
        backgroundImg = <img className='scene-img' src="./imgs/cenario.svg" alt="ceraio de fundo" />
    }
    else if (widthScreen <= 425) {
        backgroundImg = <img className='scene-img-little' src='./imgs/cenario-pequeno.svg' alt="ceraio de fundo" />
    }

    return (
        <div className="SceneImg">
            {backgroundImg}
        </div>
    )
}