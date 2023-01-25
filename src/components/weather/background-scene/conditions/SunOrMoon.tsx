
import {useState, useEffect} from 'react';

export const SunOrMoon = () => {
    const [hour, setHour] = useState(new Date().getHours());
    const [min, setMin] = useState(new Date().getMinutes());

    const updateHour = () => {
        setInterval(() => {
            setHour(new Date().getHours());
            setMin(new Date().getMinutes())
        }, 1000)
    }

    useEffect(() => {
        updateHour()
    }, [])

    const styleSoM = {
        width: '200px',
        height: '200px',
        transform: `rotate(${-(15 * hour + 180 + (min * 15 / 60))}deg)`
    }
    return (
        <div 
            className={hour <= 18 && hour >= 6 ? 'clear-sun-box' : 'clear-moon-box'} 
            style={styleSoM}
        ></div>
    )
}