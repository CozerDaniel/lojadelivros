import './css-atomos/esquerda-direita.css'

import {BiCaretLeft} from 'react-icons/bi'

const Esquerda = (props) => {

    return (
        <div className="esquerda" onClick={() => {
            const mover = props.mover;
            mover.current.scrollLeft -= mover.current.offsetWidth;
        }}>
            <BiCaretLeft />
        </div>

    )
}

export default Esquerda;