import React from "react";
import s from './SetUp.module.css'
import {ButtonItem} from "../ButtonItem";

type PropsType = {
    onClickSetHandler: () => void
}

export const SetUp = (props: PropsType) => {

    return (
        <div className={s.setUpContainer}>
            <div className={s.setDisplay}>
                <div className={s.inputDiv}>
                    <label htmlFor="minValue">min value:</label>
                    <input type="number" name="minValue" />
                </div>
                <div className={s.inputDiv}>
                    <label htmlFor="maxValue">max value:</label>
                    <input type="number" name="maxValue"/>
                </div>
            </div>
            <div>
                <ButtonItem callback={props.onClickSetHandler} title={'set'}/>
            </div>
        </div>
    )
}