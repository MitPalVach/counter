import React from 'react';
import Display from "./Component/Display/Display";
import styles from './App.module.css'
import Settings from "./Component/Settings/Settings";
import Button from "./Component/Button/Button";


function App() {
    let [counter, setCounter] = React.useState(0)
    let [disableReset, setDisableReset] = React.useState(true)
    let [disableInc, setDisableInc] = React.useState(false)
    let [disableSet, setDisableSet] = React.useState(false)
    let [activeReset, setActiveReset] = React.useState(false)
    let [maxValue, setMaxValue] = React.useState(3)
    let [minValue, setMinValue] = React.useState(0)

    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
    }
    const changeMinValue = (minValue: number) => {
        setMinValue(minValue)
    }

    const onSetHandler = () => {
        setCounter(minValue)
    }
    let onIncHandler = () => {
        if (counter >= minValue && counter < maxValue) {
            setCounter(++counter)
            setDisableReset(false)
        }
        if (counter === maxValue) {
            setActiveReset(true)
            setDisableInc(true)
        }
    }
    let onResetHandler = () => {
        setCounter(0)
        setDisableReset(true)
        setActiveReset(false)
    }

    if (!disableSet) {
        if (maxValue === minValue) {
            setDisableSet(true)
        } else if (minValue > maxValue) {
            setDisableSet(true)
        } else if (minValue < 0 && maxValue < 0) {
            setDisableSet(true)
        }
    }


    return (
        <div className={styles.App}>
            <div className={styles.element__item}>
                <Settings maxValue={maxValue}
                          minValue={minValue}
                          changeMaxValue={changeMaxValue}
                          changeMinValue={changeMinValue}/>
                <Button onClick={onSetHandler} disabled={disableSet} title={'Set'}/>
            </div>
            <div className={styles.element__item}>
                <Display maxValue={maxValue}
                         minValue={minValue}
                         count={counter}
                         activeReset={activeReset}/>
                <Button onClick={onIncHandler} disabled={disableInc} title={'Inc'}/>
                <Button disabled={disableReset} onClick={onResetHandler} title={'Reset'}/>
            </div>
        </div>
    )
}

export default App;
