import React from 'react';
import style from "./styleCent.module.css"

import vector from "../../Images/logoMain/center/Vector.png"
import firstIMg from"../../Images/logoMain/center/firstImg.png"
import exchange from "../../Images/logoMain/center/exchanges.png"
import oval from "../../Images/logoMain/center/oval.png"
import back from"../../Images/logoMain/center/back.png"
import back2 from "../../Images/logoMain/down/rb.png"
import vectors from"../../Images/logoMain/center/Vectors.png"
import red from "../../Images/logoMain/down/red.png"
import green from "../../Images/logoMain/down/green (2).png"
///////////
import an1 from "../../Images/logoMain/down/analyt1.png"
import an2 from "../../Images/logoMain/down/an2-1.png"
import an2_1 from "../../Images/logoMain/down/an2-2.png"
import an3 from "../../Images/logoMain/down/an3.png"
import an4 from "../../Images/logoMain/down/an4.png"
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
            <div className={style.down}>
                <div  className={style.downLeft} style={{backgroundImage:`url(${back})`,backgroundSize:"cover"}}>
                    <div className={style.downUp}>
                        <div className={style.D}>D</div>
                        <div className={style.price}>
                            <div className={style.priceIm}>
                                <img src={vectors} alt="img"/>
                                <p>$855,914.000</p>
                            </div>
                            <h2>Mr Nick Peterson</h2>
                        </div>
                    </div>
                    <div className={style.downDown}>
                        <p>1h</p>
                        <p>24h</p>
                        <p>7d</p>
                        <p>1m</p>
                        <p>3m</p>
                        <p>6m</p>
                        <p>1y</p>
                        <p>All</p>
                    </div>
                    <div></div>
                </div>
                <div className={style.downCenter}>
                    <div className={style.downCentHead}>
                       <p>Analytics</p>
                        <a href="#">See more</a>
                    </div>
                    <div className={style.downCentButs}>
                        <button>
                            <img src={an1} alt="img"/>
                            <p>Total Trade Count</p>
                            <h3>128</h3>
                        </button>
                        <button>
                            <img src={an2} alt="img"/>
                            <p>The most used Exchanges</p>
                            <h3><img src={an2_1} alt="img"/> Binance</h3>
                        </button>
                        <button>
                            <img src={an3} alt="img"/>
                            <p>Total Withdraw</p>
                            <h3>$200</h3>
                        </button>
                        <button>
                            <img src={an4} alt="img"/>
                            <p>Total free Paid</p>
                            <h3>$12</h3>
                        </button>
                    </div>
                </div>
                <div className={style.downRight}>
                    <div className={style.downCentHead}>
                        <p>Futures</p>
                        <a href="#">See more</a>
                    </div>
                    <div className={style.rigMain}>
                        <div className={style.any}>
                            <div className={style.rightMainLeft}>
                                <div className={style.anyp}> <p>3/22/2022</p>
                                    <p>17:51:03PM</p></div>
                                <div style={{display:`flex`,marginTop:`10px`}}>
                                    <img src={green} alt="img"/>
                                    <img src={red} alt="img"/>
                                </div>
                            </div>
                            <div className={style.rightMainrg}>
                                <p>$3,698.58</p>
                            </div>
                        </div>

                    </div>

                    {/*//background image because  can`t norm take photo from figma */}
                    <div className={style.rigMain2} style={{backgroundImage:`url(${back2})`,backgroundSize:"contain"}}> </div>

                </div>

            </div>
        </div>
    );
};

export default Center;
