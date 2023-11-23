import React, {useState} from 'react';
import s from './App.module.css';
import {SetUp} from "./components/SetUp/SetUp";
import {Counter} from "./components/Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {setLimitValuesAC} from "./state/settingsReducer";
import {AppRootStateType} from "./state/store";


export type LimitsValuesType = {
    minValue: number
    maxValue: number
}

function App() {

    console.log("rerendered app")

    const settings = useSelector<AppRootStateType, LimitsValuesType>(state => state.settingsReducer)
    const dispatch = useDispatch()

    const [displaySwitcher, setDisplaySwitcher] = useState(true)
    const [count, setCount] = useState(settings ? settings.minValue : 0)

    const setLimitValuesHandler = (minValue: number, maxValue: number) => {
        // @ts-ignore
        dispatch(setLimitValuesAC(minValue, maxValue))
        setCount(minValue)
    }
    const onClickIncHandler = () => {
        if (count < settings.maxValue) {
            setCount(count + 1)
        }
    }
    const onClickResetHandler = () => {
        setCount(settings.minValue)
    }
    const onClickSetHandler = () => {
        if (displaySwitcher) {
            setDisplaySwitcher(false)

        } else {
            setDisplaySwitcher(true)
        }
    }

    return (
        <div className="App">
            <div className={s.MainContainer}>
                <div className={s.CounterContainer}>

                    {displaySwitcher

                        ? <Counter
                            count={count}
                            limitValues={settings}
                            onClickSetHandler={onClickSetHandler}
                            onClickResetHandler={onClickResetHandler}
                            onClickIncHandler={onClickIncHandler}
                        />
                        : <SetUp onClickSetHandler={onClickSetHandler}
                                 setLimitValuesHandler={setLimitValuesHandler}
                                 limitValues={settings}
                        />
                    }

                </div>
            </div>

        </div>
    );
}

export default App;