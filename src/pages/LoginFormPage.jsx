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
            <button>Google</button> <br />
            <button>Correo Electrónico</button> <br />

            <input type="email" id="email" name="email"  placeholder="Correo" required /> <br />

        </form>
        </>
    )
}
export default LoginFormPage