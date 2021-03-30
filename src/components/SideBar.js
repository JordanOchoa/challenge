import { React } from "react";
import './SideBar.css';
import logo from '../Assets/logo.png';
import avatar from '../Assets/avatar.png';
import Logout from '../Assets/Icons/Logout.svg';
import ButtonIcon from './ButtonIcon'

const SideBar = () => {
    return (
        <div className="sideBar">
            <img alt="" src={logo}  className="logo"/>
            <img alt="" src={avatar}  className="avatar"/>
            <p className="userName">ASH123</p>
            <p className="userLvl">Level 1</p>
            <p className="userDescription">"Work hard on your test"</p>
            <div className="containerButton">
                <ButtonIcon text={"LOG OUT"} icon={Logout}/>
            </div>
        </div>
    )
}

export default SideBar