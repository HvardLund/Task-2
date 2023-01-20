import { useState } from "react";
import { useState } from "react-router-dom";

function LoginButton(){
    const [userName, setUserName] = useState("unknown");

    function handleLoginButton(){
        console.log(localStorage.getItem("userName"))
        localStorage.setItem("userName", userName)
    }

    function updateUsername(event){
        setUserName(event.target.value)

    }

    return(
        <div>
            <input type="text"> </input>
        </div>
    )
}

export default LoginButton;