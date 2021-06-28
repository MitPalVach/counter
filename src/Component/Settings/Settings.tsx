import React, {ChangeEvent} from 'react';
import styles from './Settings.module.css'
import Input from "../Input/Input";


type PropsType = {
    maxValue: number
    minValue: number
    changeMaxValue: (maxValue: number) => void
    changeMinValue: (minValue: number) => void
}
const Settings: React.FC<PropsType> = (props) => {
    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(event.target.valueAsNumber)
    }
    const onChangeMinHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(event.target.valueAsNumber)
    }

    return (
        <div className={styles.settings__block}>
            <div className={styles.element__item}>
                <div className={styles.title}>Max value:</div>
                <Input onChange={onChangeMaxHandler}/>
            </div>
            <div className={styles.element__item}>
                <div className={styles.title}>Min value:</div>
                <Input onChange={onChangeMinHandler}/>
            </div>
        </div>
    );
};

export default Settings;