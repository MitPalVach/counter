import React from 'react';
import Display from "./Component/Display/Display";
import styles from './App.module.css'
import Settings from "./Component/Settings/Settings";


function App() {
    let [counter, setCounter] = React.useState(0)
    let [disable, setDisable] = React.useState(true)
    let [active, setActive] = React.useState(false)
    let [maxValue, setMaxValue] = React.useState(5)
    let [minValue, setMinValue] = React.useState(0)

    let inc = () => {
        if (counter >= 0 && counter < 5) {
            setCounter(++counter)
            setDisable(false)
        }
        if (counter === 5) {
            setActive(true)
        }
    }
    let reset = () => {
        setCounter(0)
        setDisable(true)
        setActive(false)
    }


    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
    }
    const changeMinValue = (minValue: number) => {
        setMinValue(minValue)
    }

    const onClickSetHandler = () => {
        setCounter(5)
    }

    const onClickHandler = () => inc()
    const onResetHandler = () => reset()

    return (
        <div className={styles.App}>
            <div className={styles.element__item}>
                <div className={styles.counter__display}>
                    <Settings maxValue={maxValue} minValue={minValue} changeMaxValue={changeMaxValue}
                              changeMinValue={changeMinValue}/>
                </div>
                <div>
                    <button onClick={onClickSetHandler}>Set</button>
                </div>
            </div>
            <div className={styles.element__item}>
                <div className={styles.counter__display}>
                    <Display count={counter} active={active}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Increase</button>
                    <button disabled={disable} onClick={onResetHandler}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
