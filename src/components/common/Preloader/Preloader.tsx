import React from "react";
import s from "./Preloader.module.css";

const Preloader = () => {
    return <div className={s.spinnerWrapper}>
        <div className={s.spinnerInner}>
            <div className={s.spinner}>&nbsp;</div>
        </div>
    </div>
}

export default Preloader