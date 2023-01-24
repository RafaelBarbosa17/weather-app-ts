
import { styles, backgroundColorStyle } from "../backgroundScene";

export const ClearMoon = () => {
    backgroundColorStyle.backgroundColor = '#0a0b40'
    backgroundColorStyle.backgroundImage = "url(./src/imgs/clearmoonsky.jpg)"
    return (
        <div className="ClearMoon scene-main" style={backgroundColorStyle}>
            <div className="clear-moon-box" style={styles.moonBox}>
            </div>
        </div>
    )
}