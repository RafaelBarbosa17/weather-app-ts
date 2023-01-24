
import { styles, backgroundColorStyle } from "../backgroundScene";

export const ClearSun = () => {
    backgroundColorStyle.backgroundColor = '#a6dcdc';
    return (
        <div className='ClearSun scene-main' style={backgroundColorStyle}>
            <div className="clear-sun-box" style={styles.sunBox}>
            </div>
        </div>
    )
}