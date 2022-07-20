import './css-atomos/esquerda-direita.css'

import {BiCaretRight} from 'react-icons/bi'

const Direita = (props) => {

    return (
        <div className="direita" onClick={ () => {
            const mover = props.mover;
            mover.current.scrollLeft += mover.current.offsetWidth;
        }}>
            <BiCaretRight />
        </div>

    )
}

export default Direita;