import React, { useRef } from "react";
import { InputItem,  SubmitButton} from "../components/form";
import styles from './css/signup.module.css'
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpPage(){

    const emailRef = useRef();
    const passwordRef = useRef();
    // const Age = useRef();
    
    function onClickHandler(e){
        e.preventDefault();
        const email = emailRef.current.value;
        const passWord = emailRef.current.value;
        createUserWithEmailAndPassword(auth, email, passWord).then(
            (userCred)=>{
                const user = userCred.user;
                console.log(user);
            }
        ).catch(e=>{
            console.error(e);
        })

    }

    return (
        <div className={styles.container}>
            <h1>Signup</h1>
            <div className={styles.formControl}>
                <form action="" method="">
                    <InputItem type={"email"} Lable={"email"} Ref={emailRef}></InputItem>
                    <InputItem type={"password"} Lable={"password"} Ref={passwordRef}></InputItem>
                    <InputItem type={"number"} Lable={"age"}></InputItem>
                    <SubmitButton text={"submit"} onClickHandler={onClickHandler}></SubmitButton>
                </form>
                
            </div>
        </div>
    );
}


export default SignUpPage;