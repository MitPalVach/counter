import React from 'react';
import styles from './Display.module.css'


type PropsType = {
    count: number
    activeReset: boolean
}
const Display: React.FC<PropsType> = (props) => {
    const styleCounter = () => {
        return `${props.activeReset ? styles.active__reset : ""} ${styles.counter__inner}`
    }
    return (
        <div className={styleCounter()}>
            <div>{props.count}</div>
        </div>
    )
}

export default Display;