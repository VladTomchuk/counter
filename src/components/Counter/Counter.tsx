import React from "react";
import s from './Counter.module.css'
import {ButtonItem} from "../ButtonItem";

type PropsType = {
    count: number
    maxValue: number
    onClickSetHandler: () => void
    onClickResetHandler: () => void
    onClickIncHandler: () => void
}

export const Counter = (props: PropsType) => {
    return (
        <div className={s.CounterContainer}>
            <div className={s.display}>
                <span
                    className={props.maxValue === props.count ? s.countNumberLimit : s.displayColor}>{props.count}</span>
            </div>
            <div className={s.buttonsContainer}>

                <ButtonItem title={'inc'} callback={props.onClickIncHandler}/>
                <ButtonItem title={'reset'} callback={props.onClickResetHandler}/>
                <ButtonItem title={'set'} callback={props.onClickSetHandler}/>
            </div>
        </div>
    )
}
