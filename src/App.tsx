import React from 'react';
import Display from "./Component/Display/Display";
import styles from './App.module.css'
import Settings from "./Component/Settings/Settings";
import Button from "./Component/Button/Button";


function App() {
    let [counter, setCounter] = React.useState(0)
    let [disable, setDisable] = React.useState(true)
    let [activeReset, setActiveReset] = React.useState(false)
    let [maxValue, setMaxValue] = React.useState(5)
    let [minValue, setMinValue] = React.useState(0)

    let inc = () => {
        if (counter >= 0 && counter < 5) {
            setCounter(++counter)
            setDisable(false)
        }
        if (counter === 5) {
            setActiveReset(true)
        }
    }
    let reset = () => {
        setCounter(0)
        setDisable(true)
        setActiveReset(false)
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
                <Settings maxValue={maxValue}
                          minValue={minValue}
                          changeMaxValue={changeMaxValue}
                          changeMinValue={changeMinValue}/>
                <Button onClick={onClickSetHandler} title={'Set'}/>
            </div>
            <div className={styles.element__item}>
                <Display count={counter}
                         activeReset={activeReset}/>
                <Button onClick={onClickHandler} title={'Inc'}/>
                <Button disabled={disable} onClick={onResetHandler} title={'Reset'}/>
            </div>
        </div>
    )
}

export default App;
