import React from "react"
import logoUnilink from "../assets/logo-unilink.png"
import '../css/LoginFormPage.css'

function LoginFormPage(){

    return(
        <>
        <nav>
            <img className="logo"
            src={logoUnilink} 
            alt="Logo" 
            />
        </nav>
        <form action="" className="container">
            <button>Iniciar Sesión con google</button> <br />
            <button>Correo Electrónico</button> <br />
            <input type="email" id="email" name="email"  placeholder="Correo" required /> <br />
            <input type="password" id="password" name="password" placeholder="Contraseña" required  /> <br />
            <a href="">¿Haz olvidado tu contraseña?</a>
            <br />
            <button className="accesButton">Acceso</button> <br />
            <a href="">
                ¿No tienes una cuenta?
                Registrate
            </a>
                
            

        </form>
        </>
    )
}
export default LoginFormPage