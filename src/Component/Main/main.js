import React from 'react';
import Left from "./left";
import  style from "./style.module.css"
import Center from "./center";

const Main = () => {

    return (
        <div className={style.allMain}>
            <div className={style.underMain}>
       <Left/>
                <Center/>
            </div>
        </div>
    );
};

export default Main;
