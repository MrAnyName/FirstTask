import React from 'react';
import style from "./style.module.css"
const Footer = () => {
    return (
        <div className={style.foot}>
            <div className={style.inFoot}>
            <div className={style.left}>
                <div className={style.free}>
                  <p>
                      Your free trial has been started․ There are <span className={style.redtxt}>  5 days</span> left.
                  </p>
                    <button className={style.butX}>x</button>
                </div>
                <button className={style.sub}>
                    Subscribe
                </button>
            </div>
             <div className={style.right}>

             </div>
           </div>
        </div>
    );
};

export default Footer;
