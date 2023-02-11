import React from 'react';
import Left from "./left";
import  style from "./style.module.css"
import Center from "./center";
import Footer from "../Footer/footer";

const Main = () => {

    return (
        <div className={style.allMain}>
            <div className={style.underMain}>
       <Left/>
                <Center/>

            </div>
            <Footer/>
        </div>
    );
};

export default Main;
