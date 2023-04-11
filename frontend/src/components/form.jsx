import React from "react";
import styles from './css/form.module.css'

function InputItem({type, Lable, Ref}){

    return (<>
        <div className={styles.inputItem}>
            <label htmlFor={Lable}>{Lable}:</label>
            <input type={type} name={Lable} id={Lable} ref={Ref}/>
        </div>
    </>)

}

function SubmitButton({text, onClickHandler}){

    return(<>
        <div className={styles.btnDiv}>
            <button className={styles.submitBtn} type="submit" onClick={onClickHandler}>{text}</button>
        </div>
    </>)
}

export {InputItem, SubmitButton};

