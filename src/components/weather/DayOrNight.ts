

interface SAS {
    sunriseHour: number
    sunriseMin: number
    sunsetHour: number
    sunsetMin: number
}

export const dayOrNight = (sas: SAS) => {
    let hour = new Date().getHours();
    let min = new Date().getMinutes()

    const updateHour = () => {
        let intervalID = setInterval(() => {
            hour = new Date().getHours();
            min = new Date().getMinutes()
        }, 60000)
        clearInterval(intervalID)
    }

    updateHour()

    let day:boolean;

    if ( 
        hour === sas.sunriseHour && 
        min >= sas.sunriseMin
    ) {
        day = true
    }
    else if (
        hour > sas.sunriseHour &&
        hour < sas.sunsetHour
    ) {
        day = true
    }
    else if (
        hour === sas.sunsetHour &&
        min <= sas.sunsetMin
    ) {
        day = true
    } else {
        day = false
    }
    //console.log(day)
    return day

}