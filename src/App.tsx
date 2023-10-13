import React, {useState} from 'react';
import s from './App.module.css';
import {SetUp} from "./components/SetUp/SetUp";
import {Counter} from "./components/Counter/Counter";

function App() {


    const [switchToSetDisplay, setSwitchToSetDisplay] = useState(false)
    const [count, setCount] = useState(0)
    const [limitValues, setLimitValues] = useState({minValue: 0, maxValue: 5})


    const onClickIncHandler = () => {
        if (count < limitValues.maxValue) {
            setCount(count + 1)
        } else setCount(5)
    }
    const onClickResetHandler = () => {
        setCount(0)
    }
    const onClickSetHandler = () => {
        if (!switchToSetDisplay) {
            setSwitchToSetDisplay(true)
        } else {
            setSwitchToSetDisplay(false)
        }
    }

    return (
        <div className="App">
            <div className={s.MainContainer}>
                <div className={s.CounterContainer}>

                    {!switchToSetDisplay

                        ? <Counter
                            count={count}
                            maxValue={limitValues.maxValue}
                            onClickSetHandler={onClickSetHandler}
                            onClickResetHandler={onClickResetHandler}
                            onClickIncHandler={onClickIncHandler}
                        />
                        : <SetUp onClickSetHandler={onClickSetHandler}
                        />
                    }

                </div>
            </div>

        </div>
    );
}

export default App;