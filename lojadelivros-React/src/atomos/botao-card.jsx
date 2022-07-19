import React from "react";
import { useNavigate } from "react-router-dom";
import './css-atomos/botao-card.css'

const BotaoCard = (props) => {
    const navigate = useNavigate();
    return (
        <div>
           <button onClick={() =>{
                navigate(props.route)
            }} className="card-btn">
                saiba mais...
            </button>

        </div>
    )
}

export default BotaoCard;