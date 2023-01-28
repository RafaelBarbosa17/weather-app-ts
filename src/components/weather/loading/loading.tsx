
import './loading.css';
import { BsFillSunFill } from 'react-icons/bs';

// uma tela de loading simples para ser mostrada enquanto os dados da api ainda não foram carregados
export const Loading = () => {
    return (
        <div className="loading-box">
            <BsFillSunFill className='loading' />
            <span>Carregando...</span>
        </div>
    )
}