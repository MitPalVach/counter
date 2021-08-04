import React, {ChangeEvent} from 'react';
import styles from './Input.module.css'


type InputType = {
    maxValue: number
    minValue: number
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputType> = (props) => {
    const stylerInput = () => {
        return `${(props.maxValue < 0 || props.minValue < 0 ||props.maxValue === props.minValue) ? styles.redInput : styles.input}`
    }

    return (
        <div>
            <input className={stylerInput()} type="number" value={props.value} onChange={props.onChange}/>
        </div>
    );
};

export default Input;