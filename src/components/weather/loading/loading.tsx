
import './loading.css';
import { BsFillSunFill } from 'react-icons/bs';

export const Loading = () => {
    return (
        <div className="loading-box">
            <BsFillSunFill className='loading' />
            <span>Carregando...</span>
        </div>
    )
}