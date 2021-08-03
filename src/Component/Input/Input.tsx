import React, {ChangeEvent} from 'react';
import styles from './Input.module.css'


type InputType = {
    maxValue: number
    minValue: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputType> = (props) => {
    const stylerInput = () => {
        return `${(props.maxValue < 0 || props.minValue < 0) ? styles.redInput : styles.input}`
    }

    return (
        <div>
            <input className={stylerInput()} type="number" onChange={props.onChange}/>
        </div>
    );
};

export default Input;