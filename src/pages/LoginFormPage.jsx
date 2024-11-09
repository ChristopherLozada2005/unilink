import React from "react"
import logoUnilink from "../assets/logo-unilink.png"

function LoginFormPage(){

    return(
        <>
        <nav>
            <img 
            src={logoUnilink} 
            alt="Logo" 
            width={426} 
            height={240}
            />
        </nav>
        <form action="" className="container">
            <button>Google</button>
            <button>Correo Electrónico</button>

        </form>
        </>
    )
}
export default LoginFormPage