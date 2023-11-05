import React, {useState} from 'react';
import s from './App.module.css';
import {SetUp} from "./components/SetUp/SetUp";
import {Counter} from "./components/Counter/Counter";


export type LimitsValuesType = {
    minValue: number
    maxValue: number
}

function App() {

    const [displaySwitcher, setDisplaySwitcher] = useState(false)
    const [limitValues, setLimitValues] = useState<LimitsValuesType>({minValue: 0, maxValue: 5})
    const [count, setCount] = useState(0)

    const setLimitValuesHandler = (minValue: number, maxValue: number) => {
        let newLimitValues = {minValue, maxValue}
        setLimitValues(newLimitValues)
        setCount(newLimitValues.minValue)
    }
    const onClickIncHandler = () => {
        if (count < limitValues.maxValue) {
            setCount(count + 1)
        }

    }
    const onClickResetHandler = () => {
        setCount(limitValues.minValue)
    }
    const onClickSetHandler = () => {
        if (!displaySwitcher) {
            setDisplaySwitcher(true)
        } else {
            setDisplaySwitcher(false)
        }
    }

    return (
        <div className="App">
            <div className={s.MainContainer}>
                <div className={s.CounterContainer}>

                    {!displaySwitcher

                        ? <Counter
                            count={count}
                            limitValues={limitValues}
                            onClickSetHandler={onClickSetHandler}
                            onClickResetHandler={onClickResetHandler}
                            onClickIncHandler={onClickIncHandler}
                        />
                        : <SetUp onClickSetHandler={onClickSetHandler}
                                 setLimitValuesHandler={setLimitValuesHandler}
                                 limitValues={limitValues}
                        />
                    }

                </div>
            </div>

        </div>
    );
}

export default App;