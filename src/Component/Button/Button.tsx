import React from 'react';
import styles from './Button.module.css'


type PropsType = {
    onClick?: () => void
    title: string
    disabled: boolean
}
const Button: React.FC<PropsType> = (props) => {
    return (
        <div>
            <button
                disabled={props.disabled}
                className={styles.btn}
                onClick={props.onClick}
            >{props.title}
            </button>
        </div>
    )
}

export default Button;


