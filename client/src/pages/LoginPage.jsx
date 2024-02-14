import React from "react";
import Header from "../components/Header";
import LogIn from "../components/LogIn";


function LoginPage(props){
    return (
        <>
        <Header login={false} signup={true}/>
        <LogIn setUser={props.setUser} />
        </>
    )
}

export default LoginPage;