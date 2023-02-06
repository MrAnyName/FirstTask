import React from 'react';
import style from "./style.module.css"
import logo from "../../Images/Logo.png"
import sun from "../../Images/Sun.png"
import home from "../../Images/home.png"
///navbar logos
import log1 from "../../Images/logoNav/Vector.png"
import log2 from "../../Images/logoNav/Vector (1).png"
import log3 from "../../Images/logoNav/Group 30313.png"
import log4 from "../../Images/logoNav/Vector (2).png"
import log5 from "../../Images/logoNav/Vector (3).png"
const MyComponent = () => {
    return (
        <div className={style.head}>
            <div className={style.underHeader}>
                <div className={style.logo}><img src={logo} alt="img"/></div>
                <div className={style.nav}>

                    <ul>
                        <li>
                            <img src={home} alt="img"/>
                            <p>Home</p>
                       </li>
                        <li><img src={log1} alt="img"/><p>Portfolio</p></li>
                        <li><img src={log2} alt="img"/><p>Pricing</p></li>
                        <li><img src={log3} alt="img"/><p>MarketPlace</p></li>
                        <li><img src={log4} alt="img"/><p>Futures</p></li>
                        <li><img src={log5} alt="img"/><p>Settings</p></li>
                    </ul>
                </div>
                <div className={style.sun}>
                    <div className={style.name}><p>D</p></div>
                    <img src={sun} alt="img"/>
                </div>
            </div>

        </div>
    );
};

export default MyComponent;
