import React from 'react';
import styles from './Display.module.css'


type PropsType = {
    count: number
    activeReset: boolean
    maxValue: number
    minValue: number
}
const Display: React.FC<PropsType> = (props) => {
    const styleCounter = () => {
        if (props.activeReset) {
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
            return `${props.count} `
        }
    }

    return (
        <div className={styleCounter()}>
            <div className={stylerDisplay()}>{displayIncorrect()}</div>
        </div>
    )
}

export default Display;