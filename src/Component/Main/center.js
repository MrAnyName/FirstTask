import React from 'react';
import style from "./styleCent.module.css"

import vector from "../../Images/logoMain/center/Vector.png"
import firstIMg from"../../Images/logoMain/center/firstImg.png"
import exchange from "../../Images/logoMain/center/exchanges.png"
import oval from "../../Images/logoMain/center/oval.png"
const Center = () => {
    return (
        <div className={style.center}>
             <div className={style.up}>
                 <div className={style.upLeft}>
                     <div className={style.uplftHead}>
               <div className={style.leftHead}>
                   <p>Total Points</p>
                   <button className={style.allBut}>
                       <p>All</p>
                       <img src={vector} alt="img"/>
                   </button>
                   <button className={style.allBut}>
                       <p>1Year</p>
                       <img src={vector} alt="img"/>
                   </button>
                   <div className={style.Drdw}>
                       <p>MetaMask</p>
                       <p>Binance</p>
                       <p>Coinbace</p>
                   </div>
                   <div className={style.Drdw2}>
                       <p>1week</p>
                       <p>1day</p>
                       <p>1month</p>
                   </div>
               </div>
                         <div className={style.rightHead}>
                             <a href="#">See more</a>
                         </div>

                         
                     </div>
                     {/*///////////////////////////////*/}
                     <div className={style.uplftMain}>
                         <img src={firstIMg} alt="img"/>
                     </div>

                     <div className={style.uplftFoot}>
                         <input type="checkbox"/>
                         <p>USD</p>
                         <input type="checkbox"/>
                         <p>BTC</p>
                         <input type="checkbox"/>
                         <p>ETH</p>
                     </div>

                    
                 </div>
                 <div className={style.upcent}>
                     <div className={style.headCent}>
                         <p>Most usable exchanges</p>
                         <a href="#">See more</a>
                     </div>
                     <div className={style.exchange}>
                         <img src={exchange} alt="img"/>
                     </div>
                 </div>
                 <div className={style.upright}>
                     <div className={style.headCent}>
                         <p>Coins</p>
                         <a href="#">See more</a>
                     </div>
                     <div className={style.oval}>
                         <img src={oval
                         } alt="img"/>
                     </div>
                     <div className={style.month}>
                         <p>1h</p>
                         <p>24h</p>
                         <p>7d</p>
                         <p>1m</p>
                         <p>3m</p>
                         <p>6m</p>
                         <p>1y</p>
                         <p>All</p>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Center;
