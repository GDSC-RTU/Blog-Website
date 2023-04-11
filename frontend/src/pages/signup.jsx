import React, { useEffect, useState } from "react";
import { InputItem,  SubmitButton} from "../components/form";
import styles from './css/signup.module.css'
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Navigate, Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
function SignUpPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [btn, setBtn] = useState(false);

    const [loading, setLoading] = useState(true);
    const [User, setUser] = useState(false);
    const [error, setError] = useState(false);
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let checkEmail = email.match(validEmail);


    function onClickHandler(e){
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then(
            (userCred)=>{
                setUser(true);
            }
        ).catch(e=>{
            console.log(e.message);
            setError(true);
        })

    }

    function googleSignup(e){
        e.preventDefault();
        signInWithPopup(auth, provider).then(userCred=>{
            setUser(true);
        }).catch(e=>{
            setUser(false)
        })
    }

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(!user){
                setUser(false);
            }
            else{
                setUser(true);
            }
            setLoading(false);
        })
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            setError(false);
        }, 3000)
    }, [error])

    useEffect(()=>{
        function validateDetails(){

           if(checkEmail && password.length> 6 && password === confirmPass) setBtn(true);
           else setBtn(false);            
            
        }

        validateDetails()

    }, [email, password, confirmPass, checkEmail]);

    


    if(loading) return (<h1>Loading...</h1>);

    return (
        <div className={styles.container}>
            <div>

                <h1>Signup</h1>
                <div className={styles.Errors}>
                    {error && <h4 className={styles.error}>can not signup</h4>}
                    { (!checkEmail && email.length>5) && <h4 className={styles.error}>email is not valid</h4>}
                    { (password.length < 6 && password.length > 0) && <h4 className={styles.error}>password at least contain 6 characters</h4>}
                    {((password !== confirmPass) && confirmPass.length>0) && <h4 className={styles.error}>it is not similar to the password</h4>}

                </div>
                
                {User && <Navigate to="/" replace={true}/>}
                
                <div className={styles.formControl}>
                    <form action="" method="">
                        <InputItem type={"email"} Lable={"email"} val={email} setVal={setEmail}></InputItem>

                        <InputItem type={"password"} Lable={"password"} val={password} setVal={setPassword}></InputItem>
                        
                        <InputItem type={"password"} Lable={"confirm password"} val={confirmPass} setVal={setConfirmPass}></InputItem>
                        
                        <SubmitButton active={btn} text={"submit"} onClickHandler={onClickHandler}></SubmitButton>
                    </form>
                </div>
                <form action="" method="" className={styles.Google}>
                    <p>or</p>
                    <button className={styles.GoogleBtn} onClick={googleSignup}>
                        <FcGoogle className={styles.GoogleImg} /> 
                        <div className={styles.GoogleText}>Signup with Google</div>
                    </button>
                </form>

                <div className={styles.line}></div>
                <div>
                    <p className={styles.center}>Already have an Account: <Link to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    );
}


export default SignUpPage;