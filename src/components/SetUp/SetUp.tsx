import React, {ChangeEvent, useState} from "react";
import s from './SetUp.module.css'
import {LimitsValuesType} from "../../App";

type PropsType = {
    onClickSetHandler: () => void
    setLimitValuesHandler: (minValue: number, maxValue: number) => void
    limitValues: LimitsValuesType
}

export const SetUp = (props: PropsType) => {

    const [minValue, setMinValue] = useState(props.limitValues.minValue)
    const [maxValue, setMaxValue] = useState(props.limitValues.maxValue)
    const [error, setError] = useState(false)


    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log('Перед сэтом -', minValue)
        let newMinValue = Number(e.currentTarget.value)
        setMinValue(newMinValue)


        if (newMinValue < maxValue) {
            setError(false)
            // console.log('newMinValue ' + newMinValue + ' less than maxValue ' + maxValue)
        }
        if (newMinValue >= maxValue) {
            setError(true)
            // console.log('newMinValue ' + newMinValue + ' more or igual than maxValue ' + maxValue)
        }
        if (Math.sign(newMinValue) === -1) {
            setError(true)
            // console.log(newMinValue + ' is negative value!')
        }
    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log('Перед сэтом -', maxValue)
        let newMaxValue = Number(e.currentTarget.value)
        setMaxValue(newMaxValue)

        if (newMaxValue <= minValue) {
            setError(true)
            // console.log('newMaxValue ' + newMaxValue + ' less or igual minValue ' + minValue)
        }
        if (newMaxValue > minValue) {
            setError(false)
            // console.log('newMaxValue ' + newMaxValue + ' more than minValue ' + minValue)
        }
        if (Math.sign(newMaxValue) === -1) {
            setError(true)
            // console.log(newMaxValue + ' is negative value!')
        }
    }
    const validationError = () => {

    }

    const SetSettings = () => {
        props.setLimitValuesHandler(minValue, maxValue)
        props.onClickSetHandler()
    }
    return (
        <div className={s.setUpContainer}>
            <div className={s.setDisplay}>
                <div className={s.inputDiv}>
                    <label htmlFor="minValue">min value:</label>
                    <input className={error ? s.inputError : ''} type={"number"} name="minValue"
                           onChange={onChangeMinValueHandler} value={minValue}/>
                </div>
                <div className={s.inputDiv}>
                    <label htmlFor="maxValue">max value:</label>
                    <input className={error ? s.inputError : ''} type={"number"} name="maxValue"
                           onChange={onChangeMaxValueHandler} value={maxValue}/>
                </div>
            </div>
            <div>
                <button className={error ? s.disabledButtonSet : ''} onClick={SetSettings} value={'set'}>set</button>
            </div>
        </div>
    )
}