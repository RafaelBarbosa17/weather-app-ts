
import { backgroundColorStyle } from "../backgroundScene";

let hour = new Date().getHours();

export const Thunderstorm = () => {
    if (hour >=6 && hour <= 18) {
        backgroundColorStyle.backgroundColor = '#989898'
    } else {

    }
    return (
        <div className="Thunderstorm scene-main" >
            <svg className='thunder' width="433" height="638" viewBox="0 0 433 638" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_121_33)">
                    <path d="M20.7922 297.53L26.3052 20.3712L89.8145 174.119L164.986 81.1076L207.501 297.695L280.203 202.091L412.098 617.003L256.057 348.681L191.15 476.413L118.619 204.365L20.7922 297.53Z" fill="#CAFD00"/>
                </g>
                <defs>
                    <filter id="filter0_d_121_33" x="0.792236" y="0.371338" width="431.305" height="636.632" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.792157 0 0 0 0 0.992157 0 0 0 0 0 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_33"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_33" result="shape"/>
                    </filter>
                </defs>
            </svg>
            <svg className='thunder-cloud' width="1330" height="200" viewBox="0 0 1258 581" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.73459 456.683C60.3313 339.503 201.786 140.297 354.829 280.913C345.833 212.923 364.196 89.5394 509.62 139.921C571.271 34.3332 736.804 -113.489 905.723 139.921C929.094 172.299 969.516 238.115 965.945 270.14C986.394 219.956 1044.19 164.531 1143.07 280.913C1250.88 407.815 1209.58 425.91 1179.72 422.175C1219.54 439.085 1304.45 487.678 1225.62 534.698C1141.16 585.079 1014.74 503.68 962.083 456.683C889.583 530.938 716.8 634.896 605.669 456.683C491.627 529.372 245.603 646.74 173.844 534.698C100.286 578.876 -35.718 625.121 8.73459 456.683Z" fill="#767676"/>
            </svg>
        </div>
    )
}