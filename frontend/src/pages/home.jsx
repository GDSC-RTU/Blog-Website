import React, { useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";

function HomePage(){

    
    function signOutMethod(){
        signOut(auth).then(()=>{
            console.log("logged out successfully");
        }).catch(e=>{
            console.error(e);
        })
    }

    const [user, setUser] = useState(false);
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(!user){
          setUser(false);
        }
        else{
          setUser(true);
        }
      });
      console.log(auth.currentUser)
    }, [])

    return(
        <div>
            
            <h1>Home page </h1>
            {user && <button onClick={signOutMethod}>signout</button>}
        </div>
    );
}

export default HomePage;