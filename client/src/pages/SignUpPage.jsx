import React from "react";
import Header from "../components/Header";
import SignUp from "../components/SignUp";

function SignUpPage(props) {
    return (
        <>
        <Header login={true} signup={false}/>
        < SignUp setUser={props.setUser}/>
        </>       
    )
}

export default SignUpPage;