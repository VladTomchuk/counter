import React from "react";
import s from './Counter.module.css'
import {ButtonItem} from "../ButtonItem";
import {LimitsValuesType} from "../../App";


type PropsType = {
    count: number
    limitValues: LimitsValuesType
    onClickSetHandler: () => void
    onClickResetHandler: () => void
    onClickIncHandler: () => void
}

export const Counter = (props: PropsType) => {
    return (
        <div className={s.CounterContainer}>
            <div className={s.display}>
                <span
                    className={props.limitValues.maxValue === props.count ? s.countNumberLimit : s.displayColor}>{props.count}</span>
            </div>
            <div className={s.buttonsContainer}>

                <button className={props.limitValues.maxValue === props.count ? s.disabledButton : ''}
                        onClick={props.onClickIncHandler} value={'inc'}>inc
                </button>
                <button className={props.count === props.limitValues.minValue ? s.disabledButton : ''}
                        onClick={props.onClickResetHandler} value={'reset'}>reset
                </button>
                <button onClick={props.onClickSetHandler} value={'set'}>set</button>
            </div>
        </div>
    )
}
