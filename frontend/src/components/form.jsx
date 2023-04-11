import React from "react";
import styles from './css/form.module.css'

function InputItem({type, Lable, val, setVal}){

    return (<>
        <div className={styles.inputItem}>
            <label htmlFor={Lable}>{Lable}:</label>
            <input type={type} name={Lable} id={Lable} value={val} onChange={(e)=>setVal(e.target.value)}/>
        </div>
    </>)

}

function SubmitButton({text, onClickHandler, active}){

    return(<>
        <div className={styles.btnDiv}>
            <button disabled={!active} className={styles.submitBtn} type="submit" onClick={onClickHandler}>{text}</button>
        </div>
    </>)
}

export {InputItem, SubmitButton};

