import { React } from "react";
import './ButtonIcon.css';

const ButtonIcon = (props) => {
    return (
        <button className="button" onClick={() => {alert("Loged out!")}}>
            <img alt="" src={props.icon}/>
            <p className="buttonText">{props.text}</p>
        </button>
    )
}

export default ButtonIcon