import React, {useState} from 'react';
import Display from "./Component/Display/Display";
import styles from './App.module.css'
import Settings from "./Component/Settings/Settings";
import Button from "./Component/Button/Button";


function App() {
    let [counter, setCounter] = React.useState(0)
    let [disable, setDisable] = React.useState(true)
    let [maxValue, setMaxValue] = React.useState(3)
    let [minValue, setMinValue] = useState(0)
    let [starting, setStarting] = useState(false)

    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
        setDisable(false)
        if (maxValue <= minValue) {
            setDisable(true)
        } else if (maxValue < 0 || minValue < 0) {
            setDisable(true)
        }
    }
    const changeMinValue = (minValue: number) => {
        setMinValue(minValue)
        setDisable(false)
        if (maxValue <= minValue) {
            setDisable(true)
        } else if (maxValue < 0 || minValue < 0) {
            setDisable(true)
        }
    }
    const onSetHandler = () => {
        if (minValue === 0) {
            setStarting(true)
        }
        setCounter(minValue)
        setDisable(true)
    }
    let onIncHandler = () => {
        if (minValue > 0) {
            setStarting(false)
        }
        if (counter >= minValue && counter < maxValue) {
            setCounter(++counter)
        }
    }
    let onResetHandler = () => {
        setCounter(0)
    }

    return (
        <div className={styles.App}>
            <div className={styles.element__item}>
                <Settings maxValue={maxValue}
                          minValue={minValue}
                          value={counter}
                          changeMaxValue={changeMaxValue}
                          changeMinValue={changeMinValue}/>
                <Button onClick={onSetHandler}
                        disabled={disable}
                        title={'Set'}/>
            </div>
            <div className={styles.element__item}>
                <Display maxValue={maxValue}
                         minValue={minValue}
                         starting={starting}
                         count={counter}/>
                <Button onClick={onIncHandler}
                        disabled={counter === maxValue}
                        title={'Inc'}/>
                <Button disabled={counter === minValue}
                        onClick={onResetHandler} title={'Reset'}/>
            </div>
        </div>
    )
}

export default App;
