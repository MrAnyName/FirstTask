import React, {useState} from 'react';
import style from "./style.module.css"
import photo from "../../Images/logoMain/down/tree-.png"
import graph from "../../Images/logoMain/down/Graph.png"
import logo from "../../Images/logoMain/down/AAVE 1.png"
import other from "../../Images/logoMain/down/Group 53.png"

const Footer = () => {

    const [hold,setHold]=useState([
        {id:1,name:"Aave Abat v2",cap:"78b",amount:99,total:"$56.48",charge:"1.88%",Market:"72.8B",price:"9.12455558",graph:graph},
        {id:2,name:"Aave Abat v2",cap:"78b",amount:99,total:"$56.48",charge:"1.88%",Market:"72.8B",price:"9.12455558",graph:graph},
        {id:3,name:"Aave Abat v2",cap:"78b",amount:99,total:"$56.48",charge:"1.88%",Market:"72.8B",price:"9.12455558",graph:graph},
    ])

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
                    <div className={style.headOf}>
                        <p className={style.hold}>Holdings</p>
                        <p className={style.more}>See more</p>
                    </div>
                 <div className={style.menuNames}>
                     <p>Name</p>
                     <p>    Amount</p>
                     <p>Total</p>
                     <p>1 Hour Charge</p>
                     <p>Market Cap</p>
                     <p>Price in BTC</p>
                     <p>Price Graph(7D)</p>
                     <p><img src={photo} alt="img"/></p>
                 </div>
                 <div className={style.menu}>
                     {hold.map(({id,name,cap,amount,total,charge,Market,price,graph})=>{
                         return <div className={style.menuid} key={id}>
                          <p>
                              <img src={logo} alt="img"/>
                              {name}
                          </p>
                             <p>{amount}</p>
                             <p>{total}</p>
                             <p>{charge}</p>
                             <p>{cap}</p>
                             <p>{price}</p>
                             <p><img src={graph} alt="img"/></p>
                             <p><img src={other} alt="img"/></p>
                         </div>
                     })}
                 </div>
             </div>
           </div>
        </div>
    );
};

export default Footer;
