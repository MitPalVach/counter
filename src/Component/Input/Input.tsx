import React, {ChangeEvent} from 'react';
import styles from './Input.module.css'


type InputType = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputType> = (props) => {
    return (
        <div>
            <input className={styles.input} type="number" onChange={props.onChange}/>
        </div>
    );
};

export default Input;