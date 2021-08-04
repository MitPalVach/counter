import React from 'react';
import styles from './Display.module.css'


type PropsType = {
    count: number
    maxValue: number
    minValue: number
    starting: boolean
}
const Display: React.FC<PropsType> = (props) => {
    const styleCounter = () => {
        if (props.maxValue === props.count) {
            return `${styles.active__reset} ${styles.counter__inner}`
        } else {
            return styles.counter__inner
        }
    }
    const stylerDisplay = () => {
        if (props.maxValue < 0 || props.minValue < 0) {
            return styles.display__value
        } else if (props.maxValue <= props.minValue) {
            return styles.display__value
        } else {
            return ''
        }
    }
    const displayIncorrect = () => {
        if (props.maxValue < 0 || props.minValue < 0) {
            return 'Incorrect value!'
        } else if (props.maxValue <= props.minValue) {
            return 'Incorrect value!'
        } else {
            return `${props.count ? props.count : 'Enter values and press set'} `
        }
    }

    return (
        <div className={styleCounter()}>
            {props.starting
                ? <div className={stylerDisplay()}>{props.count}</div>
                : <div className={stylerDisplay()}>{displayIncorrect()}</div>}
        </div>
    )
}

export default Display;