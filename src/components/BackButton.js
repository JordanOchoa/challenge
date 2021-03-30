import { React } from "react";
import Back from '../Assets/Icons/Back.svg';
import './BackButton.css';

const BackButton = (props) => {
    return (
        <button onClick={props.goBack} className="goBack">
            <img className="img" src={Back} alt="" width="10" height="10"></img>
        </button>
    )
}

export default BackButton