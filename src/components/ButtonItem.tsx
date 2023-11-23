import React from "react";
import s from './Counter/Counter.module.css'

type PropsType = {
    callback: () => void
    value: 'set' | 'reset' | 'inc'
    className: string;
}
export const ButtonItem = ({callback, value, className}: PropsType) => {
    return (
        <>
            <button
                className={className}
                onClick={callback}
                value={value}>
                {value}
            </button>
        </>
    )
}