import React from "react";
import s from './Counter.module.css'
import {LimitsValuesType} from "../../App";
import {ButtonItem} from "../ButtonItem";


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

                <ButtonItem
                    className={props.limitValues.maxValue === props.count ? s.disabledButton : ''}
                    callback={props.onClickIncHandler}
                    value={'inc'}/>
                <ButtonItem
                    className={props.count === props.limitValues.minValue ? s.disabledButton : ''}
                    callback={props.onClickResetHandler}
                    value={'reset'}/>
                <ButtonItem
                    className={''}
                    callback={props.onClickSetHandler}
                    value={'set'}/>
            </div>
        </div>
    )
}
