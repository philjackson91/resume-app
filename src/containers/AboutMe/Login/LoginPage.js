import React from 'react';
import style from './Login.module.css';

const loginPage = ( props ) => {
    let inputElement = null;
    const inputStyles = [style.InputElement];

    if (props.invalid && props.shouldValidate & props.touched) {
        inputStyles.push(style.Invalid)
    }

    switch ( props.elementType ) {
        case ( 'pwd' ):
            inputElement = <input
                className={inputStyles.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ( 'email' ):
            inputElement = <input
                className={inputStyles.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}  />
            break;
        default:
            inputElement = <input
                className={inputStyles.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}  />
    }

    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.Label}</label>
            {inputElement}
        </div>
    )
}

export default loginPage;