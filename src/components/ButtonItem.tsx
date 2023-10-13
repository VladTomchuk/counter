import React from "react";

type PropsType = {
    callback: () => void
    title: string
}
export const ButtonItem = (props: PropsType) => {
    return (
        <>
            <button onClick={props.callback}>{props.title}</button>
        </>
    )
}