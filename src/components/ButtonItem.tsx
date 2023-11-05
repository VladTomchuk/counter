import React from "react";
import s from './Counter/Counter.module.css'

type PropsType = {
    callback: () => void
    title: string
}
export const ButtonItem = (props: PropsType) => {
    let disablingButton = () => {

    }
    return (
        <>
            {/*<button className={} onClick={props.callback}>{props.title}</button>*/}
        </>
    )
}