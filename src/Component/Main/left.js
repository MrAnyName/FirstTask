import React, {useState} from 'react';
import style from "./style.module.css"
//////////////////////
import rightLogo from "../../Images/logoMain/leftIcon.png"
import leftLogo from "../../Images/logoMain/rightIcon.png"
import green from "../../Images/logoMain/green.png"

import MetaLogo from "../../Images/logoMain/MetaIcon.png"
import Coinbase from "../../Images/logoMain/Ellipse 16.png"
import BinanceLogo from "../../Images/logoMain/coinbaceIcon.png"
import valsLogo from "../../Images/logoMain/vals.png"
import firstButton from "../../Images/logoMain/firstBut (2).png"
import secondButton from "../../Images/logoMain/secondBut.png"

const Main = () => {

    const[bul,setBul]=useState(false)
    const [cid,setCid]=useState()

    const [state,setState]=useState([
        {id:1,name:"Metamask",src:MetaLogo,proc:"4.85%",price:800.00},
        {id:2,name:"Binance",src:BinanceLogo,proc:"4.85%",price:100.00},
        {id:3,name:"Coinbase",src:Coinbase,proc:"4.85%",price:805.00},
        {id:4,name:"Coinbase",src:Coinbase,proc:"4.85%",price:540.00},
        {id:5,name:"Coinbase",src:Coinbase,proc:"4.85%",price:840.00},
        {id:6,name:"Coinbase",src:Coinbase,proc:"4.85%",price:8000.00},
    ])

    return (

                <div className={style.leftSide}>
                    <div className={style.leftHead}>
                        <button>
                            <p>Hide small balances</p>
                            <img src={leftLogo} alt="img"/>
                        </button>
                        <button>
                            <p>Sort</p>
                            <img src={rightLogo} alt="img"/>
                        </button>
                        <input className={style.sideInp} type="text"/>
                    </div>
                    <div className={style.leftMain}>

                        {state.map(({id,name,src,proc,price})=>{
                            return <div className={style.vals}>
                                <img src={src} alt="img"/>
                                <h3>{name}</h3>
                                <p>{proc}</p>
                                <img src={valsLogo} alt="img"/>
                                <button onClick={()=>{
                                    setBul(!bul)

                                    setCid(id)
                                }
                                }><img src={firstButton} alt="img"/></button>

                                <button><img src={secondButton} alt="img"/></button>
                                {
                                    bul && id==cid && <div className={style.criptoes}>
                                        <div className={style.cptUp}>
                                            <div className={style.uplft}>
                                                <div style={{display:"flex",}}>
                                                    <img src={src} alt="img"/>
                                                    <h2>{name}</h2>
                                                </div>
                                                <p>${price}</p>
                                            </div>
                                            <div className={style.uprght} >
                                                <p>{price/1000*100}%</p>
                                                <img src={green} alt="img"/>
                                            </div>
                                        </div>
                                        <div className={style.cptDown}>
                                            <div>
                                                <img src={src} alt="img"/>
                                                <p>{name} Saving</p>
                                            </div>
                                            <div>
                                                <img src={src} alt="img"/>
                                                  <p>{name} Futures</p>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>
                        })}


                    </div>

                </div>



    );
};

export default Main;
